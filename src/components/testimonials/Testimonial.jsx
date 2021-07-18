import React from "react";
import { IoStar } from "react-icons/io5";
import "./testimonial.css";

export default function Testimonial() {
  return (
    <main className="my-5 py-5">
      <p style={{ color: "orange" }}>testimonials</p>
      <h3>our chefs</h3>
      <main className=" m-5 d-md-flex justify-content-around align-items-center">
        <section className="card-item  p-3">
          <h4>ahmed essam</h4>
          <h6 style={{ color: "orange" }}>Lorem ipsum dolor sit amet.</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi
            totam distinctio architecto iure dolor hic officia velit ad
            deserunt, officiis eius quisquam, harum est tempora sit excepturi
            porro iusto?
          </p>
          <p>
            <IoStar style={{ color: "orange" }} />
            <IoStar style={{ color: "orange" }} />
            <IoStar style={{ color: "orange" }} />
            <IoStar />
            <IoStar />
          </p>
        </section>
        <section className="card-item  p-3">
          <h4>ahmed essam</h4>
          <h6 style={{ color: "orange" }}>Lorem ipsum dolor sit amet.</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi
            totam distinctio architecto iure dolor hic officia velit ad
            deserunt, officiis eius quisquam, harum est tempora sit excepturi
            porro iusto?
          </p>
          <p>
            <IoStar style={{ color: "orange" }} />
            <IoStar style={{ color: "orange" }} />
            <IoStar style={{ color: "orange" }} />
            <IoStar />
            <IoStar />
          </p>
        </section>
        <section className="card-item  p-3">
          <h4>ahmed essam</h4>
          <h6 style={{ color: "orange" }}>Lorem ipsum dolor sit amet.</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi
            totam distinctio architecto iure dolor hic officia velit ad
            deserunt, officiis eius quisquam, harum est tempora sit excepturi
            porro iusto?
          </p>
          <p>
            <IoStar style={{ color: "orange" }} />
            <IoStar style={{ color: "orange" }} />
            <IoStar style={{ color: "orange" }} />
            <IoStar />
            <IoStar />
          </p>
        </section>
      </main>
    </main>
  );
}
