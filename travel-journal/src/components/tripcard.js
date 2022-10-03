import React from "react"

export default function TripCard(props){
    let image = props.trip.imageURL
    console.log(image)
    return <div className="trip-card"><h1 className="trip-title">{props.trip.title}</h1>
    <img className="trip-image" src={props.trip.imageURL} alt={props.trip.title}></img>

    <div className="location">
    <h2 className="trip-location">{props.trip.location}</h2><a href={props.trip.googleMapsUrl}className="location-link">View on Google Maps</a></div>

    <span className="trip-date">{props.trip.visitDate}</span>
    <p className="trip-description">{props.trip.description}</p>
    </div>
}