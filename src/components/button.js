import React, { useState } from "react";
import edit from "../assets/img/edit.png";
import smile from "../assets/img/smile.png";
import more from "../assets/img/more.png";
import Menu from "./menu";

export default function Buttons() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button>
        <img width={25} src={smile} alt="" />
        <p> Set a status</p>
      </button>
      <button>
        <img width={25} src={edit} alt="" />
        <p>Edit profile</p>
      </button>
      <button onClick={handleClick}>
        <img width={25} src={more} alt="" />
        <p>More</p>
      </button>
      <Menu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </>
  );
}
