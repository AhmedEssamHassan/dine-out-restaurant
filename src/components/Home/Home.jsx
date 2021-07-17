import React, { useContext } from "react";
import { AppContext } from "../../AbbContext";
import About from "../About/About";
import Menu from "../Menue/Menu";
import Header from "./Header/Header";

export default function Home() {
  const data = useContext(AppContext);
  return (
    <main>
      <Header />
      <About />
      <Menu />
    </main>
  );
}
