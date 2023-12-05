'use strict';

import { config } from './config.js';

// API keys
const openWeatherMapApiKey = config.OPEN_WEATHER;
const mapboxAccessToken = config.MAP_TOKEN;
mapboxgl.accessToken = mapboxAccessToken;

// Global variables
let currentMarker = null;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 29.4241],
    zoom: 10
});


// Load the map and set event listeners
map.on('load', () => {
    geocodeLocation('San Antonio'); // Initial location
    setMapEventListeners(); // Set map-specific event listeners
    setDOMEventListeners(); // Set DOM event listeners
});

function setMapEventListeners() {
    map.on('click', (e) => {
        const coordinates = [e.lngLat.lng, e.lngLat.lat];
        updateLocation(coordinates, 'Selected Location');
    });
}

function setDOMEventListeners() {
    document.getElementById('searchInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            geocodeLocation(e.target.value);
        }
    });

    const styleButtons = document.querySelectorAll('.map-style-button');
    styleButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeMapStyle(button.dataset.style);
        });
    });
}

// Fetch and display the weather forecast for the selected location
async function geocodeLocation(searchText) {
    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchText)}.json?access_token=${mapboxAccessToken}`;
    try {
        const response = await fetch(geocodingUrl);
        const data = await response.json();
        const coordinates = data.features[0].center;
        updateLocation(coordinates, searchText);
    } catch (error) {
        console.error("Error geocoding location: ", error);
    }
}

// Change the marker location and update the forecast
function updateLocation(coordinates, locationName) {
    if (currentMarker) {
        currentMarker.remove();
    }
    currentMarker = new mapboxgl.Marker({ draggable: true })
        .setLngLat(coordinates)
        .addTo(map)
        .on('dragend', () => {
            updateForecast(currentMarker.getLngLat().toArray());
        });

    map.flyTo({ center: coordinates, zoom: 10 });
    updateForecast(coordinates);
    updateSearchHeader(locationName);
}

// Function to fetch weather data and update the forecast
async function updateForecast(coordinates) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[1]}&lon=${coordinates[0]}&units=imperial&appid=${openWeatherMapApiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (!data || !data.list || data.list.length === 0) {
            alert('No forecast data found for the selected location.');
            return;
        }
        displayForecast(data);
    } catch (error) {
        console.error("Error fetching weather data: ", error);
    }
}

// Function to display the weather forecast data
function displayForecast(data) {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = ''; // Clear existing forecast

    // Current time for comparison
    const currentTime = new Date();

    data.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
            // Get forecast time and calculate difference from current time
            const forecastTime = new Date(forecast.dt * 1000);
            const diffTime = Math.abs(forecastTime - currentTime);
            const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

            // Round difference to 24, 48, 72 hours or switch to days
            let dateLabel;
            if (diffHours <= 24) {
                dateLabel = "Current";
            } else if (diffHours <= 48) {
                dateLabel = "Next 24 hours";
            } else if (diffHours <= 72) {
                dateLabel = "Next 48 hours";
            }else if (diffHours <= 96) {
                    dateLabel = "Next 72 hours";
            } else {
                dateLabel = `${Math.ceil(diffHours / 24 - 1)} days`;
            }

            const temp = forecast.main.temp;
            const description = forecast.weather[0].description;
            const icon = forecast.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

            // Create forecast card
            forecastDiv.innerHTML += `
                <div class="${dateLabel} forecast-card bg-white shadow-lg rounded-lg p-4 mb-4">
                    <h3 class="text-lg font-semibold">${dateLabel}</h3>
                    <img src="${iconUrl}" alt="${description}" class="mx-auto">
                    <p class="text-gray-700">${description}</p>
                    <p class="text-gray-900 font-bold">Temp: ${temp}°F</p>
                </div>
            `;
        }
    });
}

// Function to geocode a location entered by the user and update the map and forecast
window.geocodeLocation = async function geocodeLocation(searchText) {
    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchText)}.json?access_token=${mapboxAccessToken}`;

    try {
        const response = await fetch(geocodingUrl);
        const data = await response.json();
        const coordinates = data.features[0].center;

        // Set the map's center to the searched location
        map.flyTo({ center: coordinates, zoom: 10 });

        // Remove previous marker if it exists
        if (window.currentMarker) {
            window.currentMarker.remove();
        }
        // Add new marker
        window.currentMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);

        // Update the weather forecast for the new location
        updateForecast(coordinates);

        // Update header with the current search query
        updateSearchHeader(searchText);

    } catch (error) {
        console.error("Error geocoding location: ", error);
    }
}


function updateSearchHeader(searchText) {
    const searchHeader = document.getElementById('searchHeader');
    searchHeader.textContent = `5 Day Forecast for ${searchText}`;
}

function changeMapStyle(style) {
    map.setStyle(`mapbox://styles/mapbox/${style}`);
    updateButtonStyles(style);
}

let currentStyle = 'streets-v11';  // Default map style

// Function to update the map style buttons
function updateButtonStyles(currentStyle) {
    const buttons = document.querySelectorAll('.map-style-button');
    buttons.forEach(button => {
        button.classList.toggle('bg-blue-700', button.dataset.style === currentStyle);
        button.classList.toggle('bg-blue-500', button.dataset.style !== currentStyle);
    });
}

window.zoomIn = function zoomIn() {
    map.zoomTo(map.getZoom() + 1);
}

window.zoomOut = function zoomOut() {
    map.zoomTo(map.getZoom() - 1);
}
