import React, { useState } from 'react';
import { Upload, Button, message, List, Typography } from 'antd';
import { UploadOutlined, DeleteOutlined, FilePdfOutlined, FileImageOutlined } from '@ant-design/icons';
import { postEmailData } from '../../ApplicationLayer/Api';

const acceptedFormats = ['application/pdf', 'image/jpeg', 'image/png'];

const UploadView = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const beforeUpload = (file) => {
    const isAllowed = acceptedFormats.includes(file.type);
    if (!isAllowed) {
      messageApi.error('You can only upload PDF, JPG, or PNG files!');
    }
    return isAllowed || Upload.LIST_IGNORE;
  };

  const customUpload = async ({ file, onSuccess, onError }) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await pos(formData)

    if (!response.ok) {
      throw new Error(`Upload failed with status ${response.status}`);
    }

    const result = await response.json();

    onSuccess(result, file); // notify Upload component of success
    messageApi.success(`${file.name} uploaded successfully!`);
  } catch (error) {
    onError(error);
    messageApi.error(`${file.name} failed to upload: ${error.message}`);
  }
};

  const handleUpload = ({ file, fileList }) => {
    if (file.status !== 'uploading' && file.status !== 'error') {

      const filesWithPreview = fileList.map(f => {
        if (!f.preview && (f.type === 'image/jpeg' || f.type === 'image/png')) {
          f.preview = URL.createObjectURL(f.originFileObj);
        }
        return {
          name: f.name,
          type: f.type,
          uid: f.uid,
          preview: f.preview,
          originFileObj: f.originFileObj,
        };
      });
      setUploadedFiles(filesWithPreview);
    } else if (file.status === 'error') {
      messageApi.error(`${file.name} failed to upload!`);
    }
  };

  const handleRemove = (file) => {
    setUploadedFiles(prev => prev.filter(f => f.uid !== file.uid));
    if (file.preview) {
      // Revoke data uri to avoid memory leaks
      URL.revokeObjectURL(file.preview);
    }
    messageApi.info(`${file.name} removed.`);
  };

  return (
    <div className="inner-content">
      {contextHolder}
      <h1>Upload Documents</h1>
      <p>
        Upload your tax documents here. Supported formats: <strong>PDF, JPG, PNG</strong>.
      </p>

      <Upload
        multiple
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleUpload}
        customRequest={customUpload}
        accept=".pdf,image/jpeg,image/png"
      >
        <Button icon={<UploadOutlined />} type="primary">
          Select File(s)
        </Button>
      </Upload>

      {uploadedFiles.length > 0 && (
        <List
          style={{ marginTop: 24 }}
          bordered
          dataSource={uploadedFiles}
          renderItem={file => (
            <List.Item
              actions={[
                <Button
                  key="delete"
                  icon={<DeleteOutlined />}
                  danger
                  size="small"
                  onClick={() => handleRemove(file)}
                >
                  Remove
                </Button>
              ]}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Preview thumbnail or icon */}
                {file.type === 'application/pdf' ? (
                  <a href={file.originFileObj ? URL.createObjectURL(file.originFileObj) : '#'} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <FilePdfOutlined style={{ fontSize: 40, color: '#e53e3e' }} />
                  </a>
                ) : file.preview ? (
                  <a href={file.preview} target="_blank" rel="noopener noreferrer" >
                    <img
                      src={file.preview}
                      alt={file.name}
                      style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 6, boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}
                    />
                  </a>
                ) : (
                  <FileImageOutlined style={{ fontSize: 40, color: '#319795' }} />
                )}

                <Typography.Text>{file.name}</Typography.Text>
              </div>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default UploadView;
