import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './AdminStyles.css';

const socket = io('https://projectbackend-7v9s.onrender.com');

const AdminHome = () => {
    const [recentUsers, setRecentUsers] = useState([]);
    const [stats, setStats] = useState({
        totalUsers: 0,
        todaySignups: 0,
        admins: 0,
    });

    useEffect(() => {
        socket.on('newUserSignedUp', (newUser) => {
            setRecentUsers((prev) => [newUser, ...prev.slice(0, 4)]);
            setStats((prev) => ({
                ...prev,
                totalUsers: prev.totalUsers + 1,
                todaySignups: prev.todaySignups + 1,
            }));
        });

        fetch('https://projectbackend-7v9s.onrender.com/api/admin/stats')
            .then(res => res.json())
            .then(data => {
                setStats(data.stats);
                setRecentUsers(data.recentUsers);
            });
            console.log(recentUsers)

        return () => {
            socket.off('newUserSignedUp');
        };
    }, []);

    return (
        <div className="admin-home">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <p>Real-time insights into your user activity</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <h2>{stats.totalUsers}</h2>
                    <p>Total Users</p>
                </div>
                <div className="stat-card">
                    <h2>{stats.todaySignups}</h2>
                    <p>Today's Signups</p>
                </div>
                <div className="stat-card">
                    <h2>{stats.admins}</h2>
                    <p>Admins</p>
                </div>
            </div>

            <div className="recent-users">
                <h3>Recent Signups</h3>
                {recentUsers.length === 0 ? (
                    <p>No users yet</p>
                ) : (
                    <ul>
                        {recentUsers.map((user, idx) => (
                            <li key={idx} className="user-item">
                                <span>{user.name}</span>
                                <span>{user.phone}</span>
                                <span>{user.email}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AdminHome;
