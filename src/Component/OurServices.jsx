import React from "react";
import { Card, Row, Col, Typography, Button } from "antd";
import {
  ScissorOutlined,
  BgColorsOutlined,
  SmileOutlined,
  ClockCircleOutlined,
  FireOutlined,
  SkinOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Haircuts",
    icon: <ScissorOutlined style={{ fontSize: "32px", color: "#81d4fa" }} />,
    description: "Modern & classic styles tailored to your personality.",
  },
  {
    title: "Hair Coloring",
    icon: <BgColorsOutlined style={{ fontSize: "32px", color: "#4fc3f7" }} />,
    description: "Vibrant, soft, or bold colors to transform your look.",
  },
  {
    title: "Facials",
    icon: <SkinOutlined style={{ fontSize: "32px", color: "#aed581" }} />,
    description: "Glow up with deep cleansing and herbal facials.",
  },
  {
    title: "Spa & Massage",
    icon: <FireOutlined style={{ fontSize: "32px", color: "#ff8a65" }} />,
    description: "Relax with aromatherapy, head massage, and more.",
  },
  {
    title: "Beard & Grooming",
    icon: <SmileOutlined style={{ fontSize: "32px", color: "#ba68c8" }} />,
    description: "Sharp beard trims and clean-up for the gentleman look.",
  },
  {
    title: "Flexible Timings",
    icon: <ClockCircleOutlined style={{ fontSize: "32px", color: "#ffd54f" }} />,
    description: "Appointments to fit your daily schedule.",
  },
];

function OurServices() {
  return (
    <div
      style={{
        padding: "40px 20px",
        background: "linear-gradient(135deg, #1c1c1c, #2e2e2e)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level={2} style={{ color: "#29b6f6" }}>
          Men's Salon Services
        </Title>
        <Paragraph style={{ fontSize: "16px", maxWidth: 600, margin: "auto", color: "#ccc" }}>
          At Jully Men’s Salon, experience expert grooming with haircuts, facials, spa therapy, and more — designed just for men.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              hoverable
              bordered={false}
              style={{
                textAlign: "center",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                backgroundColor: "#121212",
                color: "#fff",
              }}
            >
              <div style={{ marginBottom: "16px" }}>{service.icon}</div>
              <Title level={4} style={{ color: "#fff" }}>{service.title}</Title>
              <Paragraph style={{ color: "#ccc" }}>{service.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Button type="primary" size="large" href="/appointment">
          Book Your Appointment
        </Button>
      </div>
    </div>
  );
}

export default OurServices;
