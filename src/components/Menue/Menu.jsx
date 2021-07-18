import React, { useContext, useState } from "react";
import "./menu.css";
import CategoryItem from "./CategoryItem/CategoryItem";
import { AppContext } from "../../AbbContext";
import CatLink from "./CatLink";

export default function Menu() {
  const data = useContext(AppContext);

  const { filterCategory, list, isActiveBtn } = data;

  const catigories = ["lunch", "dinner", "drinks", "desserts"];

  return (
    <main className="">
      <p style={{ color: "orange" }}>dine out</p>
      <h3 className="title">menu</h3>
      <ul className=" d-flex my-5 justify-content-around align-items-center">
        {catigories.map((cat, indx) => (
          <CatLink key={indx} indx={indx} cat={cat} />
        ))}
      </ul>
      <section className="container d-flex flex-wrap my-5">
        {list.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </section>
    </main>
  );
}
