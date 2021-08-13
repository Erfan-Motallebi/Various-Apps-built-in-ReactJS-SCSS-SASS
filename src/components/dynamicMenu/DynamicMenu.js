/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// file
import { menuList } from "./menuList";
import "../../styles/css/dist/dynamicMenu.min.css";
import Category from "./Category";

function Menu() {
  const [menu, setMenu] = useState(menuList);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const allCategories = menu.map((item) => {
      return item.category;
    });
    setCategory([...new Set(allCategories)]);
  }, []);

  const filteredItems = (categoryIn) => {
    if (categoryIn === "all") {
      setMenu(menuList);
      return;
    }
    const filteredMenu = menuList.filter((item) => {
      return item.category === categoryIn;
    });
    setMenu(filteredMenu);
  };

  return (
    <div className="container">
      <div className="head">
        <h3>Menu List</h3>
        <hr />
      </div>
      <div className="link">
        <button onClick={() => filteredItems("all")}>All</button>
        {category.map((item) => {
          return (
            <Category
              catItem={item}
              filteredItems={filteredItems}
              key={item.id}
            />
          );
        })}
      </div>
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
    </div>
  );
}

export default Menu;
