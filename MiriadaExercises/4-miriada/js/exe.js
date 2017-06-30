//Exercise 1
var hand1 = [{value:4, suit: "d"}, {value:2, suit: "c"}, {value:1, suit: "p"}]
var hand2 = [{value:3, suit: "c"}, {value:1, suit: "t"}, {value:7, suit: "d"}]
var hand3 = [{value:8, suit: "t"}, {value:9, suit: "d"}, {value:1, suit: "p"}]
var value = hand1[i].value;
var suit = hand[i].suit;
var total = 0;

function scoreHand(hand1){
  for (var i = 0; i < hand1.length; i++) {
    if (value === 1) {
      asvalue = 20;
    }
    if (suit === "c"  || suit === "d") {
      redCardsValue = 2;
    }
    total = total + asvalue + redCardsValue;
  }
  console.log("The total puntuation is " + total);
}

scoreHand(hand1);
scoreHand(hand2);
scoreHand(hand3);


//Exercise 2
function scoreHand(hand1){
  for (var i = 0; i < hand1.length; i++) {
    if (suit === "c"  || suit === "d") {
      redCardsValue = 2;
    }
    total = total + asvalue + redCardsValue;
  }
  console.log("The total puntuation is " + total);
}

scoreHand(hand1);
scoreHand(hand2);
scoreHand(hand3);

//Exercise 3
var handPlayer1 = hand1;
var handPlayer2 = hand2;
var score1 =scoreHand(handPlayer1);
var score1 =scoreHand(handPlayer2);
var players = [player1, player2];


function bestScore(players){
  if (player1 > player2) {
    console.log("Win: Player one!!");
  } else {player1 < player2
    console.log("Win: Player two!!");
  }
}

bestScore(players);
