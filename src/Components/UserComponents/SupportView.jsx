import React, { useEffect, useState } from 'react';
import {
    Table,
    Tag,
    Button,
    Modal,
    Input,
    Form,
    message,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { postNewTicketData, getTicketsData } from '../../ApplicationLayer/Api';

const { TextArea } = Input;

const statusColors = {
    Open: 'blue',
    'In Progress': 'orange',
    Resolved: 'green',
};

const SupportView = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [tickets, setTickets] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    // Fetch tickets from backend on mount and update tickets state
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await fetch(getTicketsData);
                if (!response.ok) throw new Error('Failed to fetch tickets.');
                const data = await response.json();

                const normalizedTickets = data.map(ticket => ({
                    key: ticket.id || ticket.key,
                    subject: ticket.subject,
                    date: ticket.date ? ticket.date.split('T')[0] : '',
                    status: ticket.status,
                }));

                setTickets(normalizedTickets);
            } catch (error) {
                messageApi.error('Error fetching tickets: ' + error.message);
            }
        };

        fetchTickets();
    }, [messageApi]);


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const generateId = () => {
        return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
    };

    const handleNewTicket = async (values) => {
        const newTicket = {
            key: generateId(),
            subject: values.subject,
            date: new Date().toISOString().split('T')[0],
            status: 'Open',
            message: values.message,
            id: generateId(),             // send both key and id for backend
            timestamp: new Date().toISOString(),  // full timestamp with time
        };

        try {
            const response = await fetch(postNewTicketData);

            if (response.ok) {
                setTickets(prev => [newTicket, ...prev]);
                messageApi.success('Your support request has been sent!');
                form.resetFields();
                setIsModalOpen(false);
            } else {
                const data = await response.json();
                messageApi.error(data.message || 'Failed to send support request.');
            }
        } catch (error) {
            messageApi.error('Server error: ' + error.message);
        }
    };

    // Provide admin replies (could be enhanced by fetching from backend)
    const mockReplies = {
        '1001': 'Thanks for submitting. We’re reviewing this.',
        '1002': 'Documentation issue acknowledged. Please re-upload the W2 form.',
    };

    const expandedRowRender = (record) => (
        <div style={{ marginTop: 12 }}>
            <Tag color="purple">Admin's Response:</Tag>
            <p style={{ marginTop: 8 }}>
                {mockReplies[record.key] || 'No response yet. We’ll get back to you soon.'}
            </p>
        </div>
    );

    const columns = [
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag color={statusColors[status] || 'default'}>{status}</Tag>
            ),
        },
    ];

    return (
        <div className="inner-content">
            {contextHolder}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                    <h1>Support & Messages</h1>
                    <p>Start a support request or read replies from our team.</p>
                </div>
                <Button type="primary" icon={<PlusOutlined />} onClick={openModal}>
                    New Support Request
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={tickets}
                expandable={{
                    expandedRowRender,
                    rowExpandable: () => true,
                }}
                pagination={{ pageSize: 5 }}
            />

            {/* New Ticket Modal */}
            <Modal
                title="New Support Request"
                visible={isModalOpen}
                onCancel={closeModal}
                onOk={() => form.submit()}
                okText="Send"
            >
                <Form form={form} layout="vertical" onFinish={handleNewTicket}>
                    <Form.Item
                        name="subject"
                        label="Subject"
                        rules={[{ required: true, message: 'Please enter a subject' }]}
                    >
                        <Input placeholder="e.g. Unable to upload W2 form" />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        label="Describe your issue"
                        rules={[{ required: true, message: 'Message cannot be empty' }]}
                    >
                        <TextArea rows={5} placeholder="Please describe your issue in detail..." />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default SupportView;
