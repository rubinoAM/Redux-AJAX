import React, {Component} from 'react';
/*  SearchBar doesn't need state, but it needs the dispatcher
    because it needs to fire a function the dispatcher will send to update
    the weather reducer when the user searches */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/fetchWeather';

class SearchBar extends Component{
    constructor(){
        super()
    }

    handleWeather = (e)=>{
        e.preventDefault();
        const zip = document.getElementById('weather-input').value;
        this.props.fetchWeather(zip);
    }

    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                </ul>
                <form onSubmit={this.handleWeather} className="navbar-form navbar-left" action="/action_page.php">
                    <div className="form-group">
                    <input id="weather-input" type="text" className="form-control" placeholder="Search for weather" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <form onSubmit={this.handleStocks} className="navbar-form navbar-left" action="/action_page.php">
                    <div className="form-group">
                    <input id="stock-input" type="text" className="form-control" placeholder="Search for stock" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                </div>
            </nav>
        )
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        fetchWeather: fetchWeather,
    }, dispatcher);
}

export default connect(null,mapDispatchToProps)(SearchBar);