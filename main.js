let temp = document.getElementById("temp");
let feels_like = document.getElementById("feels_like");
let max_temp = document.getElementById("max_temp");
let min_temp = document.getElementById("min_temp");
let humidity = document.getElementById("humidity");
let weahter_main = document.getElementById("weather_main");
let weather_description = document.getElementById("weather_description");

const getWeather = async (location) => {
  //making a fetch request to the api
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=193a4b744cef1eed7555e70cae9eb3bc`,
    { mode: "cors" }
  );
  //checking the status to see if the request was successful
  if (response.status !== 200) {
    throw new Error(response.status + " Could not fetch data!");
  }

  //fetching the data from our response
  const data = await response.json();

  //assigning values to our weather data
  console.log(data);
  setWeatherDOM(data);

//   return data;
};

const setWeatherDOM = (data) => {
  temp.innerText = data.main.temp - 273;
  feels_like.innerText = data.main.feels_like - 273;
  max_temp.innerText = data.main.temp_max - 273 ;
  min_temp.innerText = data.main.temp_min - 273;
  humidity.innerText = data.main.humidity;
  weahter_main.innerText = data.weather[0].main;
  weather_description.innerText = data.weather[0].description;
};
