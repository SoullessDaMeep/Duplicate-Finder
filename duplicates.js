const a = [2, 2, 3, 4, 2, 5, 6, 2, 3, 7, 3, 1, 3, 9, 6, 4, 3, 7]
function duplicate(a){
let thing1 = {} 
for(let i = 0; i < a.length; i++) thing1[a[i]] ? thing1[a[i]] += 1 : thing1[a[i]] = 1
for (let thing2 in thing1) thing1[thing2] >= 2 ? console.log(thing2 + " counted: " + thing1[thing2] + " times.") : null
console.log(thing1)
}
duplicate(a)
