/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { menuList } from "../menuList";

export default function Backpack() {
  const [menu, setMenu] = useState(menuList);

  useEffect(() => {
    const backpackMenu = menu.filter(({ category }) => {
      return category === "Backpack";
    });
    setMenu(() => {
      return backpackMenu;
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
                {title}
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
