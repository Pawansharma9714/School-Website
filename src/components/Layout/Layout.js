import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <section className="preloader">
        <div className="spinner">
          <span className="spinner-rotate"></span>
        </div>
      </section>

      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
