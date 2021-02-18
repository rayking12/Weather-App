import { useState } from 'react'

const Search = ( {getWeather} ) => {
    const [ city, setCity] = useState('')
    const [ country, setCountry] = useState('')

    let text = city.toUpperCase()
    let count = country.toUpperCase()
    return (
        <div className="">
            <nav className="navbar bg-dark navbar-expand-light ">
            <span style={{color: "white", margin: "0 0 0 40px "}} className="navbar-brand "> Weather</span>
        <form action="" onSubmit={getWeather} className=" d-flex"  >
          <input type="text" placeholder="Please enter a city" name="city" className="form-control me-2" onChange={(event) => setCity(event.target.value)}
              value={city}/>  
          <input type="text" placeholder="Please enter a country" name="country" className="form-control me-2" onChange={(event) => setCountry(event.target.value)}
              value={country}/>
          <button type="submit" className="btn btn-outline-success">  Weather </button>
        </form>
            <h2 style={{color: "white", margin:"0 50px 0 0"}} > {text} {count}</h2>
            </nav>
        </div>
    )
}

export default Search
