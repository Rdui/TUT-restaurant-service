var express = require('express');
require('es6-promise').polyfill();
require('isomorphic-fetch');
const util = require('util');

const router = express.Router();
const http = require('https');
const CircularJSON = require('circular-json')


/* GET users listing. */
router.get('/', function(req, res, next) {
    
/*
#######################  fazer amica
    return fetch('http://www.amica.fi/api/restaurant/menu/day?date=2018-2-19&language=fi&restaurantPageId=69171')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
       console.log(stories.LunchMenu.SetMenus[0].Meals[0].Name)
       console.log(stories.LunchMenu.SetMenus[0].Meals[0].Diets)
       var linjasto1 = stories.LunchMenu.SetMenus[0].Meals[0].Name;
       var linjasto1_diet = stories.LunchMenu.SetMenus[0].Meals[0].Diets

       var linjasto2 = stories.LunchMenu.SetMenus[1].Meals[0].Name;
       var linjasto2_diet = stories.LunchMenu.SetMenus[1].Meals[0].Diets
       res.send('linjasto 1 :'+ linjasto1 + ' ' + linjasto1_diet+ '  linjasto 2: '+ 
                linjasto2 + ' ' + linjasto2_diet);

*/


/*
## newton
  return fetch('http://www.juvenes.fi/DesktopModules/Talents.LunchMenu/LunchMenuServices.asmx/GetMenuByWeekday?KitchenId=6&MenuTypeId=60&Week=8&Weekday=2&lang=%27fi%27&format=json')
  .then(function(response) {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
  })
  .then(function(stories) {
     var loput = JSON.parse(stories.d);


     const main_dish = loput.MealOptions[0].MenuItems[0].Name_FI;
     const diet_types = loput.MealOptions[0].MenuItems[0].Diets;
     console.log(loput.MealOptions[2])
     console.log(diet_types)
     //console.log(JSON.stringify(loput.MealOptions[0].MenuItems[0].Name_FI, null, 2));
  
    res.send(JSON.stringify(main_dish+ " allergiat: "+ diet_types));
*/

/*
## fusars
    return fetch('http://www.juvenes.fi/DesktopModules/Talents.LunchMenu/LunchMenuServices.asmx/GetMenuByWeekday?KitchenId=60038&MenuTypeId=3&Week=8&Weekday=1&lang=%27fi%27&format=json')
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
    //console.log(loput.MealOptions[2])
    //console.log(diet_types)
    //console.log(JSON.stringify(loput.MealOptions[0].MenuItems[0].Name_FI, null, 2));

    res.send(JSON.stringify(linjasto1+ " allergiat: "+ linjasto1_diet+ "  "+ linjasto2+ " allergiat " + linjasto2_diet));
    */
    return fetch('https://www.sodexo.fi/ruokalistat/output/daily_json/12812/2018/02/19/fi')
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
       console.log(linjasto1)
       console.log(linjasto1_diet)

       var linjasto2 = stories.courses[1].title_fi
       var linjasto2_diet = stories.courses[1].properties
       console.log(linjasto2)
       console.log(linjasto2_diet)

       res.send('rir')
       //res.send('linjasto 1 :'+ linjasto1 + ' ' + linjasto1_diet+ '  linjasto 2: '+ 
               // linjasto2 + ' ' + linjasto2_diet);
});
});

module.exports = router;
