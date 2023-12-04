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
    center: [-98.4936, 29.4241], // San Antonio coordinates as an example
    zoom: 10
});

// Function to update the weather forecast
function updateForecast(coordinates) {
    // Use Fetch API to get the weather data from OpenWeatherMap
    // Then update the forecast section with that data
}

// Mapbox 'click' event to drop a pin and get weather
map.on('click', function(e) {
    const coordinates = [e.lngLat.lng, e.lngLat.lat];
    new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    updateForecast(coordinates);
});

// More code for Mapbox geocoder and updating weather forecast
