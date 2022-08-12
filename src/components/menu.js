import React from "react";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function menu(props) {
  return (
   <>
        <Menu
       anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
        id="basic-menu"
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
      >
        <MenuItem onClick={props.handleClose}>Login</MenuItem>
        <MenuItem onClick={props.handleClose}>Join</MenuItem>
        <MenuItem onClick={props.handleClose}>Change Language</MenuItem>
        <MenuItem onClick={props.handleClose}>Image & Video API</MenuItem>
        <MenuItem onClick={props.handleClose}>Apps & Plugins</MenuItem>
        <MenuItem onClick={props.handleClose}>FAQ</MenuItem>
        <MenuItem onClick={props.handleClose}>Partnerships</MenuItem>
        <MenuItem onClick={props.handleClose}>Inprint & Terms</MenuItem>
      </Menu>
   </>
  )
}
