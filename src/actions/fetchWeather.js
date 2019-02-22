import axios from 'axios';
import APIKEY from '../config';

const apiKey = APIKEY;
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${apiKey}&zip=`;

function fetchWeather(zip){
    console.log(zip);
    return{
        type:'GET_WEATHER',
    }
}

export default fetchWeather;