// https://leetcode.com/problems/decode-string/
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let result = '';
    let idx = 0;
    while (idx < s.length) {
        if (Number.isInteger(+s[idx])) {
            const [str, i] = expand(s, idx);
            result += str;
            idx = i;
        } else {
            result += s[idx];
        }

        idx += 1;
    }

    return result;
};

function expand(s, idx) {
    const [times, index] = buildTimes(s, idx);
    let substr = '';
    let idxx;

    for (let t = 0; t < times; t++) {
        let brackets = 0;
        idxx = index;
        do {
            if (s[idxx] === '[') {
                brackets += 1;
            } else if (s[idxx] === ']') {
                brackets -= 1;
            } else if (Number.isInteger(+s[idxx])) {
                const [sub, i] = expand(s, idxx);
                substr += sub;
                idxx = i;
            } else {
                substr += s[idxx];
            }
            if (brackets !== 0) idxx += 1;
        } while (brackets > 0);
    }

    return [substr, idxx];
}

function buildTimes(s, i) {
    let result = '';
    while (Number.isInteger(+s[i])) {
        result += s[i];
        i += 1;
    }

    return [+result, i];
}
