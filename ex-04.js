const prompt = require("prompt-sync")();

var fistYear = prompt("Qual o primeiro ano ? ");
var secondYear = prompt("Qual segundo ano ? ");
var thirdYear = prompt("Qual terceiro ano ? ");
var forthYaer = prompt("Qual o quarto ano ? ");
var fifthYear = prompt("Qual o quinto ano ? ");

var resFistYear = 2012 - Number(fistYear);
var resSecondYear = 2012 - Number(secondYear);
var resThirdYear = 2012 - Number(thirdYear);
var resForthYaer = 2012 - Number(forthYaer)
var resFifthYear = 2012 - Number(fifthYear);

console.log(`${resFistYear} anos , ${resSecondYear} anos , ${resThirdYear} anos , ${resForthYaer} anos , ${resFifthYear} anos `); 
