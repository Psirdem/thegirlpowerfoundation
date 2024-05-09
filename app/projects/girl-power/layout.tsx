import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Girl Power",
  description:
    "The Girl Power project seeks to provide educational scholarships to young girls who have the zeal to go to school but have limited or no financial support.",
  robots: {
    index: true,
    follow: true,
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
