"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "about",
      url: "/about",
    },
    {
      name: "contact",
      url: "/contact",
    },
  ];

  return (
    <header className="max-w-6xl mx-auto flex flex-col justify-between">
      <nav className="w-full flex justify-between items-center h-16 px-3 ">
        <div>
          <h1 className="text-3xl font-bold">First Project</h1>
        </div>

        <div className="lg:flex gap-5 hidden items-center">
          {navLinks.map((links) => (
            <Link href={links.url}>{links.name}</Link>
          ))}
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {!toggle ? <Menu /> : <X />}
          </button>
        </div>
      </nav>
      {toggle ? (
        <div className="flex flex-col ">
          {navLinks.map((link) => (
            <Link className="w-full px-5 py-3 border-b" href={link.url}>
              {link.name}
            </Link>
          ))}
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Navbar;
