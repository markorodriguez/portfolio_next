import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"
import { motion } from "framer-motion"

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

  const [scroll, setScroll] = useState(false)
  const [toogle, setToogle] = useState(false)

  const menuVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      }
    }
  }
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20)
    })
  }, [])


  return (
    <div className={` ${scroll ? 'bg-opacity-30 bg-white fixed w-full' : ''} `}>
      <div className="flex w-10/12 md:w-7/12 mx-auto justify-between items-center py-8">
      <button className='rounded-full bg-light w-8 h-8 text-center text-dark flex items-center justify-center font-semibold'>
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
          <HiMenu />
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
