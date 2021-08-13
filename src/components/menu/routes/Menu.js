/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// file
import { menuList } from "../menuList";

function Menu() {
  const [menu, setMenu] = useState(menuList);
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

export default Menu;
