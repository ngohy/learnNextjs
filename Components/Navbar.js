"use client"
import PATH from "@/app/const/path";
import { Menu } from "antd";
// import Link from "next/link";
import { useRouter } from 'next/navigation'
import React from "react";
const arNav =[
  {
    label:"About",
    navigate:PATH.dashboard.about
  },
  {
    label:"Product",
    navigate:PATH.dashboard.product
  },
  {
    label:"About",
    navigate:PATH.dashboard.about
  },
  {
    label:"Product",
    navigate:PATH.dashboard.product+"/item1/item2"
  },
]
const Navbar = () => {
  const route = useRouter();
  return (
    <>
      {/* <Link href={PATH.dashboard.about} style={{"marginRight":"10px"}}>About</Link>
      <Link href={PATH.dashboard.product}>Product</Link> */}
      <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={arNav.map((nav, index) => {
            const key = index + 1;
            return {
              key,
              label: nav.label,
              onClick:() => route.push(nav.navigate)
            };
          })}
        />
    </>
  );
};

export default Navbar;
