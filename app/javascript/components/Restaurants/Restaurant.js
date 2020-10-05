import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
const Restaurant = (props) => {
    return (
        <div className="card">
        <div className="restaurant-logo">
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
        </div>
        <div className="restaurant-name">{props.attributes.name}</div>
        <div className="restaurant-score">{props.attributes.avg_score}</div>
        <div className="restaurant-link">
        <Link to ={'/restaurants/${props.attributes.slug}'}>View Restaurant</Link>
        </div>
        </div>
    )
}

export default Restaurant
    