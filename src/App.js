import { useState } from 'react'
import './App.css';
import Search from './components/Search'
import Weather from './components/Weather'
import { API_KEY } from './config'
import Loader from 'react-loader-spinner'

function App() {
  const [weather, setWeather] = useState([])
  const [loading, setLoading] = useState(false)

   async function fetchData(e) {
     setLoading(true)
     const city = e.target.elements.city.value
     const country = e.target.elements.country.value
     e.preventDefault()
     const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=d9c649b64f80f07bf8e3ef05ad98c0b2`)
     .then ((res) => res.json())
     .then (data => data)
     if(city && country ) {
       setWeather({
         data: apiData,
         city: apiData.city,
         country: apiData.sys.country,
         temp:Math.round(apiData.main.temp * 9/5 - 459.67),
         humidity: apiData.main.pressure,
         description: apiData.weather[0].description,
         error: '',
         icon: apiData.weather[0].icon,
        },
        setLoading(false)
       )}
         else {
          setWeather({
            data: '',
            city: "",
            country: "",
            temp:"",
            humidity: "",
            error: "Please Type a city and a Country",
            icon: ""
           },
           setLoading(false)
          )}
          
   }
   
  return (
   <div className="App">
   < Search  getWeather = {fetchData} city={weather.city} country={weather.country}/>
   {console.log(weather.data)}
   {loading && !weather.data  ? <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" style={{ margin: "200px 0 0 0"}} /> : !weather.data ? ( <h2 style={{ margin: "200px 0 0 0"}}> Please Type in your city and country </h2>) :  <Weather  city={weather.city}
    country={weather.country}
     humidity={weather.humidity}
      error={weather.error}
       temp={weather.temp}
       icon= {weather.icon}
        description={weather.description}/> }
  
   </div>
  );
}

export default App;
