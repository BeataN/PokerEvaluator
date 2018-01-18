const handStrenghts = {
  highCard: 1,
  pair: 2,
  twoPairs: 3,
  threeOfAKind: 4,
  straight: 5,
  flush: 6,
  fullHouse: 7,
  fourOfAKind: 8,
  straightFlush: 9
};

//HAS ROYAL FLUSH
//TO DO...

//HAS STRAIGHT FLUSH
//TO DO..

//HAS FOUR OF A KIND

const hasFourOfAKind = hand => {
  const cards = hand.split(" ");
  let result = false;

  cards.map(card => {
    const count = cards.filter(handCard => {
      return handCard.substring(0, 1) === card.substring(0, 1);
    }).length;

    if (count === 4) {
      result = true;
    }
  });

  return result;
};

//HAS FULL HOUSE
//TO DO...

//HAS FLUSH

const hasFlush = hand => {
  const cards = hand.split(" ");
  let result = false;

  cards.map(card => {
    const count = cards.filter(handCard => {
      return handCard.substring(1) === card.substring(1);
    }).length;
    if (count === 5) {
      result = true;
    }
  });

  return result;
};

//HAS STRAIGHT
//TO DO...

//HAS THREE OF A KIND

const hasThreeOfAKind = hand => {
  const cards = hand.split(" ");
  let result = false;

  cards.map(card => {
    const count = cards.filter(handCard => {
      return handCard.substring(0, 1) === card.substring(0, 1);
    }).length;

    if (count === 3) {
      result = true;
    }
  });

  return result;
};

//HAS TWO PAIRS

const hasTwoPairs = hand => {
  const cards = hand.split(" ");
  const pairs = [];
  let result = false;

  cards.map(card => {
    const count = cards.filter(handCard => {
      return handCard.substring(0, 1) === card.substring(0, 1);
    }).length;

    if (count === 2 && !pairs.includes(card.substring(0, 1))) {
      pairs.push(card.substring(0, 1));
    }

    if (pairs.length === 2) {
      result = true;
    }
  });

  return result;
};

// HAS PAIR
const hasPair = hand => {
  const cards = hand.split(" ");
  let result = false;

  cards.map(card => {
    const count = cards.filter(handCard => {
      return handCard.substring(0, 1) === card.substring(0, 1);
    }).length;
    if (count === 2) {
      result = true;
    }
  });

  return result;
};

const evaluateHand = hand => {
  if (hasFourOfAKind(hand)) {
    return handStrenghts.fourOfAKind;
  } else if (hasFlush(hand)) {
    return handStrenghts.flush;
  } else if (hasThreeOfAKind(hand)) {
    return handStrenghts.threeOfAKind;
  } else if (hasTwoPairs(hand)) {
    return handStrenghts.twoPairs;
  } else if (hasPair(hand)) {
    return handStrenghts.pair;
  } else {
    return handStrenghts.highCard;
  }
};

const pickWinner = (hand1, hand2) => {
  const score1 = evaluateHand(hand1);
  const score2 = evaluateHand(hand2);

  if (score1 === score2) {
    return 3;
  } else if (score1 > score2) {
    return 1;
  } else {
    return 2;
  }
};

export {
  hasThreeOfAKind,
  hasFourOfAKind,
  hasFlush,
  hasPair,
  hasTwoPairs,
  pickWinner
};
