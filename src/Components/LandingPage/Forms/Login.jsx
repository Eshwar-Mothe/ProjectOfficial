import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation';
import { postLoginData } from '../../../ApplicationLayer/Api';
import { useUser } from '../../../UserContext';

const { Title, Text } = Typography;

const Login = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage()
  const { setUser } = useUser(); 
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const response = await postLoginData(values);
    setLoading(false);
    if (response.success) {
      messageApi.success(response.message || 'Login successful');
      setUser(response.user);
      console.log("response at login",response.user.role)
      if(response.user.role == "admin"){
        console.log("first")
        navigate('/admin');
      }else{
        console.log("second")
        navigate('/user');
      }
    } else {
      messageApi.error(response.message || 'Invalid credentials');
    }
  };

  return (
    <>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="auth-container login-bg">
        {contextHolder}
        <Card className="auth-card">
          <Title level={2}>Sign in to your account</Title>
          <Text type="secondary">Welcome back to Aadwik</Text>

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
              <Button className='btn' htmlType="submit" block loading={loading}>
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
