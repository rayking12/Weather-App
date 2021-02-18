import React from 'react'
import {Card} from 'react-bootstrap'
const Weather = ( {city, country, humidity, error, temp, description, icon}) => {
    return (
        <Card style={{width: "20rem", margin: "8rem 34rem "}}>
             <Card.Img variant="top"  src={`http://openweathermap.org/img/wn/${ icon }@2x.png`} class="card-img-top" alt="Loading..." />
             <Card.Body>
             <Card.Title> {description }</Card.Title>
            <h3> {temp} °F</h3>
             <p> {error}</p>

             <p> humidity : {humidity} </p> 
             </Card.Body>
             </Card>
    )
}

export default Weather
