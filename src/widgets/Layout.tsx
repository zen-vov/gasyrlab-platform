import React, { ReactNode } from "react";
import Header from "./Header/ui/Header";
import Footer from "./Footer/ui/Footer";

interface LayoutProps {
  children: ReactNode;
  type?: "login" | "profile";
}

export default function Layout({ children, type }: LayoutProps) {
  return (
    <main>
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
    </main>
  );
}
