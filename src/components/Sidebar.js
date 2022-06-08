import React from "react";

import { Sidebar, SidebarItem } from "react-responsive-sidebar";

import "react-pro-sidebar/dist/css/styles.css";

export default function SimpleList() {
  const items = [
    <SidebarItem>My current order</SidebarItem>,
    <SidebarItem>My orders</SidebarItem>,
    <SidebarItem>My profile</SidebarItem>,
    <SidebarItem>Create new product</SidebarItem>,
    <SidebarItem>Update product</SidebarItem>,
    <SidebarItem>Manage users</SidebarItem>,
    
  ];

  return <Sidebar breakpoint={980} content={items}></Sidebar>;
}