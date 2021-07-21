import React from "react";
import "./about.css";

export default function About() {
  return (
    <main className="container py-5">
      <p style={{ color: "orange" }}>Dine out</p>
      <h3 className="title">about us</h3>
      <section className="content-container d-md-flex justify-content-around my-5">
        <div className="d-flex flex-column align-items-start  w-100 p-3">
          <h3>welcome to dine out restaurant</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            distinctio at, perferendis facere perspiciatis saepe iusto fuga,
            eligendi repellat, veritatis alias quas assumenda suscipit quidem
            sint. Nulla asperiores quod accusamus, cum illo consequuntur harum
            nesciunt distinctio, blanditiis beatae delectus aspernatur totam
            eligendi recusandae doloremque ut excepturi <br /> eum fugit officia
            molestias.
          </p>
          <button className="about-btn ">check our menue</button>
        </div>
        <div className=" w-100 p-3">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
