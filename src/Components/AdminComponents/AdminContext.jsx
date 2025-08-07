// AdminContext.js
import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [recentUsers, setRecentUsers] = useState([]);
  const [stats, setStats] = useState({ totalUsers: 0, todaySignups: 0, admins: 0 });
  const [allUsers, setAllUsers] = useState([]);
  const [admins, setAdmins] = useState([]);

  const value = {
    recentUsers, setRecentUsers,
    stats, setStats,
    allUsers, setAllUsers,
    admins, setAdmins,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export const useAdminContext = () => useContext(AdminContext);
