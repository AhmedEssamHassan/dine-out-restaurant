import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AbbContext";
import "./catLink.css";
export default function CatLink({ indx, cat }) {
  const data = useContext(AppContext);

  const { filterCategory } = data;
  return (
    <div>
      <li
        className="cat-meu-link"
        key={indx}
        onClick={() => {
          filterCategory(cat);
        }}
      >
        {cat}
      </li>
    </div>
  );
}
