import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CustomCursor from "../CustomCursor/CustomCursor";
import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";

import "./home.scss";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="main-container" id="main-container">
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
