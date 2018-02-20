var express = require('express');
require('es6-promise').polyfill();
require('isomorphic-fetch');
const router = express.Router();

module.exports = function getData(week, weekday) {
    var baseURL = 'http://www.juvenes.fi/DesktopModules/Talents.LunchMenu/LunchMenuServices.asmx/GetMenuByWeekday?KitchenId=60038&MenuTypeId=3&Week='
    var url = baseURL + week + '&Weekday=' + weekday + '&lang=%27fi%27&format=json'

    return fetch(url)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
    var loput = JSON.parse(stories.d);

    const linjasto1 = loput.MealOptions[0].MenuItems[0].Name_FI;
    const linjasto1_diet = loput.MealOptions[0].MenuItems[0].Diets;
    const linjasto2 = loput.MealOptions[1].MenuItems[0].Name_FI;
    const linjasto2_diet = loput.MealOptions[1].MenuItems[0].Diets;

    return({linjasto1, linjasto1_diet, linjasto2, linjasto2_diet});
    });
};

