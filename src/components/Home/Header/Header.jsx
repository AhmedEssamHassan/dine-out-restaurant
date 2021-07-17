import React from "react";
import Navbar from "../Navbar/Navbar";
import "./header.css";
import background from "../../../images/background.png";
export default function Header() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <header className="d-flex align-items-center justify-content-center">
        <div className="">
          <h1>dine out restaurant</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            <br />
            ea nemo. Nam maxime autem maiores.
          </p>
          <button className="btn btn-warning text-capitalize">order now</button>
        </div>
        <Navbar />
      </header>
    </main>
  );
}
