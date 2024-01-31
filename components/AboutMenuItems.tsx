import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const components: { title: string; href: string }[] = [
  {
    title: "Our Story",
    href: "/about/our-story",
  },
  {
    title: "Our Work",
    href: "/about/our-work",
  },
  {
    title: "Our Team",
    href: "/about/our-team",
  },
];

const AboutMenuItems = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <a href="#">About</a>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 uppercase text-sm">
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

export default AboutMenuItems;
