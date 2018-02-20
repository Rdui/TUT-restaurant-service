var express = require('express');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const router = express.Router();


/* GET users listing. */
module.exports = function getData(year, month, date) {
    const baseURL = 'https://www.sodexo.fi/ruokalistat/output/daily_json/12812/'
    let url = baseURL + year + '/' + month + '/' + date + '/fi'
    console.log(url)

    return fetch(url)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
       //console.log(stories)
       var linjasto1 = stories.courses[0].title_fi
       var linjasto1_diet = stories.courses[0].properties

       var linjasto2 = stories.courses[1].title_fi
       var linjasto2_diet = stories.courses[1].properties

       return({"Sodexo" :[linjasto1, linjasto1_diet, linjasto2, linjasto2_diet]});
});
};
