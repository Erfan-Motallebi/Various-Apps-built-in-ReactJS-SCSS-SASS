/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaQuoteRight } from "react-icons/fa";
// importing external files
import "../../styles/css/dist/reviewSlider.min.css";
import data from "./peopleData";
export default function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <main>
      <h1>/Reviews</h1>
      <article className="container">
        {people.map(({ id, image, title, quote, name }, personIndex) => {
          let pos = "nextSlide";
          if (personIndex === index) {
            pos = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            pos = "lastSlide";
          }
          return (
            <section key={id} className={pos}>
              <div className="img-box">
                <img src={image} alt={name} />
              </div>
              <div className="head-title">
                <span>{name}</span>

                <br />
                <span>{title}</span>
              </div>
              <div className="quote-text">
                <p>{quote}</p>
              </div>
              <div className="quote-icon">
                <FaQuoteRight />
              </div>
            </section>
          );
        })}
        <GrPrevious className="prev" onClick={() => setIndex(index - 1)} />
        <GrNext className="next" onClick={() => setIndex(index + 1)} />
      </article>
    </main>
  );
}
