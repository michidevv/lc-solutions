// https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer

/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  const numStr = num.toString();
  const digitList = numStr.split("");
  const maxDigit = digitList.find((v) => v < 9);
  if (!maxDigit) {
    return numStr - numStr.replaceAll(9, 1);
  }

  const maxNum = numStr.replaceAll(maxDigit, 9);
  const minNum = makeMinNum(numStr, digitList);

  return maxNum - minNum;
};

function makeMinNum(numStr, digitList) {
  const idx = digitList.findIndex((v) => v > 1);
  if (idx === -1) {
    return numStr;
  } else {
    return numStr.replaceAll(numStr[idx], idx === 0 ? 1 : 0);
  }
}
