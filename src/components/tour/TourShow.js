import React, { useState } from "react";

const TourShow = ({ id, image, name, info, price, remove }) => {
  const [contentState, setContentState] = useState({
    content: "Read More",
    condition: false,
  });

  const readMore = (readId) => {
    if (!contentState.condition) {
      setContentState(() => {
        return {
          content: "Show Less",
          condition: true,
        };
      });
    } else {
      setContentState(() => {
        return {
          content: "Read More",
          condition: false,
        };
      });
    }
  };

  return (
    <React.Fragment>
      <article>
        <section>
          <img src={image} alt={id} />
          <div>
            <p className="title">{name}</p>
            <h4> $ {price} </h4>
          </div>
          <p className="info">
            {contentState.condition ? info : `${info.substring(0, 231)}...`}
            <button
              type="button"
              onClick={() => readMore(id)}
              className="readMore"
            >
              {contentState.content}
            </button>
          </p>
          <button className="btn" onClick={() => remove(id)}>
            Not Interested
          </button>
        </section>
      </article>
    </React.Fragment>
  );
};

export default TourShow;
