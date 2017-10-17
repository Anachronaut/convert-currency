var exports = module.exports = {};
var source = require('../routes/index.js').from_currency;
console.log(source,"db")
function setConvert(source){
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
console.log(source,"db2")
setConvert(source)
console.log(source,"db3")
console.log(exports,"dbex")
console.log(module.exports,"dbex2")
