import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Our Vision",
  description:
    "Our vision is for every child in Ghana to have equal chance to achieve their maximum potential and be free from poverty.",
  robots: {
    index: true,
    follow: true,
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
