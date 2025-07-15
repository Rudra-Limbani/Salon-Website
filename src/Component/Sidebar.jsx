import React, { useState } from "react";
import { Layout, Menu, Button, Modal } from "antd";
import {
  HomeOutlined,
  CustomerServiceOutlined,
  AimOutlined,
  SolutionOutlined,
  WomanOutlined,
  ManOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../Images/MainLogo.png";
import { useAuth } from "../context/AuthContext";

const { Sider } = Layout;

function Sidebar({ collapsed, onCollapse }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  //   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const menuItems = [
    { label: "Home", key: "/", icon: <HomeOutlined /> },
    {
      label: "Our Services",
      key: "/ourServices",
      icon: <CustomerServiceOutlined />,
    },
    { label: "Ladies Products", key: "/ourProduct", icon: <WomanOutlined /> },
    { label: "Mens Products", key: "/ourProductMen", icon: <ManOutlined /> },
    { label: "Appointment", key: "/appointment", icon: <SolutionOutlined /> },
    { label: "Location", key: "/location", icon: <AimOutlined /> },
  ];

  const handleLogout = () => {
    Modal.confirm({
      title: "Are you sure you want to logout?",
      okText: "Logout",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
        setIsLoggedIn(false);
      },
    });
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={200}
      collapsedWidth={80}
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "linear-gradient(to right, #272222ff, #000000ff)",
        boxShadow: "2px 0 8px rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: "center", padding: "20px 10px" }}>
        <img
          src={logo}
          alt="Salon Logo"
          style={{
            width: collapsed ? "40px" : "100px",
            transition: "0.3s ease-in",
            filter: "brightness(1.5)",
          }}
        />
      </div>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={(e) => {
          if (!isLoggedIn) {
            Modal.warning({
              title: "Login Required 🔒",
              content: "Please login to access this section.",
              centered: true,
            });
            return;
          }
          navigate(e.key);
        }}
        items={menuItems}
        theme="dark"
        style={{ backgroundColor: "transparent", flexGrow: 1 }}
      />

      {/* Logout Button (only if logged in) */}
      {isLoggedIn && (
        <div style={{ padding: "10px", textAlign: "center" }}>
          <Button
            icon={<LogoutOutlined />}
            danger
            block
            onClick={handleLogout}
            style={{ borderRadius: 6 }}
          >
            {!collapsed && "Logout"}
          </Button>
        </div>
      )}
    </Sider>
  );
}

export default Sidebar;
