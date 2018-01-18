# PokerEvaluator

PokerEvaluator is a program that compare poker hands and determines a winner.
A poker hand has a constructor that accepts a string containing 5 cards: 
```
var hand = new PokerHand("KS 2H 5C JD TD");
```
and a method to compare itself to another hand.

```
const pickWinner = (hand1, hand2) => {
};
```
The result of your poker hand compare can be one of these 3 options:

* Win should return the integer **1**

* Loss should return the integer **2**

* Tie should return the integer **3**


## How to run a program
**Step 1** run a command in your terminal: **npm i <br>**
**Step 2** run next command: **npm test**

You can test different values of hand in a index.test.js
Currenntly program checks:
1. cards for specific holdings:
* pair
* two pairs
* three of a kind
* four of a kind
* flush
2. game score