import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"

const linksNavbar = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const iconsSocial = [
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/marko-rodriguez/",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    href: "https://github.com/markorodriguez",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8">
      <button className="rounded-full bg-light w-8 h-8 text-center text-dark flex items-center justify-center font-semibold">
        M
      </button>
      <div className="flex justify-between">
        {linksNavbar.map(({ name, href }, index) => {
          return (
            <Link
              className="mx-4 md:inline hidden text-light opacity-60 hover:opacity-100"
              key={index + "nav_option"}
              href={href}
            >
              {name}
            </Link>
          );
        })}
      </div>
      <div className="md:flex hidden justify-between">
        {iconsSocial.map(({ icon, href }, idx) => {
          return (
            <Link className="mx-2 opacity-60 hover:opacity-100" key={idx + "link"} href={href}>
              {icon}
            </Link>
          );
        })}
      </div>
      <div className="inline md:hidden">
        <button className="rounded-full bg-light w-8 h-8 text-center text-dark flex items-center justify-center font-semibold">
          <HiMenu/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
