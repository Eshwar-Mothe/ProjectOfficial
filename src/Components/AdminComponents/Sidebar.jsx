// Sidebar.jsx
import React from "react";
import {
  AiOutlinePieChart, AiOutlineUserAdd, AiOutlineTeam, AiOutlineLogout
} from "react-icons/ai";

const sideIcons = {
  overview: <AiOutlinePieChart size={24} />,
  addAdmin: <AiOutlineUserAdd size={24} />,
  viewUsers: <AiOutlineTeam size={24} />,
  logout: <AiOutlineLogout size={22} />,
};

const Sidebar = ({ sidebarCollapsed, sidebarMobile, handleMobileSidebar, activePage, setActivePage }) => {
  const handleLogout = () => (window.location.href = '/signin');
  return (
    <nav className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${sidebarMobile ? 'mobile-active' : ''}`}>
      <div className="sidebar-header">
        <span style={{ fontWeight: 'bold', fontSize: 22, color: '#05B6C1', letterSpacing: 2 }}>
          <AiOutlinePieChart style={{ marginRight: 8 }} /> {sidebarCollapsed ? '' : 'Dashboard'}
        </span>
        <span className="sidebar-toggle" onClick={handleMobileSidebar}>
          <span className="hamburger"></span>
        </span>
      </div>
      <ul>
        <li className={activePage === 'overview' ? 'active' : ''} onClick={() => setActivePage('overview')}>
          {sideIcons.overview} {sidebarCollapsed ? '' : 'Overview'}
        </li>
        <li className={activePage === 'addAdmin' ? 'active' : ''} onClick={() => setActivePage('addAdmin')}>
          {sideIcons.addAdmin} {sidebarCollapsed ? '' : 'Add Admin'}
        </li>
        <li className={activePage === 'viewUsers' ? 'active' : ''} onClick={() => setActivePage('viewUsers')}>
          {sideIcons.viewUsers} {sidebarCollapsed ? '' : 'View Users'}
        </li>
        <li onClick={handleLogout}>
          {sideIcons.logout} {sidebarCollapsed ? '' : 'Logout'}
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
