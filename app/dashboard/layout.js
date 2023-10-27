"use client"
import Navbar from "@/Components/Navbar";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";;
import React from "react";

export default function LayoutDashboard({ children }) {

  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Navbar/>
      </Header>
      <Content style={{ padding: "0 50px" }}>{children}</Content>
    </Layout>
  );
}
