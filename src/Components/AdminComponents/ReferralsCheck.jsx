import React, { useEffect, useState } from "react";
import { Table, Card, Typography } from "antd";
import { getReferralData } from "../../ApplicationLayer/Api";

const { Title } = Typography;

const ReferralsCheck = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const res = await getReferralData();
        if (Array.isArray(res)) {
          setData(res);
        }
      } catch (err) {
        console.error("Error fetching referrals:", err);
      }
    };
    fetchReferrals();
  }, []);

  // Define columns for antd Table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["sm", "md", "lg"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      responsive: ["md", "lg"],
    },
  ];

  return (
    <div className="referrals-container">
      <Title level={3}>User & Referral Details</Title>

      {data.length > 0 ? (
        data.map((entry) => (
          <Card
            key={entry._id}
            className="referrals-card"
            style={{ marginBottom: "1.5rem" }}
          >
            <div className="user-details">
              <Title level={4}>User Info</Title>
              <span>
                <strong>Name:</strong> {entry.user?.name}
              </span> &nbsp;
              <span>
                <strong>Email:</strong> {entry.user?.email}
              </span> &nbsp;
              <span>
                <strong>Phone:</strong> {entry.user?.phone}
              </span> &nbsp;
              <span>
                <strong>Existing User:</strong>{" "}
                {entry.isExistingUser ? "Yes" : "No"}
              </span> &nbsp;
              <span>
                <strong>Created At:</strong>{" "}
                {new Date(entry.createdAt).toLocaleString()}
              </span>
            </div>

            <div className="referrals-table">
              <Title level={4}>Referrals</Title>
              <Table
                columns={columns}
                dataSource={entry.referrals || []}
                rowKey="_id"
                pagination={{ pageSize: 5 }}
                scroll={{ x: true }}
                bordered
              />
            </div>
          </Card>
        ))
      ) : (
        <p>Loading referrals...</p>
      )}
    </div>
  );
};

export default ReferralsCheck;
