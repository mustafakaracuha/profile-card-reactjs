import React from "react";
import Buttons from "./button";

export default function Card() {
  return (
    <>
      <div className="box">
        <div className="avatar"></div>
        <h1>Ildiko Gasper</h1>
        <p>UX Designer</p>
        <div className="actionBox">
          <Buttons />
        </div>
      </div>
    </>
  );
}
