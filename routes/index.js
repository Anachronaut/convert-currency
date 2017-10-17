var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET convert page */
router.get('/convert', function(req,res,next){
  var amtCurrency = req.query.amtCurrency; // How many units?
  var toCurrency = req.query.to_currency; // To what currency?
  var fromCurrency = req.query.from_currency; // From what currency?
  module.exports.from_currency = fromCurrency; // Export fromCurrency to be used to select conversion rates
  var exchangeRates = require('../model/currencyDB'); //Moved from initial position so currencyDB is check AFTER /convert is gotten
  var converted = amtCurrency * exchangeRates[toCurrency]; // Math!

  res.render('results', {
    amtCurrency: amtCurrency,
    fromCurrency: fromCurrency,
    toCurrency: toCurrency,
    converted: converted}
  );
});

/* GET about page */
router.get('/about', function(req,res,next){
  res.render('about', { name: "Ben Hodapp",
description: "A simple currency converter."});
});

module.exports = router;
