import React, { useState } from "react";
import Navigation from "./Navigation";
import { Form, Input, Button, Space, Divider, Typography, Card, message } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { postCheckExistingUserData, postReferralData } from "../../ApplicationLayer/Api";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const ReferPolicy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [step, setStep] = useState("askUser");
  const [isExisting, setIsExisting] = useState(null);
  const [messageApi, contextHolder] = message.useMessage()

  const [email, setEmail] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "" });

  const [referrals, setReferrals] = useState([{ name: "", email: "", phone: "" }]);

  const nav = useNavigate()
  const handleCheckUser = async () => {
    setLoading(true);

    const payload = { email }
    try {
      const data = await postCheckExistingUserData(payload);

      if (!data) messageApi.error("User not found");

      setUserDetails(data.userDetails);
      setStep("form");

    } catch (err) {
      messageApi.error(err.message)
    } finally {
      setLoading(false);
    }
  };

  const handleNewUserChange = (field, value) => {
    setNewUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleReferralChange = (index, field, value) => {
    const updated = [...referrals];
    updated[index][field] = value;
    setReferrals(updated);
  };

  const addReferral = () => {
    setReferrals([...referrals, { name: "", email: "", phone: "" }]);
  };

  const deleteReferral = (index) => {
    const updated = referrals.filter((_, i) => i !== index);
    setReferrals(updated);
  };

  // Check duplicates before submit
  const checkDuplicates = () => {
    const allEmails = [
      ...(isExisting ? [userDetails?.email] : [newUser.email]),
      ...referrals.map((r) => r.email),
    ].filter(Boolean);

    const allPhones = [
      ...(isExisting ? [userDetails?.phone] : [newUser.phone]),
      ...referrals.map((r) => r.phone),
    ].filter(Boolean);

    const uniqueEmails = new Set(allEmails);
    const uniquePhones = new Set(allPhones);

    return uniqueEmails.size === allEmails.length && uniquePhones.size === allPhones.length;
  };

  /// Submit
  const handleSubmit = async () => {
    // Check required fields
    if (!isExisting) {
      if (!newUser.name || !newUser.email || !newUser.phone) {
        alert("Please fill all fields for new user!");
        return;
      }
    }

    for (let i = 0; i < referrals.length; i++) {
      const ref = referrals[i];
      if (!ref.name || !ref.email || !ref.phone) {
        alert(`Please fill all fields for Referral ${i + 1}`);
        return;
      }
    }
    // Check duplicates
    if (!checkDuplicates()) {
      alert("Duplicate emails or phone numbers found!");
      return;
    }
    const payload = {
      user: isExisting ? userDetails : newUser,
      referrals,
    };

    try {
      const res = await postReferralData(payload)
      alert("Referrals submitted successfully!");
      console.log("referral Response:", res);
    } catch (err) {
      messageApi.error(err.message);
    }
  };


  return (
    <>
      {contextHolder}

      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div style={{ maxWidth: 800, margin: "5rem auto", padding: 20 }}>
        {step === "askUser" && (
          <Card>
            <Title level={4}>Are you an existing user?</Title>
            <Space>
              <Button
                className="btn"
                onClick={() => {
                  setIsExisting(true);
                  setStep("existingCheck");
                }}
              >
                Yes
              </Button>
              <Button
                onClick={() => {
                  setIsExisting(false);
                  setStep("form");
                }}
              >
                No
              </Button>
            </Space>
          </Card>
        )}

        {step === "existingCheck" && (
          <Card>
            <Title level={4}>Enter your email</Title>
            <Space>
              <Input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="buttonContainer gap-2 d-flex">
                <Button onClick={handleCheckUser} loading={loading}>
                Check
              </Button>

              <Button onClick={()=>nav('/')}>
                Back
              </Button>
              </div>
              
            </Space>
          </Card>
        )}

        {step === "form" && (
          <Card>
            <Title level={4}>
              {isExisting
                ? `Welcome back, ${userDetails?.name}`
                : "New User Details"}
            </Title>

            {!isExisting && (
              <Form layout="vertical" style={{ marginBottom: 20 }}>
                <Form.Item label="Your Name" required>
                  <Input
                    value={newUser.name}
                    onChange={(e) => handleNewUserChange("name", e.target.value)}
                    required
                  />
                </Form.Item>
                <Form.Item label="Your Email" required>
                  <Input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => handleNewUserChange("email", e.target.value)}
                    required
                  />
                </Form.Item>
                <Form.Item label="Your Phone" required>
                  <Input
                    value={newUser.phone}
                    onChange={(e) => handleNewUserChange("phone", e.target.value)}
                    required
                  />
                </Form.Item>
              </Form>
            )}

            <Divider />
            <Title level={5}>Referral Details</Title>

            {referrals.map((ref, index) => (
              <Card
                key={index}
                style={{ marginBottom: 15, border: "1px solid #ddd" }}
                size="small"
                title={`Referral ${index + 1}`}
                extra={
                  referrals.length > 1 && (
                    <MinusCircleOutlined
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteReferral(index)}
                    />
                  )
                }
              >
                <Space style={{ display: "flex" }} align="baseline">
                  <Input
                    placeholder="Name"
                    value={ref.name}
                    onChange={(e) => handleReferralChange(index, "name", e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={ref.email}
                    onChange={(e) => handleReferralChange(index, "email", e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Phone"
                    value={ref.phone}
                    onChange={(e) => handleReferralChange(index, "phone", e.target.value)}
                    required
                  />
                </Space>
              </Card>
            ))}

            <Button
              type="dashed"
              block
              icon={<PlusOutlined />}
              onClick={addReferral}
              style={{ marginBottom: 20 }}
            >
              Add Another Referral
            </Button>

            <div className="buttonContainer d-flex gap-2">
              <Button className="btn" type="primary" onClick={handleSubmit}>
                Submit
              </Button>

              <Button onClick={() => nav('/')}>
                Back
              </Button>
            </div>

          </Card>
        )}
      </div>
    </>
  );
};

export default ReferPolicy;
