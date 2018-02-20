var express = require('express');
var router = express.Router();
var currentWeekNumber = require('current-week-number');

var juvenes = require('./juvenes');
var sodexo = require('./sodexo');
var fusion_kitchen = require('./fusion_kitchen');
const amica = require('./amica');
const cafe_konehuone = require('./cafe_konehuone')

/* GET home page. */
router.get('/', function(req, res, next) {

  var today = new Date();
  const date = today.getDate();
  const month = 1 + today.getMonth();
  const year = today.getFullYear();
  
  const weekday = today.getDay();
  const week = currentWeekNumber();

  let info = {};

  Promise.all([
  juvenes(week, weekday).then(result => {
    info.Juvenes = result
  }),

  amica(date, month, year).then(result => {
    info.Amica = result
}),

  sodexo(year, month, date).then(result => {
    info.Sodexo = result
  }),

  cafe_konehuone(week, weekday).then(result => {
    info.Cafe_konehuone = result
  }),

  fusion_kitchen(week, weekday).then(result => {
    info.Fusion_kitchen = result
    
  })
  ]).then(rip =>{
    res.send(info)
    console.log(info)
  })
});

module.exports = router;
