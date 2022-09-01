import { useState } from "react";
import "./style.scss";

export function Weather() {
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState({
    city: "Waiting",
    weather: "--",
    time: "Waiting",
    icon: "",
  });

  function searchLocation(event) {
    if (event.key === "Enter") {
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
  }

  return (
    <div>
      <h1>Weather React app by Leonardo Klein</h1>
    <div className="Weather">
      <input
        type="text"
        placeholder="Type your location..."
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
      />
      <h2>{temp.city}</h2>
      <h3>{temp.weather}°c</h3>
      <p>{temp.time}</p>
    </div>
    </div>
  );
}
