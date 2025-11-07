import React, { useState } from 'react';
import { Table, Tag, Button, message } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const PaymentsView = () => {
    // Sample data (can be fetched from backend)
    const [invoices, setInvoices] = useState([
        {
            key: '1',
            invoiceNumber: 'INV-20250701',
            date: '2025-07-01',
            amount: 199.99,
            status: 'Paid',
            downloadUrl: 'https://example.com/invoice1.pdf',
        },
        {
            key: '2',
            invoiceNumber: 'INV-20250615',
            date: '2025-06-15',
            amount: 79.99,
            status: 'Pending',
            downloadUrl: 'https://example.com/invoice2.pdf',
        },
        {
            key: '3',
            invoiceNumber: 'INV-20250410',
            date: '2025-04-10',
            amount: 149.0,
            status: 'Paid',
            downloadUrl: 'https://example.com/invoice3.pdf',
        },
    ]);

    const handleDownload = (record) => {
        const link = document.createElement('a');
        link.href = record.downloadUrl;
        link.download = `${record.invoiceNumber}.pdf`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
        message.success(`Invoice ${record.invoiceNumber} downloading...`);
    };

    const statusColors = {
        Paid: 'green',
        Pending: 'orange',
        Failed: 'red',
    };

    const columns = [
        {
            title: 'Invoice #',
            dataIndex: 'invoiceNumber',
            key: 'invoiceNumber',
            sorter: (a, b) => a.invoiceNumber.localeCompare(b.invoiceNumber),
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (amount) => `$${amount.toFixed(2)}`,
            sorter: (a, b) => a.amount - b.amount,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            filters: [
                { text: 'Paid', value: 'Paid' },
                { text: 'Pending', value: 'Pending' },
                { text: 'Failed', value: 'Failed' },
            ],
            onFilter: (value, record) => record.status === value,
            render: (status) => (
                <Tag color={statusColors[status] || 'default'}>{status}</Tag>
            ),
        },
        {
            title: 'Actions',
            render: (_, record) => (
                <Button
                    type="primary"
                    icon={<DownloadOutlined />}
                    onClick={() => handleDownload(record)}
                >
                    Download Invoice
                </Button>
            ),
        },
    ];

    return (
        <div className="inner-content">
            <h1>Payments & Invoices</h1>
            <p>Track your payments, download invoices, and manage billing.</p>

            <Table
                columns={columns}
                dataSource={invoices}
                pagination={{ pageSize: 5 }}
                style={{ marginTop: '24px' }}
                bordered
            />
        </div>
    );
};

export default PaymentsView;
