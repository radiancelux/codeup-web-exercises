'use strict';

import { config } from './config.js';

// Set your OpenWeatherMap and Mapbox access tokens
const openWeatherMapApiKey = config.OPEN_WEATHER;
const mapboxAccessToken = config.MAP_TOKEN;

// Initialize the Mapbox map
mapboxgl.accessToken = mapboxAccessToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 29.4241], // San Antonio coordinates
    zoom: 10
});

// Function to fetch weather data and update the forecast
async function updateForecast(coordinates) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[1]}&lon=${coordinates[0]}&units=imperial&appid=${openWeatherMapApiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error("Error fetching weather data: ", error);
    }
}

// Function to display the weather forecast data
function displayForecast(data) {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = ''; // Clear existing forecast

    // Assume the API returns an array of forecasts in data.list
    data.list.forEach((forecast, index) => {
        if (index % 8 === 0) { // Only show data for approximately every 24 hours
            const date = new Date(forecast.dt * 1000).toLocaleDateString();
            const temp = forecast.main.temp;
            const description = forecast.weather[0].description;
            const icon = forecast.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

            // Create forecast card
            forecastDiv.innerHTML += `
    <div class="forecast-card bg-white shadow-lg rounded-lg p-4 mb-4">
        <h3 class="text-lg font-semibold">${date}</h3>
        <img src="${iconUrl}" alt="${description}" class="mx-auto">
        <p class="text-gray-700">${description}</p>
        <p class="text-gray-900 font-bold">Temp: ${temp}°F</p>
    </div>
`;
        }
    });
}

// Mapbox 'click' event to drop a pin and get weather
map.on('click', function(e) {
    const coordinates = [e.lngLat.lng, e.lngLat.lat];
    new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    updateForecast(coordinates);
});

// Function to geocode a location entered by the user and update the map and forecast
window.geocodeLocation = async function geocodeLocation(searchText) {
    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchText)}.json?access_token=${mapboxAccessToken}`;

    try {
        const response = await fetch(geocodingUrl);
        const data = await response.json();
        const coordinates = data.features[0].center;

        // Set the map's center to the searched location
        map.flyTo({ center: coordinates, zoom: 10 });

        // Update the marker's position
        // Remove previous marker if it exists
        if (window.currentMarker) {
            window.currentMarker.remove();
        }
        // Add new marker
        window.currentMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);

        // Update the weather forecast for the new location
        updateForecast(coordinates);
    } catch (error) {
        console.error("Error geocoding location: ", error);
    }
}

