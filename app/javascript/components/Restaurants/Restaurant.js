import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px groove #efefef;
    background: #fff;
    text-align: center;
`
const RestaurantLogo = styled.div`
    width: 50px;
    text-align: center;
    // margin-left: auto;
    // margin-right: auto;
    img {
        height: 150px;  //else change to 50 both height width 
        width: 150px;
        border: 1px solid #efefef;
        border-radius: 100%;
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
        <LinkWrapper><Link to ={'/restaurants/${props.attributes.slug}'}>View Restaurant</Link></LinkWrapper>
        </Card>
    )
}

export default Restaurant
    