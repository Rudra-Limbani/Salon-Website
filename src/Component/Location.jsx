import React from "react";
import { Card, Typography, Row, Col } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function Location() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #1a1a1a, #2e2e2e)",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level={2} style={{ color: "#03a9f4" }}>
          Visit Our Salon
        </Title>
        <Paragraph
          style={{ maxWidth: 600, margin: "auto", fontSize: "16px", color: "#ddd" }}
        >
          We're located at a prime spot in Rajkot. Walk in or book an appointment — we’re always ready to style you up!
        </Paragraph>
      </div>

      <Row justify="center" gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Card
            bordered={false}
            style={{
              borderRadius: "12px",
              backgroundColor: "#1e1e1e",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              padding: "24px",
              color: "#fff",
            }}
          >
            <Paragraph style={{ color: "#eee" }}>
              <EnvironmentOutlined style={{ fontSize: "20px", color: "#4caf50" }} />{" "}
              <strong>Address:</strong> Labhdeep Main Road, Mavdi Chowk, Rajkot,
              Gujarat 360004
            </Paragraph>

            <Paragraph style={{ color: "#eee" }}>
              <PhoneOutlined style={{ fontSize: "20px", color: "#03a9f4" }} />{" "}
              <strong>Phone:</strong> +91 99133 21881
            </Paragraph>

            <Paragraph style={{ color: "#eee" }}>
              <MailOutlined style={{ fontSize: "20px", color: "#ff9800" }} />{" "}
              <strong>Email:</strong> contact@jullyhairsalon.com
            </Paragraph>

            <Paragraph style={{ color: "#eee" }}>
              <ClockCircleOutlined style={{ fontSize: "20px", color: "#f44336" }} />{" "}
              <strong>Timings:</strong> Mon - Sun : 9:00 AM to 8:30 PM
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            bordered={false}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              height: "100%",
              backgroundColor: "#1e1e1e",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
            <iframe
              title="salon location"
              src="https://www.google.com/maps?q=Labhdeep+Main+Road+Mavdi+Chowk+Rajkot&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Location;
