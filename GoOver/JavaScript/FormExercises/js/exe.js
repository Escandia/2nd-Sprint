// Ejercicio 1

var number = 1;
var arraynumbers = [1,3,4,2,1,3,4,5,1,1];
var onenumber = 1;

function countnumbers(number, arraynumbers){
  var total = 0;
    for (i = 0; i < arraynumbers.length; i++){
      if (arraynumbers[i] === number){
        total = total + onenumber;
    }
  }
  return total;
}
countnumbers(number, arraynumbers);

// Ejercicio 2

var string = "HeLlo"
var even = string.length % 2 === 0;
var middle =  Math.floor (string.length / 2);
// Math es para redondear y floor es a la baja, por lo tanto math.floor redondea a la baja

function centralCharacter(string) {
  var isEmpty = string.length === 0;
  if (isEmpty) {
    return "La cadena no puede estar vacía"
  } else if(even){
      return "La cadena solo funciona con cadenas de longuitud impar";
  } else {
        return string[middle];
      }
}
centralCharacter(string)


//Ejercicio 3

var numbers = [1,3,4,5,6,7,2,9]

function findNumbers(numbers) {
  var evenNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers[evenNumbers.length] = numbers[i];
// evenNumbers.length mide la long de la cadena de evenNumbers y coloca en la ultima
// posicion que es siempre uno más por empezar de 0, cada uno de los valores(i)
//  de la cadena numbers.
      }
    }
    return evenNumbers;
}
console.log(findNumbers(numbers));
