import React, { useEffect, useState } from "react";
import { Card, Typography, Spin, message } from "antd";
import axios from "axios";
import {
  FilePdfOutlined,
  FileWordOutlined,
  FileImageOutlined,
  FileTextOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { getDocsDataUrl, getUserDocsUrl } from "../../ApplicationLayer/constants";

const { Title, Text } = Typography;

const UserDocsViewer = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      if (!userId?.userObjectId) return;
      setLoading(true);
      try {
        const res = await axios.get(
          `${getUserDocsUrl}/${userId.userObjectId}`
        );

        if (res.data.success && res.data.documents.length > 0) {
          setDocs(res.data.documents);
        } else {
          message.warning("No documents available");
        }
      } catch (err) {
        console.error("Error fetching user docs:", err);
        message.error("Failed to load documents");
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, [userId]);
  console.log("userDocs",docs)

  const getFileIcon = (fileName) => {
    const ext = fileName.split(".").pop().toLowerCase();
    switch (ext) {
      case "pdf":
        return <FilePdfOutlined style={{ fontSize: 60, color: "#d32f2f" }} />;
      case "doc":
      case "docx":
        return <FileWordOutlined style={{ fontSize: 60, color: "#1976d2" }} />;
      case "jpg":
      case "jpeg":
      case "png":
        return <FileImageOutlined style={{ fontSize: 60, color: "#2e7d32" }} />;
      case "txt":
        return <FileTextOutlined style={{ fontSize: 60, color: "#0288d1" }} />;
      default:
        return <FileOutlined style={{ fontSize: 60, color: "#616161" }} />;
    }
  };

  return (
    <>
      <Title level={3} style={{ marginBottom: 20 }}>
        My Uploaded Documents
      </Title>
      <Card
        style={{
          maxWidth: 900,
          margin: "30px auto",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >

        {loading ? (
          <div style={{ textAlign: "center", padding: "30px" }}>
            <Spin size="large" />
          </div>
        ) : docs.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: "20px",
            }}
          >
            {docs.map((doc) => (
              <div
                key={doc._id}
                style={{
                  textAlign: "center",
                  background: "#f9f9f9",
                  padding: "20px 10px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => window.open(`${getDocsDataUrl}/${doc._id}`, "_blank")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div>{getFileIcon(doc.name)}</div>
                <Text strong style={{ display: "block", marginTop: 8 }}>
                  {doc.name.length > 15
                    ? doc.name.substring(0, 15) + "..."
                    : doc.name}
                </Text>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {new Date(doc.uploadedAt).toLocaleDateString()}
                </Text>
              </div>
            ))}
          </div>
        ) : (
          <Text type="secondary">No documents available to view.</Text>
        )}
      </Card>
    </>
  );
};

export default UserDocsViewer;
