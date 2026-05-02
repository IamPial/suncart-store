"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 w-full  border-separator bg-background/50 backdrop-blur-lg shadow-sm">
      <header className="flex h-16 items-center justify-between px-6 container mx-auto">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center">
            <Link href="/" className="font-bold text-3xl">
              <span className="text-orange-500">Sun</span>Cart
            </Link>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex font-semibold text-slate-700 ">
          <li>
            <NavLink href="/" className={"text-slate-700"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/products" className={"text-slate-700"}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink href="/profile" className={"text-slate-700"}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4 font-semibold">
            <li>
              <NavLink href="/" className={"block py-2 border-none "}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/products" className={"block py-2 border-none "}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink href="/profile" className={"block py-2 border-none "}>
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
