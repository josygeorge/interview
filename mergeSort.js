unsortedArrDemo = [34, 22, 16, 100, 43, 88, 63, 56]
//sort() method - JS
//unsortedArrDemo.sort(); // usasge of sort method directly like this would create will produce incorrect result when sorting numbers. 
//console.log(unsortedArrDemo); // 100 is not sorted because the sorting is treated as string sorting.


unsortedArrDemo.sort((a, b) => a - b);
console.log(unsortedArrDemo);

///////////////////////////////////////////////



// using recursive function
unsortedArr = [43, 32, 56, 22, 63, 11, 88]

console.log(mergeSort(unsortedArr));

// function
function mergeSort(unsortedArr) {
    // dividing the array to half
    const midIndex = unsortedArr.length / 2;
    console.log(midIndex);
    // Base case: if < 2 arr need not be sorted
    if (unsortedArr.length < 2) {
        return unsortedArr;
    }
    // making 2 arrays by splicing, of left array & rest of elements in the same arr
    const leftSubArr = unsortedArr.splice(0, midIndex);

    // recursion
    return mergeArraysAfterSort(mergeSort(leftSubArr), mergeSort(unsortedArr));
}

//
//
//
function mergeArraysAfterSort(leftSubArr, rightSubArr) {
    let sortedArr = [];
    while (leftSubArr.length && rightSubArr.length) {
        if (leftSubArr[0] < rightSubArr[0]) {
            sortedArr.push(leftSubArr.shift());
        } else {
            sortedArr.push(rightSubArr.shift());
        }
        console.log(sortedArr)
        console.log(leftSubArr)
        console.log(rightSubArr)
    }

    return [...sortedArr, ...leftSubArr, ...rightSubArr];
}
