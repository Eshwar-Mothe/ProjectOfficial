import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Card, message } from 'antd';
import axios from 'axios';
// import './WriteUs.css';
import dayjs from 'dayjs';
import Navigation from './Navigation';
import Footer from './Footer';

const WriteUs = () => {
    const [form] = Form.useForm();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const onFinish = async (values) => {
        // const payload = {
        //     name: values.name,
        //     email: values.email,
        //     topic: values.topic,
        //     date: values.date.format('YYYY-MM-DD'),
        //     time: values.time.format('HH:mm'),
        // };

        // try {
        //     await axios.post('http://localhost:5000/api/schedule', payload);
        //     message.success('Call scheduled successfully!');
        //     form.resetFields();
        // } catch (error) {
        //     console.error(error);
        //     message.error('Failed to schedule. Try again later.');
        // }

    };

    return (
        <>
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <div className="write-us-wrapper">
                <Card className="write-us-card" title="Schedule a Call" bordered={false}>
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            name="name"
                            label="Your Name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input placeholder="John Doe" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="Email Address"
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Enter a valid email address' },
                            ]}
                        >
                            <Input placeholder="you@example.com" />
                        </Form.Item>

                        <Form.Item
                            name="topic"
                            label="Call Topic"
                            rules={[{ required: true, message: 'Please describe the topic' }]}
                        >
                            <Input placeholder="e.g. Tax Filing Help" />
                        </Form.Item>

                        <Form.Item
                            name="date"
                            label="Preferred Date"
                            rules={[{ required: true, message: 'Select a preferred date' }]}
                        >
                            <DatePicker style={{ width: '100%' }} disabledDate={(current) => current && current < dayjs().endOf('day')} />
                        </Form.Item>

                        <Form.Item
                            name="time"
                            label="Preferred Time"
                            rules={[{ required: true, message: 'Select a preferred time' }]}
                        >
                            <TimePicker format="HH:mm" style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item>
                            <Button className='btn' htmlType="submit" block>
                                Book Call
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    );
};

export default WriteUs;
