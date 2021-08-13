import React from "react";
import { useState } from "react";
//  files imported
import "../../styles/css/dist/birthday.min.css";
import { birthdayData } from "../../components/birthday/brithdayData";
import List from "./List";

const Birthday = () => {
  const [birth, setBirth] = useState(birthdayData);

  return (
    <div className="container">
      <h1>
        <span>{birth.length}</span> birthdays today
      </h1>
      {birth.map((person) => {
        return <List person={person} key={person.id} />;
      })}
      <button className="btn" onClick={() => setBirth([])}>
        Clear All
      </button>
    </div>
  );
};

export default Birthday;
