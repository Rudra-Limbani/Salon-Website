import React, { useState } from "react";
import { Button, Image, Input, Modal, Row, Col } from "antd";
import { Header } from "antd/es/layout/layout";
import Login from "./Login";
import Register from "./Register";
import { useAuth } from "../context/AuthContext";

function HeaderData({ collapsed }) {
  const sidebarWidth = collapsed ? 80 : 200;

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <>
      <Header
        style={{
          position: "fixed",
          top: 0,
          left: sidebarWidth, // Important: match sidebar width
          right: 0,
          height: 70,
          background: "linear-gradient(to right, #4f3c3c, #1c1c1c)",
          zIndex: 1000,
          padding: "10px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          transition: "all 0.2s ease-in",
        }}
      >
        <Row
          align="middle"
          justify="space-between"
          style={{ width: "100%", flexWrap: "nowrap" }}
        >
          {/* Logo and Search */}
          <Col style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Image
              src="./src/Images/HeaderLogo.png"
              width={55}
              preview={false}
              style={{
                borderRadius: "50%",
                filter: "brightness(2)", // White visible on black
              }}
            />
            <Input.Search
              placeholder="Search Here..."
              style={{
                width: 250,
                borderRadius: 8,
                backgroundColor: "#fff",
              }}
            />
          </Col>

          {/* Log In & Sign Up */}
          <Col>
            <Col>
              {!isLoggedIn ? (
                <>
                  <Button
                    type="primary"
                    size="middle"
                    onClick={() => setIsLoginVisible(true)}
                    style={{
                      marginRight: 10,
                      background: "#4CAF50",
                      border: "none",
                      borderRadius: 6,
                    }}
                  >
                    Log In
                  </Button>
                  <Button
                    size="middle"
                    onClick={() => setIsRegisterVisible(true)}
                    style={{
                      background: "#9C27B0",
                      color: "#fff",
                      borderRadius: 6,
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <Button
                  danger
                  size="middle"
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    setIsLoggedIn(false);
                  }}
                >
                  Logout
                </Button>
              )}
            </Col>
          </Col>
        </Row>
      </Header>

      {/* Login Modal */}
      <Modal
        open={isLoginVisible}
        onCancel={() => setIsLoginVisible(false)}
        footer={null}
        title="Login"
        centered
        style={{ padding: 24 }}
      >
        <Login onLoginSuccess={() => setIsLoginVisible(false)} />
      </Modal>
      <Modal
        open={isRegisterVisible}
        onCancel={() => setIsRegisterVisible(false)}
        footer={null}
        title="Register"
        centered
        bodyStyle={{ padding: 24 }}
      >
        <Register onRegisterSuccess={() => setIsRegisterVisible(false)} />
      </Modal>
    </>
  );
}

export default HeaderData;
