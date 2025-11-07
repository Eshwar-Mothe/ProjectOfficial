import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import {
  HomeOutlined, FileTextOutlined, UploadOutlined,
  DollarOutlined, MessageOutlined, SettingOutlined,
  LogoutOutlined, UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './userStyles.css';
import { useUser } from '../../UserContext';
import HomeView from './HomeView';
import UploadView from './UploadView';
import PaymentsView from './PaymentsView';
import SupportView from './SupportView';
import UserDocsViewer from './UserDocsViewer';


const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const userObjectId = user._id
  const {
    uid = "AT202507175249857",
    name = 'User',
    email = "sample@gmail.com",
    phone = "85199998764",
    state = "BOSTON",
  } = user || {};

  const [selectedKey, setSelectedKey] = useState('1');

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

  const menuItems = [
    { key: '1', icon: <HomeOutlined />, label: 'Home' },
    { key: '2', icon: <FileTextOutlined />, label: 'My Tax Files' },
    { key: '3', icon: <UploadOutlined />, label: 'Upload Documents' },
    // { key: '4', icon: <DollarOutlined />, label: 'Payments & Invoices' },
    { key: '5', icon: <MessageOutlined />, label: 'Support & Messages' },
    { key: '6', icon: <LogoutOutlined />, label: 'Logout' },
  ];

  // Component rendering logic
  const renderContent = () => {
    switch (selectedKey) {
      case '1': return <HomeView user={{ uid, name, email, phone, state }} />;
      case '2': return <UserDocsViewer userId={{ userObjectId }} />;
      case '3': return <UploadView userId={{ userObjectId }} />;
      // case '4': return <PaymentsView />;
      case '5': return <SupportView />;
      case '6': handleLogout(); return null;
      default: return <HomeView user={{ uid, name, email, phone, state }} />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={220} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
        <div className="user-logo">
          <img src="/logoWhite.png" alt="Aadwik Tax" className="portal-logo" />
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
          items={menuItems}
        />
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
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
