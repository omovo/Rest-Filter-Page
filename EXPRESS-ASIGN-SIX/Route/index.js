const express = require("express");


const restaurantController = require("../Controller/restaurant");  

const route = express.Router();


//FILTER

route.get('/restaurant', restaurantController.getRestaurant);       // List Of Restaurant API
route.post('/filter', restaurantController.filteredRestaurant);     // Restaurant Filter API

module.exports = route;