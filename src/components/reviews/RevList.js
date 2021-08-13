/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { people } from "./people";
import "../../styles/css/dist/reviews.min.css";

const RevList = () => {
  const [identity, setIdentity] = useState(0);
  const { id, image, badge, description, name } = people[identity];

  // Index Checker
  const indexChecker = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // Next button
  const nextRev = () => {
    setIdentity((identity) => {
      let newIdentity = identity + 1;
      return indexChecker(newIdentity);
    });
  };

  // Prev button
  const previousRev = () => {
    setIdentity((identity) => {
      let newIdentity = identity - 1;
      return indexChecker(newIdentity);
    });
  };

  const randomPerson = (randomId) => {
    console.log(randomId);
    const randomRev = Math.floor(Math.random() + identity);
    setIdentity(() => {
      return indexChecker(randomRev - 1);
    });
  };

  return (
    <main>
      <article>
        <section key={id}>
          <div className="img-box">
            <img src={image} alt={name} />
            <FaQuoteLeft className="quote" />
          </div>
          <span className="name">{name}</span> <br />
          <span className="title">{badge}</span>
          <div>
            <p className="description"> {description}</p>
          </div>
          <div>
            <FaChevronLeft className="before" onClick={previousRev} />
            <div style={{ display: "inline-block", padding: "0 10px" }}></div>
            <FaChevronRight className="next" onClick={nextRev} />
            <button className="btn" onClick={() => randomPerson(id)}>
              Random
            </button>
          </div>
        </section>
      </article>
    </main>
  );
};

export default RevList;
