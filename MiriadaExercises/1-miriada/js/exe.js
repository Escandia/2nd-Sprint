//Primer ejercicio
// 1. Los años bisiestos que habrá antes de 2050

var año = 2050-2016
console.log(año);
var x4 = 4
var resultado = año/x4
console.log(resultado);
console.log("Los años bisiestos que habrá antes de 2050 seran " + resultado);

//2- Ejercicio en clase

var leapYearInterval = 4;
vaar startingYear = 2017;
var targetYear= 2050;
var yearBeforeTargetYear = targetYear - 1;

var yearInterval = yearBeforeTargetYear - startingYear;
var remainingYearsv= yearInterval % leapYearInterval;
var result = (yearInterval - remainingYearsv) / leapYearInterval;
console.log("The leap years that will be before 2050 will be");

//Segundo ejercicio
// 2. Cuántas cartas con número par y negras hay en una baraja de poker

var poker = 52
var pokernegras = poker/2
var resultado = pokernegras
console.log("Las cartas negras en una baraja de poker son " + resultado);
var pares = resultado/2
console.log("Las cartas pares negras en una baraja de negras son " + pares);

//Tercer Ejercicio
// 3. Define una variable cuyo valor sea una cadena que represente una carta
// de la baraja. Recuerda que representamos las cartas con una cadena formada
// por un número que representa el valor, seguido de una letra que representa
// el palo. Ahora crea otras dos variables que representan a la carta anterior
// y a las carta posterior en una baraja ordenada. Finalmente, crea una última
// variable que concatene las cadenas de las 3 cartas anteriores usando las
// variables que ya tienes.

var totalCards = 55;
var jokerCards = 3;
var sticks = 4
var blackSticks = 2;
var cardsPerStick = (totalCards - jokerCards) / sticks;
var figurePerStick = 3;

var cardWithNumbersPerStick = cardsPerStick -figurePerStick;
var evencardsPerStick = cardWithNumbersPerStick / 2;
var result = evencardsPerStick +  blackSticks;

console.log(result);


//Cuarto Ejercicio
// 4. Define una variable cuyo valor sea una cadena que represente una carta de la
// baraja, cuyo valor sea mayor que 9. Ahora utiliza el operador para indexar la
// cadena, y accede al palo de la carta. ¿Cuál es la diferencia si la carta tiene
// un valor menor o igual que 9?

var card = "3p";
var cardNumber = card[0];
var suit =  card[1];
var previousCardNumber = number - 1;
var previousCard = previousCardNumber + suit;
console.log(previousCard);

var nextCardNumber = +number + 1;
var nextCard= nextCardNumber + suit;
console.log("La siguiente carta a 3p " + nextCard);

var all = previousCard + card + nextCard;
console.log();


//Ejercicio en clase- 4

var card = "10c";
var suit = card[2];
console.log(suit);

var card = "9c";
var suit2 = card[1];
console.log(suit);
