import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="link">
        <Link to="/">All</Link>
        <Link to="/shoes">Shoes</Link>
        <Link to="/backpack">Backpack</Link>
        <Link to="/Tshirt">T-Shirt</Link>
      </div>
    </>
  );
}
