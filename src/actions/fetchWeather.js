import axios from 'axios';

const APIKEY = '482c145ce8edf1d69ea5168f9d06460c';
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${APIKEY}&zip=`;

function fetchWeather(zip){
    console.log(zip);
    return{
        type:'GET_WEATHER',
    }
}

export default fetchWeather;