import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Start Up",
  description:
    "More resilient and sustainable communities are critical to breaking the cycle of poverty.",
  robots: {
    index: true,
    follow: true,
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
