import React from "react";
import Head from "next/head";
import Navbar from "../navbar/Navbar";

const Layout = ({ children, titlePage }) => {
  return (
    <>
      <Head>
        <title>Delman Internship {titlePage}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
