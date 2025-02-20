// import React, { useState, useEffect } from 'react';
// import Styles from './Weather.module.css'

// function WeatherApi() {
//   const [weather, setWeather] = useState(null);
//   const [city, setCity] = useState('Nambiyur');

//   useEffect(() => {
//     fetchData()
// },[]);

//   const fetchData = async () => {
//        let apiKey=`cc81dab5affed9da1af46c6eaa3440fc`
//        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//       try {
//       let response = await fetch(apiUrl);
//       let data = await response.json();
//       setWeather(data);
//       console.log(data);
//       console.log(apiUrl);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }

//   let  changeCity = (event) => {
//     setCity(event.target.value);
//   };
//   return (<>
//     <div className={Styles.maincontainer}>
//     <img src="./weather.png" alt=""/>
//       <div className={Styles.topcontainer}>
//       {weather && (
//         <div>
//       <input type="text" value={city} onChange={changeCity}  placeholder="Enter city name"/>
//           <h1>Weather in : {weather.name.toUpperCase()}</h1>
//           <p>Temperature : {weather.main.temp} °C</p>
//           <h3 style={{color:'white',fontSize:"25px"}}>{weather.weather[0].description.toUpperCase()}</h3>
//           <h4 style={{color:'white',fontSize:"20px"}}>Country : {weather.sys.country}</h4>
//          <h1 style={{display:"flex",justifyContent:"center"}}>Weather App</h1>
//          <button onClick={fetchData}>Get Weather</button> 
//          <h1>Title : {weather.title}</h1>
//          <a href="{hdurl}">{weather.url} </a>
//          <br />
//          <img src={weather.url} alt="" style={{width:"500px"}}/>
//         </div>
//         )}
//         </div>
//     </div>
//     </>
//   )}}
//   export default WeatherApi

import React, { useState, useEffect } from 'react';
import Styles from "./Weather.module.css";

function WeatherApi() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [city]);

  const fetchData = async () => {
    let apiKey = ``;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      let response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      setWeather(data);
      setError(null);
      console.log(data);
      console.log(apiUrl);
    } catch (error) {
      // setError('Error fetching weather data.');
    }
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <div className={Styles.maincontainer}>
        <img src="./weather.png" alt="Weather Icon" />
        <div className={Styles.topcontainer}>
          <input type="text" value={city} onChange={changeCity} placeholder="Enter city name" />
          <button onSubmit={fetchData}>Get Weather</button>
          
          {weather && (
            <div className={Styles.result}>
              <h1>Weather in : {weather.name.toUpperCase()}</h1><br />
              <p>Temperature : {weather.main.temp} °C</p><br />
              <h3 style={{ color: 'white', fontSize: "25px" }}>DESCRIPTION : {weather.weather[0].description.toUpperCase()}</h3><br />
              <h4 style={{ color: 'white', fontSize: "20px" }}>COUNTRY : {weather.sys.country}</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WeatherApi;



// import React from 'react'

// //? Food Api

// const WeatherApi = () => {
//   let data=fetch (`http://world.openfoodfacts.org/api/v0/product/737628064502.json`)
//   console.log(data);
//   data.then((m)=>{
//     console.log(m);
//     let finalData=m.json()
//     console.log(finalData);
//     finalData.then((m)=>{
//       console.log(m);
//     })
//   })
//   return (
//     <div>
//       <h1>{data._id}</h1>
//     </div>
//   )
// }

// export default WeatherApi


//? Poke Api
//  import React from 'react'
 
//  const WeatherApi = () => {
//    return (
//      <div>
       
//      </div>
//    )
//  }
 
//  export default WeatherApi
 