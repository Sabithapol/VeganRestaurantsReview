import React,{useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Restaurant from './Restaurant'

const Restaurants = () => {
    const[restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        axios.get('/api/v1/restaurants.json')
        .then(resp=>{
            setRestaurants(resp.data.data)
        })
        .catch(resp => console.log(resp))
    }, [restaurants.length])

    const grid = restaurants.map(item => {
        return (
            <Restaurant 
            key={item.attributes.name}
            attributes={item.attributes}
            />
        )
    })

    return(
    <div className="home">
    <div className="header">
        <h1>Vegan Restaurant Reviews</h1>
        <div className="subheader">Honest, unbiased reviews for almost all the Vegan restaurants in Vancouver</div>
    </div>
    <div className="grid">
    {grid}
    </div>
    </div>
    )
}
export default Restaurants
