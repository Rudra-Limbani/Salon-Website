import React from "react";
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Layout } from "antd";

const { Footer } = Layout;

function FooterData() {
  return (
    <Footer
      style={{
        textAlign: "center",
        background: "linear-gradient(to right, #5e17eb, #7f00ff)",
        color: "#fff",
        padding: "30px 10px",
        marginTop: "40px",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div style={{ marginBottom: "12px" }}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 15px", fontSize: "20px", color: "#fff" }}
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 15px", fontSize: "20px", color: "#fff" }}
        >
          <FacebookOutlined />
        </a>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 15px", fontSize: "20px", color: "#fff" }}
        >
          <WhatsAppOutlined />
        </a>
      </div>

      <div style={{ fontSize: "13px", color: "#eee" }}>
        © {new Date().getFullYear()} Jully Hair Salon. All rights reserved.
      </div>
    </Footer>
  );
}

export default FooterData;
