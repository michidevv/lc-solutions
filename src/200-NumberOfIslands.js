// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid?.length || !grid[0]?.length) {
    return 0;
  }

  let result = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (dfs(grid, x, y)) result += 1;
    }
  }

  return result;
};

function dfs(grid, col, row) {
  const cell = grid?.[col]?.[row];
  if (cell === "1") {
    grid[col][row] = undefined; // Cell visited
    dfs(grid, col - 1, row);
    dfs(grid, col + 1, row);
    dfs(grid, col, row - 1);
    dfs(grid, col, row + 1);
    return true;
  }

  return false;
}
