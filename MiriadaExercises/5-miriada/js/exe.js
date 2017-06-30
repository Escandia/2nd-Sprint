//Exercise 1

var suit = ["c","d","p","t" ]
var value = 13;
var deck = [];

for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j <= value; j++) {
    deck[deck.length] = { values : j , suits : suit[i]};
  }
}

function shuffle(cards){
  for (var i = 0; i < 100; i++) {
    deck[i] = deck[Math.floor(Math.random())];
  }
  return deck;
}

//Exercise 2

function sharingOut(cards){
  cards.splice(0,1);
  console.log ("Sharing out" + cards);
}

function score(hand){
  var total = 0;

  for (var k=0; k<hand.length; k++){
    if (hand[0] === hand[1] && hand[1] === hand[2] && hand [2] === hand[3]){
      total = total + 10 * hand[k];
    }else{
      total = total + hand[k];
    }
  }
  console.log("Your hand's score is " + total);
}

var hand = [1,1,1,1];
var hand2 = [1,2,2,1];
var Croupier = {shareOut: sharingOut, scoring: score};

Croupier.shareOut(cards);
Croupier.scoring(hand);
Croupier.scoring(hand2);


//Exercise 3

function square(side) {
  var total = side * 4;
  return total;
}

function rectangle(side1, side2) {
  var total = (side1 * 2) + (side2 * 2);
  return total;
}

function circle(diameter) {
  var total = diameter * Math.PI;
  return total;
}

var estimate = {lengthSquare: square, lengthRectangle: rectangle, lengthCircle: circle}

estimate.lengthSquare(125);
estimate.lengthRectangle(30,60);
estimate.lengthCircle(932);
