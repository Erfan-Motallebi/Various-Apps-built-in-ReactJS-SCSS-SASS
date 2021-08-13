import React, { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

function SingleColor({ rgb, weight, hexColor }) {
  const [copyState, setCopyState] = useState(false);
  const [rgbState, setRgbState] = useState(true);
  const hashHexColor = `#${hexColor}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCopyState(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [copyState]);

  return (
    <article
      onMouseOver={() => setRgbState(false)}
      onMouseOut={() => setRgbState(true)}
    >
      <div
        className="rgb-color"
        style={{ background: `rgb(${rgb.join(",")})` }}
      >
        <div className="weight-color">{weight}%</div>
        <IoCopyOutline
          className={`icon ${copyState ? "hidden" : "shown"}`}
          onClick={() => {
            navigator.clipboard.writeText(hashHexColor);
            setCopyState(true);
          }}
        />
        <h1 className={`copy ${!copyState ? "hidden" : "shown"}`}>
          <span>Copied</span>
          <span>!</span>
        </h1>
        <h1 className={`rgb ${rgbState ? "hidden" : "shown"}`}>
          {hashHexColor}
        </h1>
      </div>
    </article>
  );
}

export default SingleColor;
