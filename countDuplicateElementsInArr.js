// count the duplicate elements in an array

// input
const itemsArr = ['a', 'b', 'c', 'a', 'a', 'b', 'c', 'c', 'd'];

// output expected : {a:3, b:2, c:3, d:1}

function countDuplicates(data) {
    const output = {};
    // logic
    // map the arr
    data.map(ele => {
        console.log(ele);
        output[ele] = (output[ele] || 0) + 1
    })
    return output;
}

console.log(countDuplicates(itemsArr));