// https://leetcode.com/problems/dungeon-game/description/
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let cachedMin = -Infinity;

    function search(dungeon, m, n, current = 0, min = 0) {
        const val = dungeon[m][n];

        const next = current + val;
        const nextMin = Math.min(next, min);
        if (nextMin <= cachedMin) {
            return nextMin;
        }

        // Reached the target
        if (m === dungeon.length - 1 && n === dungeon[0].length - 1) {
            cachedMin = Math.max(cachedMin, nextMin);
            return nextMin;
        }

        return Math.max(
            m + 1 < dungeon.length ? search(dungeon, m + 1, n, next, nextMin) : -Infinity,
            n + 1 < dungeon[0].length ? search(dungeon, m, n + 1, next, nextMin) : -Infinity
        );
    }

    const result = search(dungeon, 0, 0);

    return result >= 0 ? 1 : Math.abs(result) + 1;
};
