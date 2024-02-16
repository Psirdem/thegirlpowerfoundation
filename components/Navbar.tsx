/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import logo from "../public/assets/images/logo.svg";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const menuItems: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Our Vision",
    href: "/about/vision",
  },
  {
    title: "Our Mission",
    href: "/about/mission",
  },
  {
    title: "Our Team",
    href: "/about/team",
  },
  // {
  //   title: "Brightling Academy",
  //   href: "/projects/academy",
  // },
  {
    title: "The Girl Power Project",
    href: "/projects/girl-power",
  },
  {
    title: "Start Up",
    href: "/projects/start-up",
  },
  {
    title: "Brighter Future",
    href: "/projects/futures",
  },
  {
    title: "Impact",
    href: "/impact",
  },
  {
    title: "Get Involved",
    href: "/girl-involved",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <Navbar
      className="py-4"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand className="mr-10">
        <a href="/">
          <Image
            src={logo}
            alt="website logo"
            width={150}
            height={150}
            priority
          />
        </a>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 font-medium uppercase"
        justify="center"
      >
        <NavbarItem className="text-sm">
          <Link
            className={`${
              pathname === "/" ? "text-greenColor font-semibold" : ""
            }`}
            href="/"
            aria-current="page"
          >
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-medium text-sm uppercase"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                About
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px] text-center"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="vision">
              <Link
                href="/about/vision"
                className={` ${
                  pathname === "/our-vision"
                    ? "text-greenColor font-bold"
                    : "font-semibold uppercase"
                } `}
              >
                Our Vision
              </Link>
            </DropdownItem>
            <DropdownItem key="usage_metrics">
              <Link href="/about/mission" className="font-semibold uppercase">
                Our Mission
              </Link>
            </DropdownItem>
            <DropdownItem key="production_ready">
              <Link href="/about/team" className="font-semibold uppercase">
                Our Team
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent uppercase text-sm font-medium"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Projects
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px] text-center uppercase font-bold"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="usage_metrics">
              <Link className="font-semibold" href="/projects/girl-power">
                The Girl Power Project
              </Link>
            </DropdownItem>
            <DropdownItem key="production_ready">
              <Link className="font-semibold" href="/projects/futures">
                Brighter Futures
              </Link>
            </DropdownItem>
            <DropdownItem key="production_ready">
              <Link className="font-semibold" href="/projects/start-up">
                Start Up
              </Link>
            </DropdownItem>

            {/* <DropdownItem key="vision">
              <Link className="font-semibold" href="/projects/academy">
                Brightlingsea Academy
              </Link>
            </DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            href="/impact"
            className={`${
              pathname === "/impact"
                ? "text-greenColor font-semibold"
                : "text-sm font-medium"
            } `}
          >
            Impact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`${
              pathname === "/get-involved"
                ? "text-greenColor font-semibold"
                : "text-sm font-medium"
            } `}
            href="/get-involved"
          >
            Get Involved
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`${
              pathname === "/contact"
                ? "text-greenColor font-semibold"
                : "text-sm font-medium"
            } `}
            href="/contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <button className="uppercase lg:flex hidden gap-2 bg-yellowColor p-4 rounded-lg font-bold tracking-wider items-center hover:opacity-75 duration-500 transition-all">
            <Image
              src="/assets/icons/heart.svg"
              alt="heart icon"
              width={20}
              height={20}
            />
            <span>Donate</span>
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-10">
        {menuItems.map(({ title, href }) => (
          <div className="pt-4 font-semibold uppercase" key={title}>
            <NavbarMenuItem>
              <NavbarContent>
                <NavbarItem>
                  <a href={href}>{title}</a>
                </NavbarItem>
              </NavbarContent>
            </NavbarMenuItem>
          </div>
        ))}
        <button className="uppercase flex gap-2 bg-yellowColor px-8 py-3 rounded-lg font-bold tracking-wider text-xl justify-center items-center hover:opacity-75 duration-500 transition-all my-10">
          <Image
            src="/assets/icons/heart.svg"
            alt="heart icon"
            width={20}
            height={20}
          />
          <span>Donate</span>
        </button>
        <ul className="flex gap-10 items-center">
          <li className="bg-redColor p-1 rounded-full ">
            <a href="">
              <img src="/assets/icons/facebook-icon.svg" alt="facebook icon" />
            </a>
          </li>
          <li className="bg-redColor p-1 rounded-full ">
            <a href="">
              <img src="/assets/icons/x-icon.svg" alt="x icon" />
            </a>
          </li>
          <li className="bg-redColor p-1 rounded-full ">
            <a href="">
              <img
                src="/assets/icons/instagram-icon.svg"
                alt="instagram icon"
              />
            </a>
          </li>
          <li className="bg-redColor p-1 rounded-full ">
            <a href="">
              <img src="/assets/icons/youtube-icon.svg" alt="youtube iocn" />
            </a>
          </li>
        </ul>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
