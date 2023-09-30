//Preserve immutability of objects
/*You’re given the snippet below. 
And you’re asked to create the newHeroes object 
so that the original hero object doesn’t get changed, 
which is currently getting changed after creating 
the newHeroes object.*/

const heroes = [
    { name: "Wolverine", family: "Marvel", isEvil: false },
    { name: "Deadpool", family: "Marvel", isEvil: false },
    { name: "Magneto", family: "Marvel", isEvil: true },
    { name: "Charles Xavier", family: "Marvel", isEvil: false },
    { name: "Batman", family: "DC", isEvil: false },
    { name: "Harley Quinn", family: "DC", isEvil: true },
    { name: "Legolas", family: "Tolkien", isEvil: false },
    { name: "Gandalf", family: "Tolkien", isEvil: false },
    { name: "Saruman", family: "Tolkien", isEvil: true },
]

// changing the original object
const newHeroes = heroes.map(hero => {
    hero.name = hero.name.toLocaleUpperCase();
    return hero;
})
console.log("newHeroes Object: to UPPER CASE: ", newHeroes);
console.log("Original Object is changed (name changed to UPPERCASE):", heroes);


// not changing the original object - use spread operator OR Object.assign() method
const newHeroesUnique = heroes.map(hero => {
    //return { ...hero, name: hero.name.toLocaleLowerCase() };
    return Object.assign({}, hero, { name: hero.name.toLocaleLowerCase() });
})
console.log("newHeroesUnique Object: to LOWER CASE", newHeroesUnique);
console.log("Original Object didn't change(Still name is UPPERCASE):", heroes);