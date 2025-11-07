import React, { useEffect, useState } from "react";
import { List, Typography, Button, Spin, message, Card, Collapse } from "antd";
import { DownloadOutlined, FilePdfOutlined } from "@ant-design/icons";
import io from "socket.io-client";
import { baseUrl, getAllUserDocsUrl, getDocsDataUrl } from "../../ApplicationLayer/constants";
import { div } from "framer-motion/client";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const UserDocsCheck = () => {
  const [docsByUser, setDocsByUser] = useState({});
  const [loadingDoc, setLoadingDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  // ✅ Setup Socket.IO listener
  useEffect(() => {
    const socket = io(baseUrl, {
      transports: ["websocket"],
      withCredentials: true,
    });

    socket.on("newDocUploaded", (newDoc) => {
      messageApi.info(`📄 New document uploaded by ${newDoc.userName}`);
      setDocsByUser((prev) => {
        const userDocs = prev[newDoc.userId] || { name: newDoc.userName, docs: [] };
        return { ...prev, [newDoc.userId]: { ...userDocs, docs: [...userDocs.docs, newDoc] } };
      });
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch(getAllUserDocsUrl);
        const data = await res.json();

        // 🧠 Group by userId
        const grouped = data.reduce((acc, docSet) => {
          const userId = docSet.user?.uid;
          const userMail = docSet.user?.email;
          const userName = docSet.user?.name || "Unknown User";

          if (!acc[userId]) {
            acc[userId] = { name: userName, Id: userId, userMail, docs: [] };
          }

          acc[userId].docs.push(...docSet.documents);
          return acc;
        }, {});

        setDocsByUser(grouped);
      } catch (err) {
        console.error(err);
        messageApi.error("Failed to fetch documents");
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, []);

  // ✅ Download file with loader
  const handleDownload = async (userId, doc) => {
    setLoadingDoc(doc._id);
    try {
      const res = await fetch(`${downloadDocUrl}/${userId}/${doc.s3Key}`);
      if (!res.ok) throw new Error("Failed to download");
      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = doc.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      messageApi.success(`${doc.name} downloaded`);
    } catch (err) {
      console.error(err);
      messageApi.error("Error downloading file");
    } finally {
      setLoadingDoc(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {contextHolder}
      <Title level={3}>User Uploaded Documents</Title>

      {loading ? (
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <Spin size="large" />
        </div>
      ) : (
        <Collapse accordion bordered={false} style={{ background: "none" }}>
          {Object.entries(docsByUser).map(([userId, user]) => (
            <Panel
              key={userId}
              header={
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong>{user.name}</strong>
                  <Text type="secondary">{user.userMail}</Text>
                  <Text style={{ fontSize: 12, color: "#999" }}>{user.Id}</Text>
                </div>
              }
            >
              <Card
                bordered
                style={{
                  borderRadius: 12,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={user.docs}
                  renderItem={(doc) => (
                    <List.Item
                      actions={[
                        <div className="d-flex gap-2">
                        <Button
                          key="view"
                          icon={<DownloadOutlined />}
                          className="btn"
                          onClick={() =>  window.open(`${getDocsDataUrl}/${doc._id}`, "_blank")}
                          disabled={loadingDoc === doc._id}
                        >
                          {loadingDoc === doc._id ? <Spin size="small" /> : "View"}
                        </Button>
                        <Button
                          key="download"
                          icon={<DownloadOutlined />}
                          className="btn"
                          onClick={() => handleDownload(userId, doc)}
                          disabled={loadingDoc === doc._id}
                        >
                          {loadingDoc === doc._id ? <Spin size="small" /> : "Download"}
                        </Button>
                        </div>
                      ]}
                    >
                      <List.Item.Meta
                        avatar={<FilePdfOutlined style={{ fontSize: 36, color: "#e53e3e" }} />}
                        title={<Text strong>{doc.name}</Text>}
                        description={`Uploaded: ${new Date(doc.uploadedAt).toLocaleString()}`}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
};

export default UserDocsCheck;
