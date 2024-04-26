import React from "react";

function Navbar() {
  return (
    <div
      className=" d-flex align-items-center justify-content-around"
      style={{ height: "50px", backgroundColor: "#032541" }}
    >
      <span classname="">
        <a classname=" link " href="#">
          OMDB
        </a>
        </span>
        <span classname="">
        <a classname="link" href="#">
          Movies </a>
        </span>
        <span classname="">
        <a classname="link" href="#"/>
          TV Shows
        </span>
        <span classname="">
        <a classname="link" href="#">
          Actors
        </a>
        </span>
        <span classname="">
        <a classname="link" href="#">
          More
        </a>
        </span>
    </div>
  );
}

export default Navbar;
