// Overview.jsx
import React, { useEffect } from "react";
import { Table, Typography } from "antd";
import { FaUsers } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { MdSupervisorAccount } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { useAdminContext } from "./AdminContext";
import TimeZoneClocks from "./TimeZoneClocks";
import io from "socket.io-client";
import { baseUrl } from "../../ApplicationLayer/constants";
import { getAdminStats } from "../../ApplicationLayer/Api";

const { Title } = Typography;

const socket = io(baseUrl, { autoConnect: false });

const Overview = () => {
  const { stats, setStats, recentUsers, setRecentUsers } = useAdminContext();

  useEffect(() => {
    socket.connect();
    socket.on('newUserSignedUp', (newUser) => {
      setRecentUsers((prev) => [newUser, ...prev.slice(0, 4)]);
      setStats((prev) => ({
        ...prev,
        totalUsers: prev.totalUsers + 1,
        todaySignups: prev.todaySignups + 1,
      }));
    });

    const getNewUsersData = async () => {
      try {
        const data = await getAdminStats()
        setStats(data.stats);
        setRecentUsers(data.recentUsers);
      } catch (err) {
        console.log("error while fetching Admins data", err)
      }
    }

    getNewUsersData()

    return () => {
      socket.off('newUserSignedUp');
      socket.disconnect();
    };
  }, [setRecentUsers, setStats]);

  // --- Antd Table columns for recent signups --
  const columns = [
    {
      title: "",
      dataIndex: "icon",
      key: "icon",
      width: 48,
      align: "center",
      render: () => (
        <span style={{ fontSize: 18, color: "#1677ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <AiOutlineUser />
        </span>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: name => <b>{name}</b>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
  ];


  return (
    <div className="admin-overview">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
      </div>
      <TimeZoneClocks />
      <div className="stats-grid">
        <div className="stat-card users">
          <FaUsers size={40} className="stat-icon" />
          <div className="text-center">
            <div className="stat-label">Total Users</div>
            <div className="stat-value">{stats.totalUsers}</div>
          </div>
        </div>
        <div className="stat-card today">
          <FiUserPlus size={38} className="stat-icon" />
          <div>
            <div className="stat-label">Today's Signups</div>
            <div className="stat-value">{stats.todaySignups}</div>
          </div>
        </div>
        <div className="stat-card admins">
          <MdSupervisorAccount size={38} className="stat-icon" />
          <div>
            <div className="stat-label">Admins</div>
            <div className="stat-value">{stats.admins}</div>
          </div>
        </div>
      </div>

      {/* ---- AntD Table for Recent Signups ---- */}
      <div className="recent-users text-center" style={{ marginTop: 36 }}>
        <Title level={4} style={{ marginBottom: 16 }}>Recent Signups</Title>
        <Table
          dataSource={recentUsers}
          columns={columns}
          rowKey={(user, idx) => user._id || idx}
          pagination={false}
          locale={{ emptyText: "No users yet" }}
          size="small"
          className="text-center"
          scroll={{ x: 600 }}
        />
      </div>
    </div>
  );
};

export default Overview;
