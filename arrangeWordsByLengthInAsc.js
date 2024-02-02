// arranging words by their length in a sentence in Ascending Order

const str = 'react is a javascript library to build scalable applications';

// output : a is to react build librabry scalable javascript applications

//Approach
// split the str to arr
// sort the arr
// join the arr to str

function arrangeString(str) {
    return str.split(" ").sort((a, b) => a.length - b.length).join(" ");
}
console.log(arrangeString(str));