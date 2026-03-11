const API_KEY = "31bad495e39297bda3c2f73ae600d9ef";
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", getWeather);

function showLoader() {
  weatherResult.innerHTML = `
    <div class="loader-container">
      <div class="loader"></div>
      <p class="loader-text">Fetching weather...</p>
    </div>
  `;
}

async function getWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    showLoader();
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      weatherResult.innerHTML = `<p>City not found</p>`;
      return;
    }

    displayWeather(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

function displayWeather(data) {
  weatherResult.innerHTML = `
    <h2>${data.name}</h2>
    <p class="weather-info">🌡 Temperature: ${data.main.temp} °C</p>
    <p class="weather-info">☁ Weather: ${data.weather[0].main}</p>
    <p class="weather-info">💧 Humidity: ${data.main.humidity}%</p>
    <p class="weather-info">🌬 Wind: ${data.wind.speed} m/s</p>
    `;
}
