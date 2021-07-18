import React from "react";
import "./Team.css";
export default function Team() {
  return (
    <main className="p-5">
      <p style={{ color: "orange" }}>testimonials</p>
      <h3>our chefs</h3>
      <main className=" my-5 d-md-flex justify-content-around align-items-center">
        <section
          className="card-item d-flex flex-column align-items-center"
          style={{ height: 350 }}
        >
          <img
            style={{ width: "100%", height: "100%", padding: 0 }}
            src="https://images.unsplash.com/photo-1565608087341-404b25492fee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZWZzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="card-desc p-2 d-flex flex-column align-items-center justify-content-center">
            <p className="c-title m-0 p-0">Lorem ipsum dolor sit amet.</p>
            <p className="c-desc m-0 p-0">Lorem, ipsum.</p>
          </div>
        </section>
        <section
          className="card-item d-flex flex-column align-items-center"
          style={{ height: 350 }}
        >
          <img
            style={{ width: "100%", height: "100%", padding: 0 }}
            src="https://images.unsplash.com/photo-1622101805459-861e7cf6d4ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWZzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="card-desc p-2 d-flex flex-column align-items-center justify-content-center">
            <p className="c-title m-0 p-0">Lorem ipsum dolor sit amet.</p>
            <p className="c-desc m-0 p-0">Lorem, ipsum.</p>
          </div>
        </section>
        <section
          className="card-item d-flex flex-column align-items-center"
          style={{ height: 350 }}
        >
          <img
            style={{ width: "100%", height: "100%", padding: 0 }}
            src="https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="card-desc p-2 d-flex flex-column align-items-center justify-content-center">
            <p className="c-title m-0 p-0">Lorem ipsum dolor sit amet.</p>
            <p className="c-desc m-0 p-0">Lorem, ipsum.</p>
          </div>
        </section>
      </main>
    </main>
  );
}
