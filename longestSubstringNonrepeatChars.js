function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
        curr_char = chars[i];
        if (!hash[chars[i]]) {
            str += curr_char;
            hash[chars[i]] = { index: i };
        }
        else {
            if (longest_string.length <= str.length) {
                longest_string = str;
            }
            var prev_dupeIndex = hash[curr_char].index;
            var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
            str = str_FromPrevDupe + curr_char;
            hash = {};
            for (var j = prev_dupeIndex + 1; j <= i; j++) {
                hash[input.charAt(j)] = { index: j };
            }
        }
    }
    return longest_string.length > str.length ? longest_string : str;
}
console.log(longest_substring_without_repeating_characters("abcdddefghi"));

console.log(longest_substring_without_repeating_characters("example.com"));

//
const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 }


output = { d: 10, e: 12 }

//
function result(iOne, iTwo) {
    //key:value shall be equal 
    // input1 is larger object so use input1 to iterate
    // declare the result obj
    let resObj = {} // this should have the output
    for (let idx in iTwo) { // a,e,f,d
        //if iOne - value in that key === iTwo value in that key 
        if (iOne[idx] === iTwo[idx]) {
            resObj[idx] = iOne[idx];
        }

    }
    return resObj
}
console.log(result(input1, input2));
