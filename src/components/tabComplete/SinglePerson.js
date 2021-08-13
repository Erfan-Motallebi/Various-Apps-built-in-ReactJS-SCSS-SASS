import React from "react";
import { BsArrowBarRight } from "react-icons/bs";

export default function SinglePerson({
  person: {
    profession,
    nickname,
    startDate,
    firstContent,
    secondContent,
    thirdContent,
  },
}) {
  return (
    <section>
      <h1>{profession}</h1>
      <h3>{nickname}</h3>
      <h4>{startDate}</h4>
      <p>
        <BsArrowBarRight className="arrow" />
        {firstContent}
      </p>

      <p>
        <BsArrowBarRight className="arrow" />
        {secondContent}
      </p>

      <p>
        <BsArrowBarRight className="arrow" />
        {thirdContent}
      </p>
    </section>
  );
}
