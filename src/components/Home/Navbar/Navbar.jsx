import React from "react";
import "./navbar.css";
import { IoRestaurantSharp } from "react-icons/io5";
import { RiMenuFoldFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="nav-container border d-flex justify-content-center">
      <nav className="container d-flex border justify-content-between">
        <section className="border d-flex border justify-content-between align-items-center">
          <IoRestaurantSharp className="icon mx-1" />
          <h3 className="m-0">dine out</h3>
        </section>

        <section className="list-container w-100 border d-flex border justify-content-end align-items-center">
          <ul className="d-flex justify-content-between border m-0 p-2 w-50">
            <li>about us</li>
            <li>our menu</li>
            <li>feedbacks</li>
            <li>our chefs</li>
          </ul>
          <RiMenuFoldFill className="icon  mx-1" />
        </section>
      </nav>
    </div>
  );
}
