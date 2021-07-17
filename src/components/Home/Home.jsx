import React, { useContext } from "react";
import { AppContext } from "../../AbbContext";
import Header from "./Header/Header";

export default function Home() {
  const data = useContext(AppContext);
  return (
    <div>
      <Header />
      home{" "}
    </div>
  );
}
