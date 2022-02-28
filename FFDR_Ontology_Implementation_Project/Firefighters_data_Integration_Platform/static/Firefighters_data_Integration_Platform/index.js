document.addEventListener("DOMContentLoaded", function () {
  WeatherCondition();
  Address();
});

function Address() {}

function WeatherCondition() {
  // Get main container
  WeatherConditionContainer = document.querySelector("#main_container");
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Portland&units=metric&appid=0fa663749dc11a9e6dcec438f2679b2d"
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      // hasPrecipitationValue = result.FloatField();
      hasRelativeHumidity = result["main"]["humidity"];
      hasTemperature = result["main"]["temp"];
      hasTimeMark = new Date(result["dt"] * 1000).toLocaleString();
      hasWindDirection = result["wind"]["deg"];
      hasWindSpeed = result["wind"]["speed"];

      console.log(hasRelativeHumidity);
      console.log(hasTemperature);
      console.log(hasTimeMark);
      console.log(hasWindDirection);
      console.log(hasWindSpeed);
    });
}
