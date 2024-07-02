/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
  const outData = [];
  
  const doSumRecursive = (startFrom, candidates, target, finalCombinations, currentCombination) => {
      if (startFrom === candidates.length) {
          if (target === 0) {
              finalCombinations.push([...currentCombination]);
          }
          return;
      }
      if (candidates[startFrom] <= target) {
          currentCombination.push(candidates[startFrom]);
          doSumRecursive(startFrom, candidates, target - candidates[startFrom], finalCombinations, currentCombination);
          currentCombination.pop();
      }
      doSumRecursive(startFrom + 1, candidates, target, finalCombinations, currentCombination);
  };
  
  doSumRecursive(0, candidates, target, outData, []);
  return outData;
};

  
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates, target) => {
    return combinationSumRecursive(candidates, target);
  }

module.exports = combinationSum;