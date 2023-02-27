import { useState } from "react";
import "./style.scss";
import { BsSearch } from 'react-icons/bs';

export function Weather() {
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState({
    city: "Waiting",
    weather: "--",
    time: "Waiting",
    icon: "",
  });

  function searchLocation(event) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=b3972d7c329b490c9c1175956222706&q=${location}}`
      )
        .then((response) => response.json())
        .then((data) => {
          setTemp({
            city: data.location.name,
            weather: data.current.temp_c.toFixed(0),
            time: data.current.condition.text,
            icon: data.current.icon,
          });
        });
  }

  const handleKeyDown = () => {
  if(event.key === "Enter"){
    searchLocation(event)
  }
}

  return (
    <div>
      <h1>Weather React app by Leonardo Klein</h1>
    <div className="Weather">
      <div className="searchBar">
      <input
        type="text"
        placeholder="Type your location..."
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => searchLocation() }><BsSearch /></button>
      </div>
      <h2>{temp.city}</h2>
      <h3>{temp.weather}°c</h3>
      <p>{temp.time}</p>
    </div>
    </div>
  );
}
