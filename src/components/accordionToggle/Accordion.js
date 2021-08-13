import React, { useState } from "react";
//  External Files imported
import "../../styles/css/dist/accordion.min.css";
import { questions } from "./questions";
import SingleQuestion from "./SingleQuestion";

const Accordion = () => {
  // eslint-disable-next-line no-unused-vars
  const [ques, setQues] = useState(questions);
  return (
    <main>
      {ques.map((singleQ) => {
        return <SingleQuestion key={singleQ.id} {...singleQ} />;
      })}
    </main>
  );
};

export default Accordion;
