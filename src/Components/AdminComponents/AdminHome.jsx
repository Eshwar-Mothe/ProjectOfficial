// Home.jsx
import React, { useState } from "react";
import { AdminProvider } from "./AdminContext";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import AddAdmin from "./AddAdmin";
import ViewUsers from "./ViewUsers";
import "./AdminStyles.css";
import UserDocsCheck from "./UserDocsCheck";
import ReferralsCheck from "./ReferralsCheck";

const AdminHome = () => {
  const [activePage, setActivePage] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarMobile, setSidebarMobile] = useState(false);

  // Responsive handling
  React.useEffect(() => {
    const handleResize = () => setSidebarCollapsed(window.innerWidth < 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileSidebar = () => setSidebarMobile(val => !val);

  return (
    <AdminProvider>
      <div className={`admin-home-container${sidebarMobile ? ' sidebar-mobile' : ''}`}>
        <Sidebar
          sidebarCollapsed={sidebarCollapsed}
          sidebarMobile={sidebarMobile}
          handleMobileSidebar={handleMobileSidebar}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <main className="admin-main-content">
          {/* Mobile menu toggle */}
          <div className="sidebar-mobile-btn" onClick={handleMobileSidebar}>
            <span className="hamburger"></span>
          </div>
          {activePage === "overview" && <Overview />}
          {activePage === "addAdmin" && <AddAdmin />}
          {activePage === "viewUsers" && <ViewUsers />}
          {activePage === "userDocs" && <UserDocsCheck />}
          {activePage === "referrals" && <ReferralsCheck />}
        </main>
      </div>
    </AdminProvider>
  );
};

export default AdminHome;
