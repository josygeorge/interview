
// Returns the longest repeating non-overlapping
// substring in str
function longestRepeatedSubstring(str) {
    let n = str.length;
    let LCSRe = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        LCSRe[i] = new Array(n + 1);
    }
    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            LCSRe[i][j] = 0;
        }
    }

    let res = ""; // To store result
    let res_length = 0; // To store length of result

    // building table in bottom-up manner
    let i, index = 0;
    for (i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {

            // (j-i) > LCSRe[i-1][j-1] to remove
            // overlapping
            if (str[i - 1] == str[j - 1]
                && LCSRe[i - 1][j - 1] < (j - i)) {
                LCSRe[i][j] = LCSRe[i - 1][j - 1] + 1;

                // updating maximum length of the
                // substring and updating the finishing
                // index of the suffix
                if (LCSRe[i][j] > res_length) {
                    res_length = LCSRe[i][j];
                    index = Math.max(i, index);
                }
            }
            else {
                LCSRe[i][j] = 0;
            }
        }
    }

    // If we have non-empty result, then insert all
    // characters from first character to last
    // character of String
    if (res_length > 0) {
        for (i = index - res_length + 1; i <= index; i++) {
            res += str.charAt(i - 1);
        }
    }

    return res;
}

// Driver program to test the above function
let str = "bananasnana";
/* let str = "geeksforgeeks"; */
document.write(longestRepeatedSubstring(str));
