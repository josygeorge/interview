// sort an array of numbers
const numArr = [44, 222, 181, -33, 0, -1, 88, 66];
/*
out of for loop  [44,22,11,33,88,66] swapped=false
------- 1st iteration of for loop --------
i=0 > i+1=1: TRUE : [44,22,11,33,88,66] => [22,44,11,33,88,66] swapped=true
i=1 > i+1=2: TRUE : [22,44,11,33,88,66] => [22,11,44,33,88,66] swapped=true
i=2 > i+1=3: TRUE : [22,11,44,33,88,66] => [22,11,33,44,88,66] swapped=true
i=3 > i+1=4: FALSE : nochange [22,11,33,44,88,66] swapped=false
i=4 > i+1=5: TRUE : [22,11,33,44,88,66] => [22,11,33,44,66,88] swapped=true
out of for loop [22,11,33,44,66,88] 
bcoz swapped=true, synchronuus execution control will
go back again up to 'do..while..' loop first step, swapped=false,
then, Enter for loop
--------- 2nd iteration of for loop ------
i=0 > i+1=1: TRUE : [22,11,33,44,66,88] => [11,22,33,44,66,88] swapped=true
i=1 > i+1=2: FALSE : nochange [11,22,33,44,66,88] swapped=true
i=2 > i+1=3: FALSE : nochange [11,22,33,44,66,88] swapped=true
i=3 > i+1=4: FALSE : nochange [11,22,33,44,66,88] swapped=true
i=4 > i+1=5: FALSE : nochange [11,22,33,44,66,88] swapped=true
out of for loop [11,22,33,44,66,88] 
bcoz swapped=true, synchronuus execution control will
go back again up to 'do..while..' loop first step, swapped=false,
then, Enter for loop
--------- 3rd iteration of for loop ------
i=0 > i+1=1: FALSE : nochange [11,22,33,44,66,88] swapped=false
i=1 > i+1=2: FALSE : nochange [11,22,33,44,66,88] swapped=false
i=2 > i+1=3: FALSE : nochange [11,22,33,44,66,88] swapped=false
i=3 > i+1=4: FALSE : nochange [11,22,33,44,66,88] swapped=false
i=4 > i+1=5: FALSE : nochange [11,22,33,44,66,88] swapped=false
bcoz swapped=false, synchronuus execution control will
exit 'do..while..' loop
*/
console.log("original unsorted arr", numArr);
// do..while..loop
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

console.log("Using Do..While loop", bubbleSort(numArr));

//two-dimensional for loop
function bsort(numArr) {
    let i, j;
    const len = numArr.length;
    for (i = 0; i < len; i++) {
        // to improve on time complexity, include a flag variable, say swapped
        let swapped = false;
        for (j = 0; j < len - i - 1; j++) {
            if (numArr[j] > numArr[j + 1]) {
                const temp = numArr[j];
                numArr[j] = numArr[j + 1];
                numArr[j + 1] = temp;
                swapped = true;
            }
        }
        // when exiting the inner loop, 
        //if there is no two elements to be swapped in the inner loop
        // break the total loop; i.e., sorting is done!
        if (!swapped) break;
    }
    return numArr;
}
console.log("Using 2-dim FOR loop", bsort(numArr));