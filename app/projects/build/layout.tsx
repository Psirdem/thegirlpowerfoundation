import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Building Project",
  description:
    "The Building project initiative of the foundation is dedicated to acquiring a permanent facility of our own to accomodate our wokers as well us some of our benefeciaries.",
  robots: {
    index: true,
    follow: true,
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
