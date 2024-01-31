import Image from "next/image";
import logo from "../public/assets/images/logo.svg";

import { ProjectMenuItems } from "./ProjectMenuItems";
import { AboutMenuItems } from "./AboutMenuItems";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="uppercase text-sm font-bold tracking-wider">
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex gap-8 justify-between items-center">
        <a href="/">
          <Image
            src={logo}
            alt="website logo"
            width={200}
            height={200}
            priority
          />
        </a>
        <ul className="flex justify-between items-center gap-8">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <AboutMenuItems />
          </li>
          <li>
            <ProjectMenuItems />
          </li>
          <li>
            <Link href="/impact">Impact</Link>
          </li>
          <li>
            <Link href="/get-involved">Get Involved</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className="uppercase flex gap-2 bg-yellowColor px-8 py-3 rounded-lg font-bold tracking-wider text-xl items-center">
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
