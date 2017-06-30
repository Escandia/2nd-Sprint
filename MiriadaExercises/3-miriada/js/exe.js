//Exercise 1
// 1. Programa un ejemplo que almacene en un array todas las cartas de la baraja,
// cada una representada con un diccionario que tenga un palo y un valor.

var suits = ["c", "d", "p", "t"];
var value= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var deck = [];

  for (var i = 0; i < suits.length; i++) {
    for (var j = 1; j <= 13; j++){
      var card = {palo: suits[i], value: j};
    }
    for (var i = 0; i < deck.length; i++) {
      deck[deck.length] = card;
      console.log(card);
    }
  }

//Exercise 2
// 2. Partiendo del array que has construido en el ejercicio anterior, construye
//  un algoritmo que filtre en un nuevo array sólo las cartas rojas, y en otro
//  array las cartas negras.

var red = []
var black = []

    for (var i = 0; i < deck.length; i++) {
      var current = deck[i];
      console.log(current.palo);
      var isRed = current.palo === "c" || current.palo === "d"
        if (isRed) {
          red[red.length] = current;
      } else {
          balck[black.length] = current;
      }
    }
    console.log(red);
    console.log(black);


//Exercise 3
// 3. Partiendo del array que has construido en el ejercicio anterior, construye
// un algoritmo que filtre en un nuevo array las cartas rojas y pares. Luego
// imprime en la consola la última carta de ese nuevo array.

    for (var i = 0; i < deck.length; i++) {
      var current = deck[i];
      console.log(current.palo);
      var isRed = current.palo === "c" || current.palo === "d"
        if (isRed) {
          red[red.length] = current;
    }
    console.log(red.length);
