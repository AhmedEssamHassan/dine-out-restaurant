import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="container ">
      <main className="h-100 d-flex flex-column justify-content-between align-items-center">
        <section className="d-flex justify-content-around align-items-start  w-100 h-75">
          <div className="h-100 p-2">
            <h6>our location</h6>
            <p className="m-0" style={{ fontSize: 10 }}>
              cairo, nasir city <br />
              29-elhoria ST{" "}
            </p>
          </div>
          <div className="h-100 p-2">
            <h6>opening hours</h6>
            <p className="m-0" style={{ fontSize: 10 }}>
              7 days / week <br /> 9am to 1pm
            </p>
          </div>
          <div className="h-100 p-2">
            <h6>contact us</h6>
            <p className="m-0" style={{ fontSize: 10 }}>
              01116678685 <br /> dine@gmail,com
            </p>
            <div>
              <RiFacebookBoxFill
                className="mx-1"
                style={{ cursor: "pointer" }}
              />
              <RiInstagramFill className="mx-1" style={{ cursor: "pointer" }} />
              <RiYoutubeFill className="mx-1" style={{ cursor: "pointer" }} />
              <RiTwitterFill className="mx-1" style={{ cursor: "pointer" }} />
            </div>
          </div>
        </section>
        <div
          className=" w-100 h-25"
          style={{
            borderTop: "1px solid white",
            marginTop: "20px",
          }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <AiOutlineCopyright /> <p className="m-0">2020 by ahmed essam</p>
          </div>
        </div>
      </main>
    </footer>
  );
}
