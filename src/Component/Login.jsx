import React from "react";
import { Form, Input, Button, Modal, Typography, Card, Divider } from "antd";
import { useAuth } from "../context/AuthContext"; // ✅ adjust path if needed

const { Title, Text } = Typography;

function Login({ onLoginSuccess }) {
  const { setIsLoggedIn } = useAuth();
  const [form] = Form.useForm();

  const handleLogin = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (matchedUser) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      Modal.success({
        title: "Login Successful 🎉",
        content: `Welcome back, ${matchedUser.fullName}`,
        onOk: () => {
          if (onLoginSuccess) onLoginSuccess(); // Close modal
        },
      });
    } else {
      Modal.error({
        title: "Login Failed",
        content: "Invalid email or password",
      });
    }
  };

  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 10px",
        background: "#f5f5f5",
      }}
    >
      <Card
        style={{
          maxWidth: 450,
          width: "100%",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderRadius: 12,
          padding: 30,
        }}
        bordered={false}
      >
        <Title level={3} style={{ textAlign: "center", marginBottom: 10 }}>
          Welcome Back
        </Title>
        <Text type="secondary" style={{ display: "block", textAlign: "center", marginBottom: 20 }}>
          Please login to continue
        </Text>
        <Divider />

        <Form form={form} layout="vertical" onFinish={handleLogin}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email address" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block style={{ borderRadius: 6 }}>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
