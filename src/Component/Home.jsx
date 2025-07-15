import React from "react";
import { Typography, Button, Row, Col, Card } from "antd";
import {
  SmileOutlined,
  ScissorOutlined,
  BgColorsOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1604799242025-0c5c34f3c1ee?auto=format&fit=crop&w=1950&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(15, 15, 15, 0.75)", // Darker elegant overlay
          padding: "50px 30px",
          borderRadius: "16px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Title level={1} style={{ color: "#FFB300", marginBottom: "10px" }}>
            Welcome to Jully Hair Salon
          </Title>
          <Paragraph
            style={{
              fontSize: "17px",
              color: "#ccc",
              maxWidth: 700,
              margin: "auto",
            }}
          >
            ✂️ Transform your look and refresh your soul. Whether it's a modern
            cut or a luxurious facial, Jully Hair Salon is your style
            destination.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            href="/appointment"
            style={{
              marginTop: 20,
              backgroundColor: "#FF4081",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            Book Appointment
          </Button>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {[
            {
              icon: <ScissorOutlined />,
              title: "Haircuts",
              text: "Modern & classic styles for all.",
              color: "#00BCD4",
            },
            {
              icon: <BgColorsOutlined />,
              title: "Coloring",
              text: "Bold shades, gentle tones — your choice.",
              color: "#FF9800",
            },
            {
              icon: <SmileOutlined />,
              title: "Beauty",
              text: "Facials, spa, waxing & more.",
              color: "#E91E63",
            },
            {
              icon: <ClockCircleOutlined />,
              title: "Flexible Timings",
              text: "We fit your schedule — not the other way.",
              color: "#8BC34A",
            },
          ].map((item, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                hoverable
                style={{
                  textAlign: "center",
                  borderRadius: "12px",
                  backgroundColor: "#1c1c1c",
                  color: "#fff",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  minHeight: "230px",
                }}
              >
                <div
                  style={{ fontSize: 36, color: item.color, marginBottom: 10 }}
                >
                  {item.icon}
                </div>
                <Title level={4} style={{ color: "#fff", marginBottom: 5 }}>
                  {item.title}
                </Title>
                <Paragraph style={{ color: "#ccc", fontSize: "14px" }}>
                  {item.text}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
