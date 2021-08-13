import React from "react";
import { useState } from "react";
import "../../styles/css/dist/textGenerator.min.css";
import { data } from "./data";

function Generator() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setText(data.slice(0, +count));
  };

  return (
    <div className="container">
      <div>
        <h1>Lorem / Hipsum Text Generator</h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <label htmlFor="hipsum">Paragraph: </label>
          <input
            type="number"
            name="hipsum"
            id="hipsum"
            min="0"
            max="8"
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn" type="submit">
            GENERATE
          </button>
        </form>
      </div>
      <div className="text">
        {text.map((data, index) => {
          return (
            <div>
              <h1>
                <span>Words </span> <span>{data.match(/(\w+)/g).length}</span>
              </h1>
              <p key={index}>{data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Generator;
