const prompt = require("prompt-sync")();
// lista de 10 produtos
// usuario deve informar uma porcentagem  
var headSet = 70
var carregador = 20
var mouse = 50

var percentage = prompt("Insira a porcentagem ? ")
var resultPercentageHeadset = Number(headSet) * Number(percentage) / 100;
var resultPercentageCarregador = Number(carregador) * Number(percentage) / 100;
var resultPercentageMouse = Number(mouse) * Number(percentage) / 100;

var finalPrice1 = Number(resultPercentageHeadset) + Number(headSet)
var finalPrice2 = Number(resultPercentageCarregador) + Number(carregador)
var finalPrice3 = Number(resultPercentageMouse) + Number(mouse)

console.log(`Headset ${finalPrice1}, Carregador ${finalPrice2}, Mouse ${finalPrice3}`); 
