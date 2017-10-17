var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET convert page */
router.get('/convert', function(req,res,next){
  var amtCurrency = req.query.amtCurrency; // How many dollars?
  var toCurrency = req.query.to_currency; // To what currency?
  var fromCurrency = req.query.from_currency;
  console.log(fromCurrency,"index")
  module.exports.from_currency = fromCurrency;
  console.log(module.exports.from_currency,"index2")
  var exchangeRates = require('../model/currencyDB');
  console.log(exchangeRates,"ex_toCurrency")
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
