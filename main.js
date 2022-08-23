const searchBar = document.getElementById("citySearch");
const searchButton = document.getElementById("newCity");

const city = document.getElementById("city");
const invalidSearch = document.getElementById("invalidSearch");
const temp = document.getElementById("temp");
const feels_like = document.getElementById("feels_like");
const max_temp = document.getElementById("max_temp");
const min_temp = document.getElementById("min_temp");
const humidity = document.getElementById("humidity");
const weahter_main = document.getElementById("weather_main");
const weather_description = document.getElementById("weather_description");

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
  setWeatherDOM(data, true);

  //   return data;
};

const setWeatherDOM = (data, bool) => {
  if (bool) {
    city.innerHTML = data.name;
    temp.innerText = (data.main.temp - 273).toFixed(2);
    feels_like.innerText = (data.main.feels_like - 273).toFixed(2);
    max_temp.innerText = (data.main.temp_max - 273).toFixed(2);
    min_temp.innerText = (data.main.temp_min - 273).toFixed(2);
    humidity.innerText = data.main.humidity;
    weahter_main.innerText = data.weather[0].main;
    weather_description.innerText = data.weather[0].description;
    invalidSearch.innerHTML = "";
  }else{
    invalidSearch.innerHTML = "Invalid City, try again!";
  }
};

searchButton.addEventListener("click", () => {
  getWeather(searchBar.value).catch( err => {
    console.log(err);
    setWeatherDOM(err, false)});
});
