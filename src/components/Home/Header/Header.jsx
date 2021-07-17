import React from "react";
import Navbar from "../Navbar/Navbar";
import "./header.css";
import background from "../../../images/background.png";
export default function Header() {
  return (
    <>
      <header className="">
        <img src={background} alt="header-img" />
        <Navbar />
      </header>
    </>
  );
}
