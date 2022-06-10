const tempNumber=document.querySelector('.temp-number');
const commentWeather=document.querySelector('.comment');
const cardWeather=document.querySelector('.card-weather');

const getWeather = async ()=> {
const {currentConditions} = await fetch('https://weatherdbi.herokuapp.com/data/weather/zestaponi').then(_=>_.json());
tempNumber.innerText=currentConditions.temp.c;
commentWeather.innerText=currentConditions.comment;
cardWeather.style.backgroundImage="url('https://ssl.gstatic.com/onebox/weather/64/rain_light.png')";

}

getWeather();