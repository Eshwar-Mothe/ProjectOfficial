import React from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ResetPassword = () => {
    
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        const { newPassword, confirmPassword } = values;

        if (newPassword !== confirmPassword) {
            message.error('Passwords do not match!');
            return;
        }
        console.log('Resetting password to:', newPassword);
        message.success('Password reset successfully!');
        form.resetFields();
    };

    return (
        <div className="reset-password-container">
            <Card className="reset-password-card" bordered={false}>
                <Title level={2}>Reset Your Password</Title>
                <Text type="secondary">
                    Enter your new password...!
                </Text>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    className="reset-password-form"
                >
                    <Form.Item
                        name="newPassword"
                        label="New Password"
                        rules={[
                            { required: true, message: 'Please enter a new password' },
                            { min: 6, message: 'Password must be at least 6 characters' },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Enter new password"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        rules={[
                            { required: true, message: 'Please confirm your password' },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Confirm password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button className='btn' htmlType="submit" block>
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default ResetPassword;