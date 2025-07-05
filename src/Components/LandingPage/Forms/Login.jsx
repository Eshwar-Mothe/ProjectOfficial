import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

const { Title, Text } = Typography;

const Login = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onFinish = (values) => {
        console.log('Login Success:', values);
    };

    return (
        <>
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="auth-container login-bg">
                <Card className="auth-card">
                    <Title level={2}>Sign in to your account</Title>
                    <Text type="secondary">Welcome back to Adwik</Text>

                    <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
                        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                            <Input placeholder="you@example.com" />
                        </Form.Item>

                        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                            <Input.Password placeholder="Enter your password" />
                        </Form.Item>

                        <div style={{ textAlign: 'right', marginBottom: 16 }}>
                            <Link to="/forgotPassword">Forgot password?</Link>
                        </div>

                        <Form.Item>
                            <Button className='btn' htmlType="submit" block>
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>

                    <div style={{ marginTop: 16, textAlign: 'center' }}>
                        <Text type="secondary">
                            New user? <Link to="/signup">Create account</Link>
                        </Text>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default Login;
