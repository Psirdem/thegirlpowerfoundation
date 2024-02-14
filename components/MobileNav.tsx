/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AboutMenuItems from "./AboutMenuItems";
import ProjectMenuItems from "./ProjectMenuItems";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu className="text-redColor" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex flex-col gap-10 items-start justify-center text-blackColor"
        side="left"
      >
        <ul className="flex flex-col gap-8">
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
        <button className="uppercase flex gap-2 bg-yellowColor px-8 py-3 rounded-lg font-bold tracking-wider text-xl items-center hover:opacity-75 duration-500 transition-all">
          <Image
            src="/assets/icons/heart.svg"
            alt="heart icon"
            width={20}
            height={20}
          />
          <span>Donate</span>
        </button>
        <ul className="flex justify-between items-center gap-5">
          <li className="bg-redColor p-3 rounded-full ">
            <a href="">
              <img src="/assets/icons/facebook-icon.svg" alt="facebook icon" />
            </a>
          </li>
          <li className="bg-redColor p-3 rounded-full ">
            <a href="">
              <img src="/assets/icons/x-icon.svg" alt="x icon" />
            </a>
          </li>
          <li className="bg-redColor p-3 rounded-full ">
            <a href="">
              <img
                src="/assets/icons/instagram-icon.svg"
                alt="instagram icon"
              />
            </a>
          </li>
          <li className="bg-redColor p-3 rounded-full ">
            <a href="">
              <img src="/assets/icons/youtube-icon.svg" alt="youtube iocn" />
            </a>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
