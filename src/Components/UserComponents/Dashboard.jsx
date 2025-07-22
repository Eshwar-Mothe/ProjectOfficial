import React from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import {
  HomeOutlined, FileTextOutlined, UploadOutlined,
  DollarOutlined, MessageOutlined, SettingOutlined,
  LogoutOutlined, UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './userStyles.css';
import { useUser } from '../../UserContext';

const { Header, Sider, Content } = Layout;

const menuItems = [
  { key: '1', icon: <HomeOutlined />, label: 'Home' },
  { key: '2', icon: <FileTextOutlined />, label: 'My Tax Files' },
  { key: '3', icon: <UploadOutlined />, label: 'Upload Documents' },
  { key: '4', icon: <DollarOutlined />, label: 'Payments & Invoices' },
  { key: '5', icon: <MessageOutlined />, label: 'Support & Messages' },
  { key: '6', icon: <LogoutOutlined />, label: 'Logout' },
];

const Dashboard = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const {
    id = "AT202507175249857",
    name = 'User',
    email = "sample@gmail.com",
    phone = "85199998764",
    state = "BOSTON",
  } = user || {};

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    navigate('/signin');
  };

  const userMenu = {
    items: [
      {
        key: 'settings',
        icon: <SettingOutlined />,
        label: 'Settings',
        onClick: () => navigate('/settings')
      },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'Logout',
        onClick: handleLogout
      },
    ],
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={220} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
        <div className="user-logo">
          <img src="/logowbg.png" alt="Adwik Tax" className="portal-logo" />
        </div>
        <Menu mode="inline" defaultSelectedKeys={['1']} items={menuItems} />
      </Sider>

      <Layout>
        <Header className="portal-header">
          <div className="user-header-right">
            <span className="user-name">Welcome, {name}</span>
            <Dropdown menu={userMenu} placement="bottomRight" arrow>
              <Avatar size={40} icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
            </Dropdown>
          </div>
        </Header>

        <Content className="portal-content">
          <div className="inner-content">
            <h1>User Dashboard</h1>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>State:</strong> {state}</p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
