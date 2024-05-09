import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Our Team is made up of a group of passionate and devoted employees, trustees and volunteers both in Ghana and the UK.",
  robots: {
    index: true,
    follow: true,
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
