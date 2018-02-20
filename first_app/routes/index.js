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

  let info = [];

  Promise.all([
  juvenes(week, weekday).then(result => {
    info.push(result)
    console.log('eka')
    console.log(info)
  }),

  amica(date, month, year).then(result => {
    info.push(result)
    console.log('toka')
    console.log(info)
}),

  sodexo(year, month, date).then(result => {
    info.push(result)
    console.log('kolmas')
    console.log(info)
  }),

  cafe_konehuone(week, weekday).then(result => {
    info.push(result)
    console.log('neljäs')
    console.log(info)
  }),

  fusion_kitchen(week, weekday).then(result => {
    info.push(result)
    console.log('viides')
    console.log(info)
    
  })
  ]).then(rip =>{
    res.send(info)
  })
});

module.exports = router;
