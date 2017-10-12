$(document).foundation();

var weatherApp = {};

function getCity() {
  let city = document.getElementById("selectCity").value;
  weatherApp.city = city;
}

function checkWeather() {
  getCity();
  makeUrl();
  showWeather();
}

function makeUrl() {
  weatherApp.url = 'http://api.openweathermap.org/data/2.5/weather?q=' + weatherApp.city + '&appid=96670060bacffc5ee2480f36377b25a3&units=metric';
}

function callApi() {
  $.ajax({
    type: "GET",               
    url: weatherApp.url,             
    dataType: "json",
    error: function (response) {           
      alert('Error: Try again');
    },
    success: function (response) {
      weatherApp.response = response;
    }
  });
}

function showWeather() {
  callApi();
  setTimeout(function(){
  	document.getElementById("weatherInfo").innerHTML = weatherApp.response.main.temp;
  }, 200);
}

document.getElementById("sendCity").addEventListener("click", checkWeather);

