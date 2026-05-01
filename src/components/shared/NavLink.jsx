"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, className }) => {
  const path = usePathname();
  const isActive = href == path;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "border-b-2 border-b-purple-500 text-purple-500" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
