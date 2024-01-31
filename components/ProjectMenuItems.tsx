"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const components: { title: string; href: string }[] = [
  {
    title: "Brightling Academy",
    href: "/projects/academy",
  },
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
];

const ProjectMenuItems = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <a href="#">Projects</a>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 text-sm uppercase bg-white shadow-md border-2 rounded-xl  p-4 outline-2 outline-transparent outline-offset-2">
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex flex-col gap-3 items-start tracking-wider font-medium">
            {components.map(({ title, href }) => (
              <Link
                className="hover:text-greenColor duration-500 transition-all ease-in"
                key={title}
                href={href}
              >
                {title}
              </Link>
            ))}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectMenuItems;
