import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography, Alert, Table, Spin } from "antd";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdSupervisorAccount } from "react-icons/md";
import { useAdminContext } from "./AdminContext";

const { Title, Text } = Typography;

const AddAdmin = () => {
  const { admins, setAdmins } = useAdminContext();
  const [form] = Form.useForm();
  const [addAdminStatus, setAddAdminStatus] = useState(null);
  const [loadingAdmins, setLoadingAdmins] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setLoadingAdmins(true);
    fetch("https://projectbackend-7v9s.onrender.com/admin/list")
      .then((r) => r.json())
      .then((r) => {
        setAdmins(r.admins || []);
        setLoadingAdmins(false);
      })
      .catch(() => setLoadingAdmins(false));
  }, [setAdmins]);

  const onFinish = async (values) => {
    setAddAdminStatus(null);
    setSubmitting(true);

    try {
      const res = await fetch("https://projectbackend-7v9s.onrender.com/admin/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok) {
        setAddAdminStatus({ success: true, message: "Admin added successfully!" });
        form.resetFields();
        setAdmins((prev) => [{ adminName: values.adminName, email: values.email }, ...prev]);
      } else {
        setAddAdminStatus({ success: false, message: data.message || "Failed to add admin." });
      }
    } catch {
      setAddAdminStatus({ success: false, message: "Server error." });
    }
    setSubmitting(false);
  };

  // antd Table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "adminName",
      key: "adminName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <div className="add-admin">
      <div className="add-admin-form-wrapper" style={{ marginBottom: 32 }}>
        <div className="admin-form-header" style={{ marginBottom: 24 }}>
          <Title level={2} style={{ marginBottom: 0 }}>
            <AiOutlineUserAdd style={{ marginRight: 8 }} />
            Add New Admin
          </Title>
          <Text type="secondary">Fill the form below to invite a new admin.</Text>
        </div>
        {addAdminStatus && (
          <Alert
            style={{ marginBottom: 16 }}
            message={addAdminStatus.message}
            type={addAdminStatus.success ? "success" : "error"}
            showIcon
            closable
            onClose={() => setAddAdminStatus(null)}
          />
        )}
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          style={{ maxWidth: 400 }}
        >
          <Form.Item
            label="Full Name"
            name="adminName"
            rules={[{ required: true, message: "Please enter admin name" }]}
          >
            <Input placeholder="Enter admin name" />
          </Form.Item>
          <Form.Item
            label="Email (Login)"
            name="email"
            rules={[
              { required: true, message: "Please enter admin email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input placeholder="admin@example.com" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password placeholder="Password (min 6 chars)" autoComplete="new-password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={submitting} block>
              <AiOutlineUserAdd style={{ marginRight: 6 }} />
              Create Admin
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="add-admin-list-wrapper">
        <Title level={4}>
          <MdSupervisorAccount style={{ marginRight: 6 }} />
          Current Admins
        </Title>
        {loadingAdmins ? (
          <Spin />
        ) : (
          <Table
            dataSource={admins}
            columns={columns}
            rowKey={(record, idx) => idx}
            pagination={{ pageSize: 5 }}
            locale={{ emptyText: "No admins yet." }}
          />
        )}
      </div>
    </div>
  );
};

export default AddAdmin;
