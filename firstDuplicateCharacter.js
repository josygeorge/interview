/* function firstRepeating(str) {
    const n = str.length;
    let ans = '\0';
    let index = Infinity;

    for (let i = 0; i < n; i++) {
        const temp = str[i];
        // Checking if the character in temp repeats or not
        for (let j = i + 1; j < n; j++) {
            if (str[j] === temp) {
                // If the index where it repeated is less than
                // the index of the previously repeated character,
                // then update ans and index variables
                if (j < index) {
                    index = j;
                    ans = str[j];
                }
            }
        }
    }

    return ans;
} */



// Javascript program to find the first
// repeated character in a string using Set()

// This function prints the first repeated
// character in str[]
function firstRepeating(str) {

    // Creates an empty hashset
    let h = new Set();

    // Traverse the input array from left to right
    for (let i = 0; i <= str.length - 1; i++) {
        let c = str[i];

        // If element is already in hash 
        // set, update x and then break
        if (h.has(c))
            return c;

        // Else add element to hash set
        else
            h.add(c);
    }
    return '\0';
}

// Driver code
//let str = "ilovejavascript";
const str = "reactisthebestlibrary";
console.log(firstRepeating(str));
