"use client"
import PATH from "@/app/const/path";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Link href={PATH.dashboard.about} style={{"marginRight":"10px"}}>About</Link>
      <Link href={PATH.dashboard.product}>Product</Link>
    </>
  );
};

export default Navbar;
