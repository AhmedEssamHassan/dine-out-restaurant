import React, { useContext } from "react";
import { AppContext } from "../../AbbContext";
import About from "../About/About";
import Footer from "../footer/Footer";
import Menu from "../Menue/Menu";
import Team from "../team/Team";
import Testimonial from "../testimonials/Testimonial";
import Header from "./Header/Header";

export default function Home() {
  const data = useContext(AppContext);
  return (
    <main>
      <Header />
      <About />
      <Menu />
      <Testimonial />
      <Team />
      <Footer />
    </main>
  );
}
