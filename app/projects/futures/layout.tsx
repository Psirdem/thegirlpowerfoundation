import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Brighter Future",
  description:
    "The Brighter Futures Scholarship Programme, a subsidiary of the Girl Power Foundation, is a dedicated initiative focused on supporting male students in their pursuit of tertiary education.",
  robots: {
    index: true,
    follow: true,
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
