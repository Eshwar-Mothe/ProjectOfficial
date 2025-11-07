import React, { useEffect, useState } from "react";
import {
  Upload,
  Button,
  message,
  List,
  Typography,
  Card,
  Spin,
} from "antd";
import {
  UploadOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  FileImageOutlined,
  FileTextOutlined,
  FileOutlined,
} from "@ant-design/icons";
import axios from "axios";
import {
  uploadUrl,
  getUserDocsUrl,
  getDocsDataUrl,
} from "../../ApplicationLayer/constants";

const acceptedFormats = ["application/pdf"];
const { Title, Text } = Typography;

const UploadView = ({ userId }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [docs, setDocs] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [uploading, setUploading] = useState(false);
  const [loadingDocs, setLoadingDocs] = useState(false);

  // ✅ Load existing user documents
  useEffect(() => {
    const fetchDocs = async () => {
      if (!userId?.userObjectId) return;
      setLoadingDocs(true);
      try {
        const res = await axios.get(`${getUserDocsUrl}/${userId.userObjectId}`);
        if (res.data.success && res.data.documents.length > 0) {
          setDocs(res.data.documents);
        } else {
          message.warning("No documents available");
        }
      } catch (err) {
        console.error("Error fetching user docs:", err);
        message.error("Failed to load documents");
      } finally {
        setLoadingDocs(false);
      }
    };

    fetchDocs();
  }, [userId, uploading]);

  // ✅ Allow only PDF
  const beforeUpload = (file) => {
    const isAllowed = acceptedFormats.includes(file.type);
    if (!isAllowed) messageApi.error("Only PDF files are allowed!");
    return isAllowed || Upload.LIST_IGNORE;
  };

  // ✅ Custom upload logic with loader
  const customUpload = async ({ file, onSuccess, onError }) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("userId", userId.userObjectId);
      formData.append("docs", file);

      const response = await fetch(uploadUrl, { method: "POST", body: formData });
      if (!response.ok) throw new Error(response.statusText);

      messageApi.success(`${file.name} uploaded successfully!`);
      onSuccess(response, file);

      // refresh docs list
      setTimeout(() => setUploading(false), 1000);
    } catch (error) {
      messageApi.error(`${file.name} failed to upload: ${error.message}`);
      onError(error);
      setUploading(false);
    }
  };

  const handleChange = ({ fileList }) => {
    setUploadedFiles(fileList);
  };

  // ✅ Determine file icon based on type
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
    <div className="inner-content" style={{ textAlign: "center", padding: "20px" }}>
      {contextHolder}
      <Title level={3}>Upload & View Documents</Title>
      <p>
        Upload your tax documents here. Supported format: <strong>PDF only</strong>.
      </p>

      {uploading ? (
        // ✅ Show loader during upload
        <span className="loader"></span>
      ) : (
        <>
          <Upload
            multiple
            showUploadList={false}
            beforeUpload={beforeUpload}
            customRequest={customUpload}
            onChange={handleChange}
            accept=".pdf"
          >
            <Button icon={<UploadOutlined />} type="primary">
              Select PDF File(s)
            </Button>
          </Upload>
        </>
      )}

      {/* ✅ Documents Viewer Section */}
      <Card
        style={{
          maxWidth: 900,
          margin: "40px auto 0",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <Title level={4}>My Uploaded Documents</Title>
        {loadingDocs ? (
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
                onClick={() =>
                  window.open(`${getDocsDataUrl}/${doc._id}`, "_blank")
                }
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
    </div>
  );
};

export default UploadView;
