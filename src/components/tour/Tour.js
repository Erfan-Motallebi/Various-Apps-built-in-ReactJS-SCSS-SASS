import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import TourShow from "./TourShow";

// external files
import "../../styles/css/dist/tourList.min.css";

const url = "http://localhost:5002/tour-info";

const Tour = () => {
  const [loading, setLoading] = useState(true);
  const [tourInfo, setTourInfo] = useState([]);

  const fetchedData = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const result = await response.json();
      setTourInfo(result);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchedData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  function refresh() {
    fetchedData();
    setTourInfo(tourInfo);
  }

  const removeItem = (id) => {
    const newList = tourInfo.filter((item) => item.id !== parseInt(id));
    setTourInfo(newList);
  };
  return (
    <main>
      <div className="tour">
        <h1>{`${tourInfo.length}` > 0 ? "Tours Guide" : "No Tours Left"}</h1>
        <hr />
      </div>
      {tourInfo.length === 0 ? (
        <button className="refresh" onClick={refresh}>
          Refresh
        </button>
      ) : (
        false
      )}
      <div className="inner-container">
        {tourInfo.map((tour) => (
          <TourShow key={tour.id} {...tour} remove={removeItem} />
        ))}
      </div>
    </main>
  );
};

export default Tour;
