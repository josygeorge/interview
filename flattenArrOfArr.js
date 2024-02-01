// flatten array of arrays

let arr = [1, 2, [3, 4, 5], 6, [7, 8, 9, [10, 11, 12], 13], 14];

let output = [];
console.log(arr.flat(3));

let flatArray = arr.reduce((accum, currVal) => {
    return accum.concat(currVal);
}, []);

console.log(flatArray);



function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // recursive call
            flatten(arr[i]);
        }
        else {
            output += arr[i];
        }
    }
    console.log(output[1]);
    return output;
}

const finalArr = flatten(arr);
console.log(finalArr.length);
let i = 0;

while (i < finalArr.length) {
    console.log(finalArr[i]);
    i++;
}