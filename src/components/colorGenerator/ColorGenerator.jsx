/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

import "../../styles/css/dist/colorGenerator.min.css";

function ColorGenerator() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const generatedColor = new Values(color).all();
      setList(generatedColor);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
    setColor("");
  };
  useEffect(() => {
    setList(new Values("#f15025").all());
  }, []);

  return (
    <Fragment>
      <section className="container">
        <h1>Color Generator</h1>
        <form onSubmit={submitHandler} className="form-control">
          <input
            type="text"
            name="color"
            id="color"
            onChange={(e) => setColor(e.currentTarget.value)}
            className={`${error ? "error" : null}`}
            placeholder="#f15025"
            value={color}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>
      <section className="color-container">
        {list.map((color, index) => {
          return <SingleColor {...color} key={index} hexColor={color.hex} />;
        })}
      </section>
    </Fragment>
  );
}

export default ColorGenerator;
