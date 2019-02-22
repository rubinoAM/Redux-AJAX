import React, {Component} from 'react';
//Weather needs to know about Redux to get updated state from the search bar, which is a peer
import { connect } from 'react-redux';

class Weather extends Component{
    constructor(){
        super()
    }

    render(){
        console.log(this.props.weatherData);
        return(
            <h1>WEATHER</h1>
        )
    }
}

function mapStateToProps(state){
    return{
        weatherData:state.weather,
    }
}

export default connect(mapStateToProps)(Weather);