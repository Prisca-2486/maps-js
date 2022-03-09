console.log('This is a map in javaScript');

/**MAPS in javascript:-
 * Map is just like an object with (key, value) pairs.
 * We can use any type of key or value. 
 * Can use function, blank object or string as a key.
 */

//creating a map:- const myMap = new Map() 

const myMap = new Map([
    [key1 = 'myStr'],
    [key2 = {}],
    [key3 = function () { }]
]);

//console.log(myMap);

//set(key, value)---> Setting map values. this  helps to add element 
//or change existing map values:

myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank object');
myMap.set(key3, 'This is an empty function');

console.log(myMap);

myMap.set(key1, 'this'); //changing existing value of key1.
// console.log(myMap);


//get(key)--->Getting the values of a key in a Map:

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));


//size--->returns the number of elements in a Map:

console.log(myMap.size);


//Map.delete(key)--->removes a map element:

console.log(myMap.delete(key1));



//Map.has(key)--->returns true if a key exists in a map:

console.log(myMap.has(key1));



//Map.clear()---> removes all elements from a Map:

console.log(myMap.clear());



//Can use for....of loop to get keys and values to iterate

for (let [key, value] of myMap) {
    console.log(key, value);
}

//Get only keys:

for (let key of myMap.keys()) {
    console.log('key is', key);
}

//Get only values:

for (let value of myMap.values()) {
    console.log('value is', value);
}


//Can loop through a map using for...Each loop:

myMap.forEach((value, key) => {
    console.log('key is', key);
    console.log('value is', value);
})



//Converting a map to an array:

let myArray = Array.from(myMap);
console.log('Map to array is', myArray);

//Converting a map keys to an array:

let myKeysArray = Array.from(myMap.keys());
console.log('Map to Keys array is', myKeysArray);

//Converting a values to an array:

let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is', myValuesArray);

//




/** WEAK MAPS:
 * The weakmap is identical to the map object/ adopts the same properties
 * of Map.
 * Allows to store a collection of key-value pairs
 * The major difference is that keys of weak Map must be a type OBJECT,
 * not a primitive data type but values can be of any data type.
 */
// FUNCTIONS FOR WEAKMAP:
//set(key, value)'
//get(key)
//has(key)
//delete(key)
/*Weakmap does not have size(), so can not count how many elements are in the weakMap
Weakmap is not enumerable, which means we cannot loop over it.
 */

// Creating a WeakMap Object:'

const weakMap = new WeakMap();

console.log(weakMap);


//Adding elements using set(). only object can be a key in weakMap.

obj = {},
obj1 = {};

weakMap.set(obj, 'first obj');
weakMap.set(obj1, 'second obj');
// weakMap.set(obj1, 'third object'); //can change the element.

console.log(weakMap);

//get ()---> getting specific element in WeakMap:

console.log(weakMap.get(obj));
console.log(weakMap.get(obj1));

//delete()---> 

console.log(weakMap.delete(obj1));

//has()--->

console.log(weakMap.has(obj1));



//Another major difference is that the key of weakmap is weakly referenced.
//It means whenever an object is used as a key for weakmap, that object can be garbage collected.
//It can happen when the refernce to that object is lost (i.e. assign that object reference to NULL.) 

// Example:


let bird1 = {name: 'Parrot'};

const strong = new Map();
const weak = new WeakMap();

strong.set(bird1, 'Parrot can speak');


bird1 = null;

console.log(strong);
console.log(weak);




// let dog1 = {name: 'Snickers'};
// let dog2 = {name: 'Sunny'};

// const strong = new Map();
// const weak = new WeakMap();


// strong.set(dog1, 'Snickers is the best!');
// strong.set(dog2, 'Sunny is the 2nd best!');

// dog1 = null;
// dog2 = null;

// console.log(strong);
// console.log(weak);






