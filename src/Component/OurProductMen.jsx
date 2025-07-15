import React from "react";
import { Card, Row, Col, Typography } from "antd";

// ✅ Importing all 8 images
import beardOil from "../Images/Men1.jpeg";
import hairWax from "../Images/Men2.jpeg";
import trimmer from "../Images/Men3.jpeg";
import faceWash from "../Images/Men4.jpeg";
import beardWash from "../Images/Men5.jpeg";
import razor from "../Images/Men6.jpeg";
import hairGel from "../Images/Men7.jpeg";
import deodorant from "../Images/Men8.jpeg";

const { Title, Paragraph } = Typography;

const products = [
  { name: "Beardo Beard Oil", price: "₹499", img: beardOil },
  { name: "Ustraa Hair Wax", price: "₹350", img: hairWax },
  { name: "Philips Trimmer", price: "₹1099", img: trimmer },
  { name: "Garnier Men Face Wash", price: "₹249", img: faceWash },
  { name: "Beard Wash - TMC", price: "₹299", img: beardWash },
  { name: "Bombay Razor", price: "₹499", img: razor },
  { name: "Set Wet Gel", price: "₹199", img: hairGel },
  { name: "Nivea Deodorant", price: "₹249", img: deodorant },
];


function OurProductMen() {
  return (
    <div
      style={{
        padding: "40px 20px",
        background: "linear-gradient(135deg, #1f1f1f, #2c2c2c)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level={2} style={{ color: "#00bcd4" }}>
          Premium Grooming Products for Men
        </Title>
        <Paragraph
          style={{
            maxWidth: 600,
            margin: "auto",
            fontSize: "16px",
            color: "#ccc",
          }}
        >
          Handpicked essentials for the modern man. All products available at
          Jully Men's Salon.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {products.map((product, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    height: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      padding: "10px",
                    }}
                  />
                </div>
              }
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#121212",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Title level={5} style={{ color: "#fff" }}>
                {product.name}
              </Title>
              <Paragraph style={{ color: "#4caf50", fontWeight: "bold" }}>
                {product.price}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OurProductMen;
