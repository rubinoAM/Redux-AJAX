import axios from 'axios';
import APIKEY from '../config';

const apiKey = APIKEY;
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${apiKey}&zip=`;

function fetchWeather(zip){
    //console.log(zip);
    const data = axios.get(weatherUrl+zip);
    //We need reduxPromise in the main index because a .then() will never run here in this function

    return{
        type:'GET_WEATHER',
        payload:data,
    }
}

export default fetchWeather;