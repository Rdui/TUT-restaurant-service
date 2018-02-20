var express = require('express');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const router = express.Router();


/* GET users listing. */
module.exports = function getData(date, month, year) {
    var baseURL = 'http://www.amica.fi/api/restaurant/menu/day?date='
    var url = baseURL + year + '-' + month + '-' + date + '&language=fi&restaurantPageId=69171'

    return fetch(url)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
       var linjasto1 = stories.LunchMenu.SetMenus[0].Meals[0].Name;
       var linjasto1_diet = stories.LunchMenu.SetMenus[0].Meals[0].Diets

       var linjasto2 = stories.LunchMenu.SetMenus[1].Meals[0].Name;
       var linjasto2_diet = stories.LunchMenu.SetMenus[1].Meals[0].Diets

       //console.log(JSON.stringify(stories, null, 2));

       var iltaruoka1 = stories.LunchMenu.SetMenus[9].Meals[0].Name;
       var iltaruoka1_diet = stories.LunchMenu.SetMenus[9].Meals[0].Diets

       var iltaruoka2 = stories.LunchMenu.SetMenus[10].Meals[0].Name;
       var iltaruoka2_diet = stories.LunchMenu.SetMenus[10].Meals[0].Diets

       return ({"Amica" :[{"Linjasto1" :linjasto1, linjasto1_diet}, {"Linjasto2" :linjasto2, linjasto2_diet},
         {"Iltaruoka1" :iltaruoka1, iltaruoka1_diet }, {"Iltaruoka2": iltaruoka2, iltaruoka2_diet}]});
    }) 

};