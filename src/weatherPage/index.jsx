import { useState } from 'react'

export function Weather() {
const [location, setLocation] = useState("")
const [temp, setTemp] = useState({city: "", weather: "", time: ""})

function searchLocation(event){
  if(event.key === 'Enter'){
  fetch(`https://api.weatherapi.com/v1/current.json?key=b3972d7c329b490c9c1175956222706&q=${location}}`)
  .then(response => response.json())
  .then(data => {
    setTemp ({
      city: data.location.name,
      weather: data.current.temp_c.toFixed(0),
      time: data.current.condition.text
    })
  })
}
}

  return (
    <div className="Weather">
      <input 
      type="text" 
      placeholder='Type your location...' 
      onChange={(event) => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      />
      <h1>{temp.city}</h1>
      <h2>{temp.weather}°</h2>
      <p>{temp.time}</p>
    </div>
  )
}
