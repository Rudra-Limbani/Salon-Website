

import React, { useEffect, useState } from "react";
import { Layout, Menu, Modal } from "antd";
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

  // ✅ Mobile View State inside component
  const [mobileView, setMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { label: "Home", key: "/", icon: <HomeOutlined /> },
    {
      label: "Our Services",
      key: "/ourServices",
      icon: <CustomerServiceOutlined />,
      protected: true,
    },
    {
      label: "Ladies Products",
      key: "/ourProduct",
      icon: <WomanOutlined />,
      protected: true,
    },
    {
      label: "Mens Products",
      key: "/ourProductMen",
      icon: <ManOutlined />,
      protected: true,
    },
    {
      label: "Appointment",
      key: "/appointment",
      icon: <SolutionOutlined />,
      protected: true,
    },
    { label: "Location", key: "/location", icon: <AimOutlined /> },
    { label: "Logout", key: "logout", icon: <LogoutOutlined /> },
  ];

  const handleMenuClick = (e) => {
    const item = menuItems.find((item) => item.key === e.key);

    if (e.key === "logout") {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      navigate("/");
      return;
    }

    if (item?.protected && !isLoggedIn) {
      Modal.error({
        title: "Access Denied",
        content: "Please login first to access this section.",
      });
      return;
    }

    navigate(e.key);

    if (window.innerWidth < 768) {
      onCollapse(true);
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={100}
      collapsedWidth={mobileView ? 0 : 80}
      breakpoint="md"
      onBreakpoint={(broken) => onCollapse(broken)}
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "linear-gradient(to right, #272222ff, #000000ff)",
        boxShadow: "2px 0 8px rgba(0,0,0,0.5)",
        zIndex: 1000,
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* ✅ Show logo only when visible */}
      {(!collapsed || !mobileView) && (
        <div style={{ textAlign: "center", padding: "20px 10px" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "100px",
              transition: "0.3s ease-in-out",
              filter: "brightness(1.5)",
            }}
          />
        </div>
      )}

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        inlineCollapsed={mobileView || collapsed}
        items={menuItems}
        theme="dark"
        style={{ backgroundColor: "transparent" }}
        // onClick={handleMenuClick}
        onClick={(e) => {
          const item = menuItems.find((item) => item.key === e.key);

          // ✅ If user clicks logout
          if (e.key === "logout") {
            localStorage.removeItem("isLoggedIn");
            setIsLoggedIn(false);
            navigate("/");
            return;
          }

          // ✅ If route is protected and user not logged in
          if (item?.protected && !isLoggedIn) {
            Modal.warning({
              title: "Login Required!",
              content: "Please login to access this section.",
              centered: true,
            });
            return;
          }

          // ✅ Navigate to route
          navigate(e.key);

          // ✅ Collapse sidebar on mobile
          if (window.innerWidth <= 768) {
            onCollapse(true);
          }
        }}
      />
    </Sider>
  );
}

export default Sidebar;
