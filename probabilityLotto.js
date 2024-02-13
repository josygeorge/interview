console.log('DAILY KENO');

const numbersArr = Array.from(Array(70), (_, idx) => idx + 1);
console.log(`numbersArr : ${numbersArr}`);

// Generator

const genSet20 = new Set();
while (genSet20.size !== 20) {
    genSet20.add(Math.ceil(Math.random() * numbersArr.length));
}
const genArr20 = Array.from(genSet20);
console.log(genArr20.sort((a, b) => a - b));

//
// Sample array
let array = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Function to randomly select array values
function getRandom10(array) {
    let random10 = [];
    // Loop to select random values
    for (let i = 0; i < 10; i++) {
        // Generate a random index within the array length
        let randomIndex = Math.floor(Math.random() * array.length);
        // Add the randomly selected value to the result array
        random10.push(array[randomIndex]);
    }
    return random10;
}

// Call the function to select 3 random values from the array
let randomSelection = getRandom10([...genArr20]);

console.log(randomSelection); // Outputs an array of 10 randomly selected values


/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Daily Keno

//const latestDraw = [1, 3, 6, 17, 18, 19, 20, 25, 28, 32, 38, 43, 47, 49, 53, 60, 61, 62, 65, 66];
//const latestDraw = [1, 2, 6, 14, 15, 22, 25, 28, 32, 36, 38, 39, 40, 42, 48, 49, 50, 59, 65, 68];
//const latestDraw = [1, 3, 4, 15, 17, 19, 22, 25, 26, 28, 30, 31, 35, 50, 54, 60, 61, 67, 69, 70];
const latestDraw = [5, 9, 16, 19, 23, 26, 28, 32, 35, 39, 40, 43, 46, 47, 49, 53, 55, 59, 63, 68];

const feb9mid = [1, 4, 5, 12, 24, 25, 28, 30, 35, 45, 47, 49, 51, 54, 55, 60, 61, 62, 68, 69];
//
const feb8eve = [1, 2, 4, 6, 7, 11, 12, 14, 21, 22, 23, 32, 33, 35, 36, 38, 54, 60, 63, 65];
//
const feb8mid = [1, 2, 3, 9, 11, 14, 15, 26, 27, 29, 30, 31, 36, 40, 52, 54, 57, 63, 67, 69];
//
const feb7eve = [2, 7, 11, 17, 19, 20, 21, 23, 29, 31, 35, 39, 42, 45, 46, 50, 52, 54, 61, 62];
//
const feb7mid = [8, 10, 17, 18, 20, 22, 27, 29, 32, 34, 37, 39, 40, 43, 44, 52, 55, 61, 62, 65];
//
const feb6eve = [5, 7, 14, 17, 18, 21, 22, 27, 28, 39, 40, 44, 46, 52, 53, 55, 57, 58, 69, 70];
//
const feb6mid = [4, 5, 11, 14, 16, 19, 20, 23, 25, 26, 27, 30, 31, 32, 44, 47, 58, 59, 63, 67];
//
//
//
function intersectionDailyKeno(currentDraw, previousDraw) {
    return currentDraw.filter(value => previousDraw.includes(value));
}
//
//
//
console.log('latest-Intersection-previous : ', intersectionDailyKeno(latestDraw, feb9mid));
//
console.log('feb9mid-Intersection-feb8eve : ', intersectionDailyKeno(feb9mid, feb8eve));
console.log('feb8eve-Intersection-feb8mid : ', intersectionDailyKeno(feb8eve, feb8mid));
console.log('feb8mid-Intersection-feb7eve : ', intersectionDailyKeno(feb8mid, feb7eve));
console.log('feb7eve-Intersection-feb7mid : ', intersectionDailyKeno(feb7eve, feb7mid));
console.log('feb7mid-Intersection-feb6eve : ', intersectionDailyKeno(feb7mid, feb6eve));
console.log('feb6eve-Intersection-feb6mid : ', intersectionDailyKeno(feb6eve, feb6mid));

// chess board
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        document.write('#');
    }
    document.write('<br>');
}
// isEven using recursion
function isEven(num) {
    if (num == 0) return true;
    else if (num == 1) return false;
    else if (num > 0) return isEven(num - 2);
    else return isEven(-num);
}
console.log(isEven(-10));