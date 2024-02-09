const numbersArr = Array.from(Array(70), (_, idx) => idx + 1);
console.log(numbersArr);

const feb9 = [1, 4, 5, 12, 24, 25, 28, 30, 35, 45, 47, 49, 51, 54, 55, 60, 61, 62, 68, 69];
console.log(feb9);

let filteredArray = numbersArr.filter(value => !feb9.includes(value));
console.log(filteredArray);


