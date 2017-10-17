var source = require('../routes/index.js').from_currency; // import currency type

function setConvert(source){ // sets conversion rates dependant on currency you're converting from
  if (source == 'USD'){
    module.exports = {
      EUR: 0.85,
      JPY: 112.63,
      USD: 1
    };
  }

  else if (source == 'EUR'){
    module.exports = {
      USD: 1.17619,
      JPY: 132.009,
      EUR: 1
    };
  }
  else if (source == 'JPY'){
    module.exports = {
      USD: 0.00890995,
      EUR: 0.00757597,
      JPY: 1
    };
  }
};

setConvert(source)
