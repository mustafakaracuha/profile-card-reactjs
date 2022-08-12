import React from "react";
import edit from "../assets/img/edit.png";
import smile from "../assets/img/smile.png";
import more from "../assets/img/more.png";


export default function Buttons() {

  return (
    <>
      <button>
        <img width={25} src={smile} alt=""/>
        <p> Set a status</p>
      </button>
      <button>
        <img width={25} src={edit} alt=""/>
        <p>Edit profile</p>
      </button>
      <button >
        <img width={25} src={more} alt=""/>
        <p>More</p>
      </button>
      
    </>
  );
}
