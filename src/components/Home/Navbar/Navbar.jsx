import React, { useContext } from "react";
import "./navbar.css";
import { IoRestaurantSharp } from "react-icons/io5";
import { RiMenuFoldFill, RiMenuUnfoldLine } from "react-icons/ri";
import { AppContext } from "../../../AbbContext";

export default function Navbar() {
  const data = useContext(AppContext);
  const { isNavMenuOpen, toggleNavMenue } = data;

  const style = isNavMenuOpen ? {} : { transform: `translate(${120}%)` };

  return (
    <div className="nav-container flex justify-content-center">
      <nav className="container d-md-flex my-3 justify-content-between">
        <section className="logo-icon-container d-flex justify-content-center align-items-center">
          <IoRestaurantSharp className="icon mx-1" />
          <h3 className="m-0">dine out</h3>
        </section>

        <section
          className="list-container w-100 d-flex justify-content-end align-items-center"
          style={{ overflow: "hidden" }}
        >
          <div className="list w-100 overflow-hidden d-flex justify-content-end">
            <ul className="d-flex justify-content-between m-0" style={style}>
              <li>about us</li>
              <li>our menu</li>
              <li>feedbacks</li>
              <li>our chefs</li>
            </ul>
          </div>
          {isNavMenuOpen ? (
            <RiMenuUnfoldLine className="icon  mx-1" onClick={toggleNavMenue} />
          ) : (
            <RiMenuFoldFill className="icon  mx-1" onClick={toggleNavMenue} />
          )}
        </section>
      </nav>
    </div>
  );
}
