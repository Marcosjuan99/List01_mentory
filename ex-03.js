const prompt = require("prompt-sync")();


var dollarQuotation = prompt("Qual a cotação do dolar ? ");
console.log(dollarQuotation);
var value = prompt("Qual o valor ? ")
var toConvert = value * dollarQuotation
console.log(toConvert);

