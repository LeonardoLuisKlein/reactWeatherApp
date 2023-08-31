import { useState } from "react";
import "./style.scss";
import { BsSearch } from 'react-icons/bs';

export function Weather() {
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false)
  const [temp, setTemp] = useState({
    city: "Waiting",
    weather: "--",
    time: "Waiting",
    icon: "",
  });

  const searchLocation = async(event) => {

    setError(false)
    setTemp(null)

      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=apiKEY&q=${location}}`)
      const data = await response.json()
      if(response.status === 400) {
        setError(true)
        return
      }
      else{
        setError(false)
        setTemp({
          city: data.location.name,
          weather: data.current.temp_c.toFixed(0),
          time: data.current.condition.text,
          icon: data.current.icon,
        });
      }
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
      {error ? (
        <p className="centerText">Error, no matching location found.</p>
      ) : (
        <div className="centerWeather">
          {temp && (
            <>
              <h2>{temp.city}</h2>
              <h3>{temp.weather}°C</h3>
              <p className="centerText">{temp.time}</p>
            </>
          )}
        </div>
      )}
    </div>
    </div>
  );
}
