/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { menuList } from "../menuList";

export default function Tshirts() {
  const [menu, setMenu] = useState(menuList);

  useEffect(() => {
    const tshirtMenu = menu.filter(({ category }) => {
      return category === "tshirt";
    });
    setMenu(() => {
      return tshirtMenu;
    });
  }, []);

  return (
    <article className="box-model">
      {menu.map(({ id, title, image, description, price }) => {
        return (
          <section key={id}>
            <div className="img-box">
              <img src={image} alt={title} />
            </div>

            <div className="title">
              <h3>
                <span>{title}</span>
                <span>${price}</span>
              </h3>
              <hr />
              <p>{description}</p>
            </div>
          </section>
        );
      })}
    </article>
  );
}
