'use strict';

import { config } from './config.js';

mapboxgl.accessToken = config.MAP_TOKEN;

// Coordinates for San Antonio and Black's BBQ
const sanAntonioCoords = [-98.4936, 29.4241];
const blacksBBQCoords = [-98.1245, 29.7030];

// Calculate the midpoint
const midpoint = [
    (sanAntonioCoords[0] + blacksBBQCoords[0]) / 2,
    (sanAntonioCoords[1] + blacksBBQCoords[1]) / 2
];

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: midpoint, // Set map center to midpoint
    zoom: 11
});

const locations = [
    {
        name: "The Alamo",
        coordinates: [-98.4861, 29.4260],
        description: "Historic Spanish mission and fortress compound.",
        image: "/images/alamo.png"
    },
    {
        name: "River Walk",
        coordinates: [-98.4916, 29.4241],
        description: "Famous network of walkways along the banks of the San Antonio River.",
        image: "/images/riverwalk.png"
    },
    {
        name: "Mi Tierra Café y Panadería",
        coordinates: [-98.4951, 29.4248],
        description: "Iconic Mexican restaurant known for its festive decor.",
        image: "/images/mitierra.png"
    },
    {
        name: "Morgan's Wonderland",
        coordinates: [-98.3856, 29.5180],
        description: "An inclusive amusement park designed for individuals with special needs.",
        image: "/images/morganswonderland.png"
    },
    {
        name: "Black's BBQ - New Braunfels",
        coordinates: [-98.1245, 29.7030],
        description: "Famous barbecue restaurant known for its authentic Texas-style smoked meats.",
        image: "/images/blacksbbq.png"
    }
];;

locations.forEach(location => {
    // Create a popup with HTML content

    let popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<strong>${location.name}</strong><p>${location.description}</p>
    <img src="${location.image}" alt="${location.name}" style="width:100%;" >`);

    // Create a marker
    new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
});
