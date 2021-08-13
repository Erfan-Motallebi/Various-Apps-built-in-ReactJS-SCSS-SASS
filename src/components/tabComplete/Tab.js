import React, { useState, useEffect } from "react";
// external files
import "../../styles/css/dist/tab.min.css";
import Loading from "./Loading";
import SinglePerson from "./SinglePerson";

const url = "http://localhost:5002/developerInfo";

export default function Tab() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const fetchedData = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const result = await response.json();
      // console.log(response.headers.get("Content-Type"));
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const person = data[value];

  return (
    <main>
      <h1 className="head-title">User Experience</h1>
      <hr />
      <article className="container">
        <div className="navbar">
          {data.map((person, index) => {
            console.log(index);
            return (
              <section key={person.id}>
                <button
                  className={`btn ${index === value && "active-btn"}`}
                  onClick={() => setValue(index)}
                >
                  <h2>{person.nickname}</h2>
                </button>
              </section>
            );
          })}
        </div>
        <div className="info">
          <SinglePerson person={person} key={person.id} />
        </div>
      </article>
      <button className="more-info">More Info</button>
    </main>
  );
}
