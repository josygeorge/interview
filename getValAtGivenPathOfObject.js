
// fn
const getVal = (path, obj) => path.split('.').reduce(
    (acc, c) => acc && acc[c], obj
)

//

function deepFind(path, obj) {
    var paths = path.split('.')
        , current = obj
        , i;

    for (i = 0; i < paths.length; ++i) {
        if (current[paths[i]] == undefined) {
            return undefined;
        } else {
            current = current[paths[i]];
        }
    }
    return current;
}

// get value
console.log(getVal('a.c', { a: { b: 2, c: 'Hello World' } }))
console.log(deepFind('a.c', { a: { b: 2, c: 'Hello World' } }))
