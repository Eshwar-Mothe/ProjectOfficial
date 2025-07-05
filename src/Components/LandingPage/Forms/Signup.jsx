import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, Select, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

const { Title, Text } = Typography;
const { Option } = Select;

const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const Signup = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onFinish = (values) => {
    console.log('Sign Up Success:', values);
  };

  return (
    <>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="auth-container signup-bg">
        <Card className="auth-card">
          <Title level={2}>Create your account</Title>
          <Text type="secondary">Get started with Adwik Tax Consultancy</Text>

          <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="fullName"
                  label="Full Name"
                  rules={[{ required: true, message: 'Enter your full name' }]}
                >
                  <Input placeholder="John Doe" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}
                >
                  <Input placeholder="you@example.com" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="mobile"
                  label="Mobile Number"
                  rules={[
                    { required: true, message: 'Enter your mobile number' },
                    {
                      pattern: /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
                      message: 'Enter a valid US mobile number (e.g. 555-123-4567)',
                    },
                  ]}
                >
                  <Input placeholder="555-123-4567" maxLength={12} />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  name="state"
                  label="Your State"
                  rules={[{ required: true, message: 'Select your state' }]}
                >
                  <Select
                    showSearch
                    placeholder="Select your state"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.toLowerCase().includes(input.toLowerCase())
                    }
                  >
                    {usStates.map((state) => (
                      <Option key={state} value={state}>
                        {state}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
              <Input.Password placeholder="Create a password" />
            </Form.Item>

            <Form.Item>
              <Button className="btn" htmlType="submit" block>
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <Text type="secondary">
              Already have an account? <Link to="/signin">Sign in</Link>
            </Text>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Signup;
