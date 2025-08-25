"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import logo from "../public/assets/images/logo.svg";
import SponsorsSection from "./SponsorsSection";

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  const footerContainer = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          opacity: 0,
          stagger: 0.2,
          ease: "back",
        },
        scrollTrigger: {
          trigger: "#footer",
          toggleActions: "play none play reverse",
        },
      });

      tl.from(
        [
          "#footer .image",
          "#footer .list",
          "#footer .content",
          "#footer address",
        ],
        {
          yPercent: 50,
        }
      );
    },
    { scope: footerContainer }
  );

  return (
    <footer
      id="footer"
      className="max-w-screen-xl mx-auto px-10 py-8"
      ref={footerContainer}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-10 place-items-center">
        <div className="image flex flex-col items-center justify-center gap-8">
          <a href="/">
            <Image
              src={logo}
              alt="website logo"
              className="w-[600px] h-auto"
              priority
            />
          </a>
          <ul className="list flex items-center gap-5">
            <li className="bg-redColor p-1 rounded-full ">
              <a href="https://twitter.com/TheGirlPowerGH" target="_blank">
                <img src="/assets/icons/x-icon.svg" alt="x icon" />
              </a>
            </li>
            <li className="bg-redColor p-1 rounded-full ">
              <a
                href="https://www.instagram.com/thegirlpowerfoundation_gh"
                target="_blank"
              >
                <img
                  src="/assets/icons/instagram-icon.svg"
                  alt="instagram icon"
                />
              </a>
            </li>
            <li className="bg-redColor p-1 rounded-full ">
              <a
                href="https://www.youtube.com/channel/UCrV1px3tpwDWM2ODXC47TVQ"
                target="_blank"
              >
                <img src="/assets/icons/youtube-icon.svg" alt="youtube iocn" />
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="content flex flex-col lg:ml-20 text-center lg:text-left">
          <h2 className="text-3xl mb-4">Make A Donation</h2>
          <p>
            We use Donation Manager to handle our donations so we pay less in
            bank charges and receive more of your donations. We can accept
            donations via Paypal and most credit cards. If you&apos;re a UK
            taxpayer, please Gift Aid your donations so we receive an extra 25p
            for every £1 you give us.
          </p>
          <div className="btn mt-10">
            <Link
              className="bg-greenColor uppercase font-bold px-10 py-3 rounded-lg shadow-lg hover:opacity-80 text-white transition-all hover:translate-y-1 duration-500"
              href="/donate"
            >
              Donate
            </Link>
          </div>
        </div> */}

        <div className="flex flex-col items-center justify-between gap-10">
          <address className="text-center flex flex-col items-center justify-center">
            {/* <ul>
              <li>MR & MRS BAAH FREMPONG</li>
              <li>RESIDENCE APPIADU &mdash; KUMASI</li>
              <li>AK &mdash; 868 &mdash; 1207</li>
              <li>PLOT NO. 21 BLOCK</li>
            </ul> */}
            <p className="text-redColor font-medium mt-2">
              Email:{" "}
              <a href="mailto:thegirlpowerfoundation@outlook.com">
                thegirlpowerfoundation@outlook.com
              </a>
            </p>
            <p className="text-redColor font-medium mt-1">
              Phone: <span>+233</span> 24 359 8854
            </p>
            <p>
              THE GIRL POWER FOUNDATION &copy; 2019 &mdash;{" "}
              {new Date().getFullYear()}
            </p>
          </address>
        </div>
        <SponsorsSection />
      </div>
    </footer>
  );
};

export default Footer;
