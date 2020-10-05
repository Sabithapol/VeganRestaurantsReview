import React from 'react'

const Restaurant = (props) => {
    return (
        <div className="card">
        <div className="restaurant-logo">
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
        </div>
        <div className="restaurant-name">{props.attributes.name}</div>
        <div className="restaurant-score">{props.attributes.avg_score}</div>
        <div className="restaurant-link">
        <a href={'/restaurants/${props.attributes.slug}'}>View Restaurant</a>
        </div>
        </div>
    )
}

export default Restaurant
    