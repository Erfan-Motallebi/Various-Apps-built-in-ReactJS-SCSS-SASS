import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";

export default function SingleQuestion({ question, answer }) {
  const [hide, setHide] = useState(true);

  return (
    <section>
      <article>
        <div>
          <h2>
            <p>{question}</p>
            <div className="btn">
              <button onClick={() => setHide(!hide)}>
                {hide ? <BsPlusCircle /> : <FiMinusCircle />}
              </button>
            </div>
          </h2>
        </div>
        {hide || <p>{answer}</p>}
      </article>
    </section>
  );
}
