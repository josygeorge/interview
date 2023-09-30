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