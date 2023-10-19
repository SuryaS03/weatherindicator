import React, { useState } from 'react'
import './weatherapp.css'  //importing css file

import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import drizzle_icon from "../assets/drizzle.png"
import cloud_icon from "../assets/cloud.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"
import humidity_icon from "../assets/humidity.png"

// --------------------------------------------------------------------

export const Weatherapp = () => {
  let api_key="5f54ff4403cb8444a168311f735ae76f"
const [wicon,setwicon]=useState(cloud_icon)
const search =async ()=>{
  const element=document.getElementsByClassName("cityInput")
if(element[0].value===""){
  return 0;
}
// --------------------------------------------------------------------


let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
let response=await fetch(url);
let data=await response.json();


// --------------------------------------------------------------------

const humidity=document.getElementsByClassName("humidity-percentage") 
const wind=document.getElementsByClassName("wind-speed") 
const temperature=document.getElementsByClassName("weather-temp") 
const location=document.getElementsByClassName("weather-location") 

// --------------------------------------------------------------------


humidity[0].innerHTML=data.main.humidity+" %";
wind[0].innerHTML=data.wind.speed+" km/hr";
temperature[0].innerHTML=data.main.temp+" °C";
location[0].innerHTML=data.name;

// --------------------------------------------------------------------

if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n")
{
setwicon(clear_icon);
}
else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
  setwicon(cloud_icon); 
}
else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
  setwicon(drizzle_icon); 
}
else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
  setwicon(drizzle_icon); 
}
else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
  setwicon(rain_icon); 
}
else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
  setwicon(rain_icon); 
}
else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
  setwicon(snow_icon); 
}
else{
  setwicon(clear_icon)
}

}
 

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Enter City Correctly'/>
         <div className="search-icon" onClick={()=>{search()}}><img src={search_icon} alt="" /></div>
        
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div> 

{/* ------------------------------------------- */}


<div className="weather-temp">--°C</div>
  <div className="weather-location">Surya</div>
<div className="data-container">
  <div className="element">
    <img src={humidity_icon} alt="" className="icon" />
    <div className="data">
      <div className="humidity-percentage">--%</div>
      <div className="text">Humidity</div>
    </div>
  </div>

{/* ------------------------------------------- */}
<div className="element">
    <img src={wind_icon} alt="" className="icon" />
    <div className="data">
      <div className="wind-speed">--km/hr</div>
      <div className="text">wind speed</div>
    </div>
  </div>
</div>
    </div>
  )
}
export default Weatherapp;