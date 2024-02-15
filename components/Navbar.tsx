"use client";

import Image from "next/image";
import logo from "../public/assets/images/logo.svg";

import ProjectMenuItems from "./ProjectMenuItems";
import AboutMenuItems from "./AboutMenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="uppercase text-blackColor text-sm font-semibold tracking-wider w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex gap-8 lg:justify-between  items-center">
        <div className="lg:hidden block">
          <MobileNav />
        </div>
        <a href="/">
          <Image
            src={logo}
            alt="website logo"
            width={150}
            height={150}
            priority
          />
        </a>
        <ul className="lg:flex justify-between items-center hidden gap-8">
          <li>
            <Link
              className={`${
                pathname === "/" && "border-b-2 pb-1 border-greenColor"
              } hover:text-greenColor duration-500 transition-all`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <AboutMenuItems />
          </li>
          <li>
            <ProjectMenuItems />
          </li>
          <li>
            <Link
              className={`${
                pathname === "/impact" && "border-b-2 pb-1 border-greenColor"
              } hover:text-greenColor duration-500 transition-all`}
              href="/impact"
            >
              Impact
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/get-involved" &&
                "border-b-2 pb-1 border-greenColor"
              } hover:text-greenColor duration-500 transition-all`}
              href="/get-involved"
            >
              Get Involved
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/contact" && "border-b-2 pb-1 border-greenColor"
              } hover:text-greenColor duration-500 transition-all`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="uppercase lg:flex hidden gap-2 bg-yellowColor px-8 py-3 rounded-lg font-bold tracking-wider text-xl items-center hover:opacity-75 duration-500 transition-all">
          <Image
            src="/assets/icons/heart.svg"
            alt="heart icon"
            width={20}
            height={20}
          />
          <span>Donate</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
