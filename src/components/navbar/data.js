import React from "react";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
const links = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },
  {
    id: 2,
    url: "/contact",
    label: "Contact",
  },
  {
    id: 3,
    url: "/about",
    label: "About",
  },
  {
    id: 4,
    url: "/products",
    label: "Products",
  },
  {
    id: 5,
    url: "/profile",
    label: "profile",
  },
];

const social = [
  {
    id: 1,
    url: "http://www.facebook.com",
    icon: <FaFacebook className="fb" />,
  },
  {
    id: 2,
    url: "http://www.instagram.com",
    icon: <FaInstagram className="ig" />,
  },
  {
    id: 3,
    url: "http://www.twitter.com",
    icon: <FaTwitterSquare className="tw" />,
  },
];

export { links, social };
