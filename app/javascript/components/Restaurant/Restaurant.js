import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header'

const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        const slug = props.match.params.slug
        const url = `/api/v1/restaurants/${slug}`

        axios.get(url)
        .then(resp => 
            { setRestaurant(resp.data)
            setLoaded(true)}
            console.log(resp))
        .catch(resp => console.log(resp))
    }, [])

    return (
        <div className= "wrapper">
        <div className="column">
        { loaded &&
        <Header 
        attributes={restaurant.data.attributes}
        reviews = {restaurant.included}
        />
        }
        <div className="reviews"></div>
        </div>
        <div className="column">
        <div className="review-form">[Review form goes here.]</div>
        </div>
        </div>
    )
}

export default Restaurant
