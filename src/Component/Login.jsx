import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { useAuth } from "../context/AuthContext"; // ✅ adjust path as needed

function Login({ onLoginSuccess }) {
    localStorage.setItem("isLoggedIn", true);
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
      });

      // ✅ Close the modal after success
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } else {
      Modal.error({
        title: "Login Failed",
        content: "Invalid email or password",
      });
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleLogin}
      style={{ maxWidth: 400, margin: "0 auto" }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
