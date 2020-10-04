import React from 'react' 
import {Route, Switch} from 'react-router-dom'
import Restaurants from './Restaurants/Restaurants'
import Restaurant from './Restaurant/Restaurant'

const App = () => {
    return <Switch>
    <Route exact path="/" component={Restaurants}/>
    <Route exact path="/restaurants/:slug" component={Restaurants}/>
    </Switch>
}

export default App