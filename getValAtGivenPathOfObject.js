
// fn
const getVal = (path, obj) => path.split('.').reduce(
    (acc, c) => acc && acc[c], obj
)

// get value
console.log(getVal('a.c', { a: { b: 2, c: 'Hello World' } }))
