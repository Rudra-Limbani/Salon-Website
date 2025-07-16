import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import HeaderData from "./HeaderData";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? 80 : 200;

  return (
    <Layout>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      <HeaderData collapsed={collapsed} />

      <Layout
        style={{
          // marginLeft: sidebarWidth,
          marginLeft: collapsed ?80 :200,
          transition: "margin-left 0.3s ease",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: sidebarWidth,
            right: 0,
            zIndex: 1000,
            transition: "left 0.3s ease",
          }}
        >
          <HeaderData collapsed={collapsed} />
        </div>

        <Content
          style={{
            marginTop: 70,
            padding: 20,
            height: "calc(100vh - 70px)",
            overflowY: "auto",
            background: "#f9f9f9",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
