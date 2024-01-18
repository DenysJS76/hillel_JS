// Домашка № 13 Створення віджета


async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const cityNameElement = document.getElementById("cityName");
    const weatherIconElement = document.getElementById("weatherIcon");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const humidityElement = document.getElementById("humidity");
    const windSpeedElement = document.getElementById("windSpeed");
  
    const apiKey = "API_KEy"; // API_KEY в OpenWeatherMap API
  
    try {
      const coordinates = await getCoordinates(cityInput.value, apiKey);
      const weatherData = await getWeatherData(coordinates.latitude, coordinates.longitude, apiKey);
  
      displayWeatherInfo(weatherData, cityNameElement, weatherIconElement, temperatureElement, descriptionElement, humidityElement, windSpeedElement);
    } catch (error) {
      console.error("Error:", error);
      cityNameElement.textContent = "City not found";
      clearWeatherInfo(weatherIconElement, temperatureElement, descriptionElement, humidityElement, windSpeedElement);
    }
  }
  
  async function getCoordinates(city, apiKey) {
    const geocodingApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    const response = await fetch(geocodingApiUrl);
    const data = await response.json();
  
    if (data.length === 0) {
      throw new Error("City not found");
    }
  
    return {
      latitude: data[0].lat,
      longitude: data[0].lon
    };
  }
  
  async function getWeatherData(latitude, longitude, apiKey) {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const response = await fetch(weatherApiUrl);
    const data = await response.json();
  
    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      weatherIcon: data.weather[0].icon,
      cityName: data.name
    };
  }
  
  function displayWeatherInfo(weatherData, cityNameElement, weatherIconElement, temperatureElement, descriptionElement, humidityElement, windSpeedElement) {
    cityNameElement.textContent = weatherData.cityName;
    weatherIconElement.src = `https://openweathermap.org/img/wn/${weatherData.weatherIcon}.png`;
    temperatureElement.textContent = `Temperature: ${weatherData.temperature}°C`;
    descriptionElement.textContent = `Description: ${weatherData.description}`;
    humidityElement.textContent = `Humidity: ${weatherData.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${weatherData.windSpeed} m/s`;
  }
  
  function clearWeatherInfo(weatherIconElement, temperatureElement, descriptionElement, humidityElement, windSpeedElement) {
    weatherIconElement.src = "";
    temperatureElement.textContent = "";
    descriptionElement.textContent = "";
    humidityElement.textContent = "";
    windSpeedElement.textContent = "";
  }
  
