//Qn: Difference b/w map and foreach functions

const arr = [4, 3, 5, 7, 2];
console.log(`Original array: [${arr}]`);
// Map - doesn't modifies the original array
const mapResult = arr.map((el) => {
    return el * 2;
});
// Foreach - doesn't return anything,  but modifies the original array. 
const foreachResult = arr.forEach((el, i) => {
    arr[i] = el + 3;
})
// Results
console.log(mapResult, foreachResult, arr);

/*
forEach()
- Performs given operation on each element of the array
- Returns undefined
- Performing non-tranformation like processing on each element. For example, saving all elements in the database.
*/

/*
map()
- Performs given "transformation" on a "copy" of each element
- Returns new array with transformed elements, leaving back original array unchanged.
- Obtaining array containing output of some processing done on each element of the array. For example, obtaining array of lengths of each string in the array
*/