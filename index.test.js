import {
  hasThreeOfAKind,
  hasFourOfAKind,
  hasFlush,
  hasPair,
  hasTwoPairs,
  pickWinner
} from "./";

describe("Check cards for specific holdings", () => {
  test("Checks for pair", () => {
    expect(hasPair("2H 4H 4S TS KH")).toBe(true);
    expect(hasPair("KC 8H 2C 8C 7C")).toBe(true);
    expect(hasPair("TS TC 2S 5S AS")).toBe(true);
    expect(hasPair("2H TS 4H 8S AC")).toBe(false);
    expect(hasPair("7H AS 3C 4H 5C")).toBe(false);
  });

  test("Checks for two pairs", () => {
    expect(hasTwoPairs("2H 4H 4S 2S KH")).toBe(true);
    expect(hasTwoPairs("TS TC 2S 2S AS")).toBe(true);
    expect(hasTwoPairs("KC KH 2C 8C 2C")).toBe(true);
    expect(hasTwoPairs("KC KH KS KD 2C")).toBe(false);
    expect(hasTwoPairs("2H TS 4H 4S AC")).toBe(false);
    expect(hasTwoPairs("7H AS 5C 4H 5C")).toBe(false);
  });

  test("Checks for three of a kind", () => {
    expect(hasThreeOfAKind("2H 2S 2D 4C KH")).toBe(true);
    expect(hasThreeOfAKind("2H AC 2S 2D KH")).toBe(true);
    expect(hasThreeOfAKind("TH TC 2S TD KH")).toBe(true);
    expect(hasThreeOfAKind("2H 2S 2D 2C AC")).toBe(false);
    expect(hasThreeOfAKind("2H AC 2S 2D 2C")).toBe(false);
  });

  test("Checks for four of a kind", () => {
    expect(hasFourOfAKind("2H 2S 2D 2C KH")).toBe(true);
    expect(hasFourOfAKind("KH 2H 2C 2S 2D")).toBe(true);
    expect(hasFourOfAKind("TH TC 2S TD TS")).toBe(true);
    expect(hasFourOfAKind("2H 2S 2D 8C AC")).toBe(false);
    expect(hasFourOfAKind("7H AC 3S 4D 5C")).toBe(false);
  });

  test("Checks for flush", () => {
    expect(hasFlush("2H 3H 4H TH KH")).toBe(true);
    expect(hasFlush("KC TC 2C 8C 7C")).toBe(true);
    expect(hasFlush("TS 7S 2S 5S AS")).toBe(true);
    expect(hasFlush("2H 2S 4S 8S AC")).toBe(false);
    expect(hasFlush("7C AC 3C 4D 5C")).toBe(false);
  });
});

describe("Check game scores", () => {
  test("Check for winner", () => {
    expect(pickWinner("2H 3H 4H TH KH", "2H 3H 4H TH KH")).toBe(3);
    expect(pickWinner("2H 2S 4S 8S AC", "2H 2S 4S 8S AC")).toBe(3);
    expect(pickWinner("2S 3S 4S TS KS", "2H 3H 4H TH KC")).toBe(1);
    expect(pickWinner("AH AS AC TS KS", "2H 3C 4C 4H KC")).toBe(1);
    expect(pickWinner("2D 3S 4S TS KS", "2H 4C 4H TH KH")).toBe(2);
    expect(pickWinner("2D 3S TD TS TC", "2H 4H 4H TH KH")).toBe(2);
  });
});
