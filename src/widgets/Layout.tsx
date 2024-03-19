import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  type?: "login" | "profile";
}

export default function Layout({ children, type }: LayoutProps) {
  return (
    <article className="">
      {type == "login" && (
        <>
          <Header />
            {children}
          <Footer />
        </>
      )}
      {type == "profile" && (
        <>
          <Header />
            {children}
          <Footer />
        </>
      )}
    </article>
  );
}
