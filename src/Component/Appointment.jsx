import React from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Card,
  Typography,
  Row,
  Col,
} from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  ManOutlined,
  ScissorOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { Title } = Typography;

function Appointment() {
  //   const onFinish = (values) => {
  //     console.log("📅 Appointment Booked:", values);
  //   };
  const onFinish = (values) => {
    const message = `Hello Jully Hair Salon,%0A
I would like to book an appointment.%0A
👤 Name: ${values.name}%0A
📞 Phone: ${values.phone}%0A
👫 Gender: ${values.gender}%0A
💇 Service: ${values.service}%0A
📅 Date: ${values.date.format("DD-MM-YYYY")}`;

    const phoneNumber = "919913321881"; // ✅ your salon WhatsApp number in international format

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1c1c1c, #2e2e2e)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <Card
        bordered={false}
        style={{
          maxWidth: 600,
          width: "100%",
          backgroundColor: "#1e1e1e",
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
          color: "#fff",
        }}
        title={
          <Title
            level={3}
            style={{ color: "#03a9f4", textAlign: "center", margin: 0 }}
          >
            Book Your Appointment
          </Title>
        }
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label={<span style={{ color: "#fff" }}>Full Name</span>}
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  placeholder="Your Name"
                  prefix={<UserOutlined style={{ color: "#29b6f6" }} />}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label={<span style={{ color: "#fff" }}>Phone</span>}
                name="phone"
                rules={[
                  { required: true, message: "Please enter phone number" },
                ]}
              >
                <Input
                  maxLength={10}
                  placeholder="Phone Number"
                  prefix={<PhoneOutlined style={{ color: "#81d4fa" }} />}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label={<span style={{ color: "#fff" }}>Gender</span>}
                name="gender"
                rules={[{ required: true, message: "Please select gender" }]}
              >
                <Select
                  placeholder="Select Gender"
                  suffixIcon={<ManOutlined style={{ color: "#f48fb1" }} />}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label={<span style={{ color: "#fff" }}>Service</span>}
                name="service"
                rules={[{ required: true, message: "Select a service" }]}
              >
                <Select
                  placeholder="Select Service"
                  suffixIcon={<ScissorOutlined style={{ color: "#ffb74d" }} />}
                >
                  <Option value="haircut">Haircut</Option>
                  <Option value="coloring">Coloring</Option>
                  <Option value="facial">Facial</Option>
                  <Option value="spa">Spa</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label={<span style={{ color: "#fff" }}>Preferred Date</span>}
                name="date"
                rules={[{ required: true, message: "Choose a date" }]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  suffixIcon={<CalendarOutlined style={{ color: "#4db6ac" }} />}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Confirm Appointment
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default Appointment;
