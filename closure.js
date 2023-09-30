//Closure test
/*write a function which will output something like this:

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
*/
function createBase(baseNum) {
    function addFn(n) {
        return baseNum + n;
    }
    return addFn;
}
var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27




/* Is an Array */
const obj = [22, 11, 44, 33, 66, 55, 88];
//if (Object.prototype.toString.call(obj) === '[object Array]') {
if (Array.isArray(obj)) {
    console.log("Array!");
}
else {
    console.log("Not an array");
}