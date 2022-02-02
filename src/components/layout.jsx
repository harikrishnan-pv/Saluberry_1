import React from "react";
import Footer from "./footer";
import Navbarr from "./navbarr";

export default function Layout({ children, categories }) {
  return (
    <div className="min-h-screen">
      <div className="bakk relative min-h-screen">
        <Navbarr categories={categories} />
        <div className="min-h-full">
          <div className=" ">
            <div className="p-2"></div>
          </div>
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
