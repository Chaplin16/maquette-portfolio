import React from "react";
import Navbar from "./Navbar";
import "../../styles/components/navbar.scss"

export default function Container(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
