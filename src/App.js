import { useState } from 'react';
import getWeatherData from './api.js'
import './App.css'
function App() {
  const [city,setCity] = useState('');
  const [weather,setWeather] = useState({});
  const getData = async()=>{
    const data=await getWeatherData(city);
    setWeather(data);
    setCity('');
  }
  return (
    <div className="main">
      <div className="container">
       <h2>Weather App</h2>
       <div className='searchbar'>
        <input id='text' type='text' value={city} placeholder='Enter location' onChange={(e)=> setCity(e.target.value)}/>
        <button onClick={()=>getData()}><i className="fa fa-search"></i></button>
       </div>
       <div class='content'>
      {weather.main && 
       <div className='card'>
         <p className='location'>{weather.name}</p>
           <div className='weather'>
               <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
               <p className='temp'>{weather.main.temp}<span>&deg;C</span></p>
               <p>{weather.weather[0].description}</p>
          </div>
      </div>
      
       }
       </div>
      { !weather.main && <div className='nocontent'>
                     <h4>No Data found!!</h4>
                   </div>
      }
    </div>
    </div>
  );
}

export default App;

