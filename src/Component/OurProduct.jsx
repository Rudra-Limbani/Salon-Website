import React from "react";
import { Card, Row, Col, Typography } from "antd";
import firstProduct from "../Images/FirstProduct.jpeg"; 
import second from "../Images/SecondProduct.jpeg";
import third from "../Images/ThirdProduct.jpeg"; 
import four from "../Images/FourthProduct.jpeg"; 
import five from "../Images/FifthProduct.jpeg"; 
import six from "../Images/SixProduct.jpeg"; 
import seven from "../Images/SevenProduct.jpeg"; 
import eight from "../Images/EightProduct.jpeg"; 


const { Title, Paragraph } = Typography;

const products = [
  {
    name: "L'Oréal Hair Spa Cream",
    price: "₹599",
    img: firstProduct,
  },
  {
    name: "Matrix Hair Serum",
    price: "₹399",
    img: second,
  },
  {
    name: "Schwarzkopf Hair Color",
    price: "₹699",
    img: third,
  },
  {
    name: "VLCC Facial Kit",
    price: "₹499",
    img: four,
  },
  {
    name: "Biotique Shampoo",
    price: "₹299",
    img: five,
  },
  {
    name: "Bella Vita Perfume",
    price: "₹999",
    img: six,
  },
  {
    name: "Lakmé Lip Balm",
    price: "₹199",
    img: seven,
  },
  {
    name: "Plum Face Wash",
    price: "₹349",
    img: eight,
  },
];

function OurProducts() {
  return (
    <div
      style={{
        padding: "40px 20px",
        background: "linear-gradient(135deg, #fce4ec, #e3f2fd)",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level={2} style={{ color: "#9c27b0" }}>
          Our Top Salon Products
        </Title>
        <Paragraph style={{ maxWidth: 600, margin: "auto", fontSize: "16px" }}>
          We proudly use and offer high-quality, premium beauty and hair care products to our customers.
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
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      padding: "10px",
                    }}
                  />
                </div>
              }
              style={{
                textAlign: "center",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <Title level={5}>{product.name}</Title>
              <Paragraph style={{ fontWeight: "bold", color: "#4caf50" }}>
                {product.price}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OurProducts;
