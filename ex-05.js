const prompt = require("prompt-sync")();

var sellerCode = prompt("Qual o codigo do vendeder ? ");
console.log(sellerCode);

var name = prompt("Qual o nome do vendedor ? ");
console.log(name);

var computerPrice = prompt("Qual o preço do computador ? ");
console.log(`${computerPrice} Reais`);


var amountOfSales = prompt("Quantos computadores foram vendidos ? ");
console.log(`${amountOfSales} Computadores`);

var percentageComission = Number(computerPrice) * 1 / 100;
console.log(`Preço da comissão ${percentageComission}`);

var valueGiven = Number(amountOfSales) * Number(computerPrice);
console.log(` Valor vendido ${valueGiven}`);

var comission = Number(percentageComission) + Number(valueGiven);
console.log(` valor com comissão ${comission}`);
