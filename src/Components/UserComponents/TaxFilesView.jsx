import React, { useState } from 'react';
import { Table, Button, Tag, Popconfirm, message } from 'antd';
import { DownloadOutlined, DeleteOutlined } from '@ant-design/icons';

const mockFiles = [
    {
        key: '1',
        fileName: 'W2_2024.pdf',
        uploadDate: '2024-04-15',
        status: 'Verified',
        url: 'https://example.com/W2_2024.pdf', // Replace with real URL
    },
    {
        key: '2',
        fileName: '1099A_2024.pdf',
        uploadDate: '2024-04-12',
        status: 'Pending',
        url: 'https://example.com/1099A_2024.pdf',
    },
    {
        key: '3',
        fileName: 'Tax_Summary_2023.pdf',
        uploadDate: '2023-11-03',
        status: 'Verified',
        url: 'https://example.com/Tax_Summary_2023.pdf',
    },
];

const statusColors = {
    Verified: 'green',
    Pending: 'orange',
    Rejected: 'red',
};

const TaxFilesView = () => {
    const [files, setFiles] = useState(mockFiles);

    const handleDelete = (key) => {
        setFiles(prev => prev.filter(file => file.key !== key));
        message.success('File deleted successfully.');
    };

    const handleDownload = (url, fileName) => {
        // Simulate a download action (open in new tab or trigger anchor)
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.click();
    };

    const columns = [
        {
            title: 'File Name',
            dataIndex: 'fileName',
            key: 'fileName',
        },
        {
            title: 'Upload Date',
            dataIndex: 'uploadDate',
            key: 'uploadDate',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag color={statusColors[status] || 'default'}>{status}</Tag>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button
                        icon={<DownloadOutlined />}
                        type="primary"
                        onClick={() => handleDownload(record.url, record.fileName)}
                    >
                        Download
                    </Button>

                    <Popconfirm
                        title="Are you sure you want to delete this file?"
                        onConfirm={() => handleDelete(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button icon={<DeleteOutlined />} danger>
                            Delete
                        </Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <div className="inner-content">
            <h1>My Tax Files</h1>
            <p>Here you can view, download or manage your previously submitted tax documents.</p>

            <Table
                columns={columns}
                dataSource={files}
                pagination={{ pageSize: 5 }}
                rowKey="key"
                style={{ marginTop: '24px' }}
            />
        </div>
    );
};

export default TaxFilesView;
