import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    // border: 0.5px;
    background: #fff;
`
const RestaurantLogo = styled.div`
    width: 50px;
    img{
        height: 350px;
        width: 350px;
    }
`
const RestaurantName = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a{
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`
const Restaurant = (props) => {
    return (
        <Card>
        <RestaurantLogo>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
        </RestaurantLogo>
       <RestaurantName> {props.attributes.name}</RestaurantName>
        <div className="restaurant-score">{props.attributes.avg_score}</div>
        <div className="restaurant-link">
        <Link to ={'/restaurants/${props.attributes.slug}'}>View Restaurant</Link>
        </div>
        </Card>
    )
}

export default Restaurant
    