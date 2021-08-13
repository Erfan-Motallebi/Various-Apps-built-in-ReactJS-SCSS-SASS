import React from "react";

const List = ({ person: { date, image, name } }) => {
  console.log(date, image, name);
  return (
    <section>
      <div>
        <img src={image} alt={name} />
      </div>
      <article>
        <h4>
          <strong>{name}</strong>
        </h4>
        <span>{date}</span>
      </article>
    </section>
  );
};

export default List;
