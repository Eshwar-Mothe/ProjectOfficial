import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, Select, Row, Col, message, Modal } from 'antd';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import { postEmailData, postRegisterData } from '../../../ApplicationLayer/Api';

const { Title, Text } = Typography;
const { Option } = Select;

const usStates = [
  "Alabama (AL)", "Alaska (AK)", "Arizona (AZ)", "Arkansas (AR)", "California (CA)", "Colorado (CO)", "Connecticut (CT)",
  "Delaware (DE)", "Florida (FL)", "Georgia (GA)", "Hawaii (HI)", "Idaho (ID)", "Illinois (IL)", "Indiana (IN)", "Iowa (IA)",
  "Kansas (KS)", "Kentucky (KY)", "Louisiana (LA)", "Maine (ME)", "Maryland (MD)", "Massachusetts (MA)", "Michigan (MI)",
  "Minnesota (MN)", "Mississippi (MS)", "Missouri (MO)", "Montana (MT)", "Nebraska (NE)", "Nevada (NV)",
  "New Hampshire (NH)", "New Jersey (NJ)", "New Mexico (NM)", "New York (NY)", "North Carolina (NC)",
  "North Dakota (ND)", "Ohio (OH)", "Oklahoma (OK)", "Oregon (OR)", "Pennsylvania (PA)", "Rhode Island (RI)", "South Carolina (SC)",
  "South Dakota (SD)", "Tennessee (TN)", "Texas (TX)", "Utah (UT)", "Vermont (VT)", "Virginia (VA)", "Washington (WA)",
  "West Virginia (WV)", "Wisconsin (WI)", "Wyoming (WY)"
];

const Signup = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [form] = Form.useForm();
  const [otpForm] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const newOtp = Math.floor(100000 + Math.random() * 900000);
      setGeneratedOtp(newOtp);

      const payload = {
        to: values.email,
        subject: "Welcome to Aadwik Tax Solutions - OTP Verification",
        html:
          ` <div style="font-family: Arial, sans-serif; font-size: 15px;">
      <h2 style="color:rgb(47, 226, 235);">Welcome to Aadwik Tax Solutions!</h2>
      <p>Dear ${values.name},</p>
      <p>Thank you for registering with us. To verify your email address, please use the OTP below:</p>
      <h3 style="background: #f0f0f0; padding: 10px 15px; border-radius: 5px; width: fit-content;">${newOtp}</h3>
      <p>This OTP is valid for the next 10 minutes.</p>
      <p>If you did not request this, you can safely ignore this email.</p>
      <p>Warm regards,<br/><strong>Aadwik Tax Solutions Team</strong></p>
    </div>`

      };


      const key = 'otpLoading';
      messageApi.open({
        key,
        type: 'loading',
        content: 'Sending email verification...',
        duration: 0,
      });

      const response = await postEmailData(payload);

      messageApi.destroy(key);

      if (response.status === 200) {
        messageApi.success("OTP sent to your email");
        setIsModalVisible(true);
      } else {
        messageApi.error(response.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error(error);
      messageApi.error("Something went wrong while sending OTP");
    }
  };

  const handleOtpVerification = async ({ enteredOtp }) => {
    if (parseInt(enteredOtp) === generatedOtp) {
      messageApi.success("OTP verified successfully!");
      setIsModalVisible(false);

      const formData = form.getFieldsValue();
      console.log("form data", formData)

      try {
        const res = await postRegisterData(formData);
        if (res.status === 200) {
          messageApi.success("Registration successful!");
          form.resetFields();
          otpForm.resetFields();
        } else {
          messageApi.error(res.message || "Registration failed.");
        }
      } catch (err) {
        messageApi.error("Error during registration.");
      }
    } else {
      messageApi.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <>
      {contextHolder}
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="auth-container signup-bg">
        <Card className="auth-card">
          <Title level={2}>Create your account</Title>
          <Text type="secondary">Get started with Aadwik Tax Solutions</Text>

          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            style={{ marginTop: 24 }}
          >
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="name"
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
                  name="phone"
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

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please set a password' }]}
            >
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

      {/* OTP Modal */}
      <Modal
        title="OTP Verification"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          form={otpForm}
          onFinish={handleOtpVerification}
        >
          <Form.Item
            name="enteredOtp"
            label="Enter OTP"
            rules={[
              { required: true, message: "Please enter the OTP sent to your email." },
              {
                pattern: /^\d{6}$/,
                message: "OTP must be a 6-digit number.",
              },
            ]}
          >
            <Input placeholder="Enter 6-digit OTP" maxLength={6} />
          </Form.Item>

          <Form.Item>
            <Button className='btn' htmlType="submit" block>
              Verify OTP
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Signup;