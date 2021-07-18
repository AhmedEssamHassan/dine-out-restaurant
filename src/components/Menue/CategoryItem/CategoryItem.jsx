import React from "react";
import "./categoryItem.css";
export default function CategoryItem({ item }) {
  return (
    <div className="cat-item d-flex justify-content-between mx-5 align-items-center">
      <section className="d-flex align-items-center">
        <img src={item.imgUrl} alt="" className="item-img m-3" />
        <p className="m-0">{item.name}</p>
      </section>
      <section style={{ color: "orange" }}>$ {item.price}</section>
    </div>
  );
}
