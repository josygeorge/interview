const numbersArr = Array.from(Array(70), (_, idx) => idx + 1);
console.log(`numbersArr : ${numbersArr}`);

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
//
function intersection(currentDraw, previousDraw) {
    return currentDraw.filter(value => previousDraw.includes(value));
}
//
//
//
console.log('feb9mid-Intersection-feb8eve : ', intersection(feb9mid, feb8eve));
console.log('feb8eve-Intersection-feb8mid : ', intersection(feb8eve, feb8mid));
console.log('feb8mid-Intersection-feb7eve : ', intersection(feb8mid, feb7eve));
console.log('feb7eve-Intersection-feb7mid : ', intersection(feb7eve, feb7mid));
console.log('feb7mid-Intersection-feb6eve : ', intersection(feb7mid, feb6eve));