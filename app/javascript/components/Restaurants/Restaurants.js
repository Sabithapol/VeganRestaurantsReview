import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Restaurants = () => {
    const[restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        axios.get('/api/v1/restaurants.json')
        .then(resp=>console.log(resp))
        .catch(resp => console.log(resp))
    }, [restaurants.length])
    return(
    <div>This is the Restaurants#index view for our app</div>
    )
}
export default Restaurants
