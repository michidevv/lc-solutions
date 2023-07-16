// https://leetcode.com/problems/stone-game-vi

/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function (aliceValues, bobValues) {
  let result = 0;
  const values = aliceValues
    .map((a, i) => ({ v: a + bobValues[i], i }))
    .sort((a, b) => a.v - b.v);
  let isAlice = true;
  while (values.length) {
    if (isAlice) {
      isAlice = false;
      result += aliceValues[values.pop().i];
    } else {
      isAlice = true;
      result -= bobValues[values.pop().i];
    }
  }

  if (result === 0) {
    return 0;
  } else if (result > 0) {
    return 1;
  } else {
    return -1;
  }
};
