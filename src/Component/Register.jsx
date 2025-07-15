import React from "react";
import { Input, Button, Select, Form, Modal, Typography } from "antd";

const { Option } = Select;
const { Title } = Typography;

function Register({ onRegisterSuccess }) {
  const [form] = Form.useForm();

  const onRegister = (values) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = existingUsers.find(
      (user) => user.email === values.email
    );

    if (alreadyExists) {
      Modal.error({
        title: "Email Already Registered",
        content: "Please use a different email or login.",
      });
      return;
    }

    const updatedUsers = [...existingUsers, values];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    Modal.success({
      title: "Registration Successful 🎉",
      content: "You can now login with your email and password.",
      onOk: () => {
        if (onRegisterSuccess) onRegisterSuccess(); // Close modal
      },
    });

    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onRegister}
      style={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 20,
      }}
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
        Register
      </Title>

      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please Enter Your Name" }]}
      >
        <Input placeholder="Enter Your Full Name" />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: "Please Enter Your City" }]}
      >
        <Input placeholder="Enter Your City" />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[
          { required: true, message: "Please Enter Your Age" },
          {
            pattern: /^[0-9]+$/,
            message: "Only numbers are allowed",
          },
        ]}
      >
        <Input placeholder="Enter Your Age" maxLength={2} />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: "Please Select Your Gender" }]}
      >
        <Select placeholder="Select Gender">
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          { required: true, message: "Please Enter Your Number" },
          {
            pattern: /^[0-9]{10}$/,
            message: "Please enter valid 10-digit number",
          },
        ]}
      >
        <Input type="tel" maxLength={10} placeholder="Phone Number" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please Enter Email" },
          { type: "email", message: "Please Enter valid email" },
        ]}
      >
        <Input placeholder="Enter your Email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please Enter Password" },
          { min: 6, message: "Password must be at least 6 characters" },
        ]}
      >
        <Input.Password placeholder="Enter your Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Register;
