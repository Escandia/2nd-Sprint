//Primer ejercicio
// 1. Programa un ejemplo que, dada una variable de tipo cadena con la carta del 4
//  de corazones, compruebe si es de corazones y además es el número 4. En caso
//  afirmativo, lo imprimimos en la consola. Probamos el mismo programa con el 3
//  de corazones, y con el rey de corazones. ¿Qué sucede?

var carta = "4c"
if (carta[1] === "c") {
  console.log("Es de corazones");
} else if (carta[0] === "4") {
    console.log("Es el 4 de corazones");
}


var carta = "3c"
if (carta[1] === "c") {
  console.log("Es un 3 de corazones");
} else if (carta[0] === "3") {
    console.log("Es el 3 de corazones");
}


var carta = "rc"
if (carta[1]=== "c") {
  console.log("Es un Rey de corazones");
} else if (carta[0]=== "r") {
    console.log("Es un Rey de corazones");
}

//Segundo ejercicio
// 2. Utiliza un bucle para recorrer todos los años bisiestos anteriores a 2050,
// e imprímelos en la consola.

var lastYear = 2050;
var leapYear = 4;

for (var year = 2017; year <= lastYear; year = year + leapYear){
  console.log("Este año es bisiesto" + year);
}

//Segundo ejercicio -2da opción

var leapYearInterval = 4;
var currentyear = 2017;
var lastYear = 2050;
var YearsSinceLastYear = currentYear % leapYearInterval;
var yearUntilNextLeapYear = leapYearInterval - yearsSinceLastLeapYear;
var nextLeapYear = currentYear + yearsUntilNextLeapYear;
var result = "";

for (var i = nextLeapYear; i < lastYear; i= i +leapYearInterval) {
  result = result +1 + "es un año bisiesto<br>"
}

var resultElement = document.getElementById("result");


//Tercer ejercicio
// 3. Utiliza un bucle para recorrer todas las cartas de la baraja, desde el 1 al
// 12 de cada palo. Imprime en pantalla solamente las cartas rojas que sea 
// múltiplos de 3.

var cardNumber = 12;
var positionSuits = [ "C", "D", "T", "P"];
  for (var i = 1; i <= cardNumber; i++) {
    if (i%3 === 0) {
    console.log(i + positionSuits[0]);
    console.log(i + positionSuits[1]);
  }
}
