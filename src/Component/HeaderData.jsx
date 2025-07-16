import React, { useState } from "react";
import { Button, Image, Input, Modal } from "antd";
import { Header } from "antd/es/layout/layout";
import Login from "./Login";
import Register from "./Register";
import { useAuth } from "../context/AuthContext";
import headerLogo from "../Images/HeaderLogo.png";
import "../styles/HeaderData.css"; // 👈 Import external CSS

function HeaderData({ collapsed }) {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <>
      <Header
        style={{
          position: "fixed",
          top: 0,
          left: collapsed ? 80 : 200,
          right: 0,
          height: 70,
          background: "linear-gradient(to right, #4f3c3c, #1c1c1c)",
          zIndex: 1000,
          padding: "0 20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {/* Logo + Search (hide on mobile) */}
        <div className="header-left">
          <Image
            src={headerLogo}
            width={50}
            preview={false}
            style={{
              borderRadius: "50%",
              filter: "brightness(2)",
            }}
          />
          <Input.Search
            placeholder="Search Here..."
            style={{
              width: 220,
              borderRadius: 8,
              backgroundColor: "#fff",
            }}
          />
        </div>

        {/* Buttons Always Visible */}
        <div className="header-right">
          {!isLoggedIn ? (
            <>
              <Button
                type="primary"
                size="middle"
                onClick={() => setIsLoginVisible(true)}
                style={{
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
                  marginLeft: 10,
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
        </div>
      </Header>

      {/* Login Modal */}
      <Modal
        open={isLoginVisible}
        onCancel={() => setIsLoginVisible(false)}
        footer={null}
        title="Login"
        centered
      >
        <Login onLoginSuccess={() => setIsLoginVisible(false)} />
      </Modal>

      {/* Register Modal */}
      <Modal
        open={isRegisterVisible}
        onCancel={() => setIsRegisterVisible(false)}
        footer={null}
        title="Register"
        centered
      >
        <Register onRegisterSuccess={() => setIsRegisterVisible(false)} />
      </Modal>
    </>
  );
}

export default HeaderData;
