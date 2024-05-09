import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Our mission is to provide children, girls and young adults in Ghana with a free education, safer shelter, so that young people can create their own bright and sustainable future free from poverty.",
  robots: {
    index: true,
    follow: true,
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Layout;
