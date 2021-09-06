/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "../../styles/css/dist/navbar.min.css";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { links, social } from "./data";

// import SideBar from "./SideBar";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const listsContainerRef = useRef(null);
  const ulLinkRef = useRef(null);

  useEffect(() => {
    const linkRefHeight = ulLinkRef.current.getBoundingClientRect().height;
    if (toggle) {
      listsContainerRef.current.style.height = `${linkRefHeight}px`;
    } else {
      listsContainerRef.current.style.height = 0 + "px";
    }
  }, [toggle]);
  return (
    <div>
      <section className="nav-container">
        <h1 className="logo">
          <span>Navbar</span> Logo
        </h1>
        <div className="nav-toggle">
          <h1 className="logo-toggle">
            <span>Navbar</span> Project
          </h1>
          <div>
            <FaAngleDoubleLeft
              onClick={() => setToggle(!toggle)}
              className={`toggle-icon ${toggle ? "rotate" : ""}`}
            />
          </div>
        </div>
        <div
          className={`links-container ${toggle ? "links-show-container" : ""}`}
          ref={listsContainerRef}
        >
          <ul ref={ulLinkRef}>
            {links.map(({ id, url, label }) => {
              return (
                <li key={id}>
                  <a href={url}>
                    <span>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav-socials">
          <ul>
            {social.map(({ id, url, icon }) => {
              return (
                <li key={id}>
                  <a href={url}> {icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
