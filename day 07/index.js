// 'use strict'
// //note use strict mode;

// age =5;
// console.log(age);


// function sum(a,a,b){
//     return a+a+b;
// }

// console.log(sum(1,2,3))

//NOTE type of console;

// console.error("this is an error");
// console.warn('this is a warning');


// // using console.time you can calculate the time of any operation
// console.time('timestamp');
// console.log('hello')
// console.timeEnd('timestamp');


// //Non primitive data types;

// const fruits =['mango', 'papaya', 'grapes', 'guava', 'orange'];
// console.log(fruits.length)
// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]);


// //NOTE PUSH METHOD
// //REVIEW - ADD AN ELEMENT TO THE END OF THE ARRAY
// //REVIEW ALWAYS RETURN THE LENGTH OF THE NEW ARRAY

// const pushOutput = fruits.push
// ('blueberry');

// console.log(pushOutput);
// console.log(fruits);


// //NOTE POP METHOD;
// //REVIEW - used to remove the element from the last
// //REVIEW - always return the popped or deletef element

// const output = fruits.pop();
// console.log(output);
// console.log(fruits)

// //note 3 unshift method 
// // review used to add element to the starting of the array
// // review always returns the length of the array
// const unshiftoutput = fruits.unshift
// ('pomengranate');

// console.log(unshiftoutput);
// console.log(fruits);

// //note shift method 
// // review used to remove element to the starting of the array

// const shiftoutput = fruits.shift();

// console.log(shiftoutput);
// console.log(fruits);

// //NOTE INCLUDES METHOD 
// //REVIEW - Check element is exists in an array , returns true or false ;
// const includesOutput = fruits.includes('blueberry');
// console.log(includesOutput)


// //NOTE OBJECTS
// // key:value
// const myDetails = {
//     firstname : 'Vishal',
//     age : 2024-1997,
//     'two hundred'  : 200 
// }
// console.log(myDetails['two hundred']);
// console.log(myDetails);
// // update key value in the object
// //Dot notation
// myDetails.firstname = 'xyz';
// console.log(myDetails);

// //NOTE to add a new property;
// myDetails.friend = 'abc';
// console.log(myDetails)

// //DOT notation
// console.log(myDetails.firstname);
// console.log(myDetails.friend);

// //Bracket notation
// let a = 'age'
// console.log(myDetails['firstname']);
// console.log(myDetails[a]);


// functions in objects
// const mydetails = {
//       firstname : 'vishal' ,
//       age : 2024-2004,
//       fullDetails : function(){
//         console.log('my name is ${this.firstName} and my age is ${this.age}')
//       }
// }

// // note this keyword => in the case of the object it always point to the object in which it is used

// //bracket notation
// let a = 'age'
// console.log(mydetails[firstName]);




//remaining array methods

const arr = [1,2,3,23,4,5,6];


//note slice(startIndex , endIndex) to extract a part of the array

// const slicedOutput = arr.slice(1,4);
// console.log(slicedOutput);
// console.log(arr);



//note slice(Index, deletecount , newelement) add , remove elements;
// also modifies the original array
// const splicedOutput = arr.splice(2,2,8);
// console.log(splicedOutput);

// //note slice method do not mutate original array
// console.log(arr)

// NOTE - forEach
//NOTE callback function
//NOTE the method which accepts a callback function is called higher order method

//Note arrow ()=>{}
//NOTE function(){}

// Foreach always return "undefined"
const forEachOutput = arr.forEach((el)=>{
    console.log(el*2)
})
console.log(forEachOutput);

//Note - Map(Higher order methods)
//NOTE - used to perform some transformation ont the array always accepts a callback and return a new array which is the result of the transformation we applied in the callback 
const mappedOutput = arr.map((el)=>{
    return el*2;
})

console.log(mappedOutput);
console.log(arr);


//NOTE filter (higher order method);
const filterOutput = arr.filter((el)=>{
    return el>2;
})

console.log(filterOutput);
console.log('original',arr);

const products = [{
    name : 'tv' , 
    category : 'electronics'
}]



// const filteredProduct = product.filter({
//     return 
// })



//Note Find method(Higher order method)
const findOutput = arr.find((el)=>{
    return el > 2
})
console.log(findOutput)

//NOTE reverse


//NOTE sort method
const sortedOutput = arr.sort((a,b)=>{
    return a-b;
})

console.log(sortedOutput);
console.log(arr);


//findIndex(higher order method)
const findIndexOutput = arr.findIndex((el)=>{
    return el>2
})

console.log(findIndexOutput);

//Every (higher order method)
const everyOutput = arr.every((el)=>{
    return el>2
})

console.log(everyOutput);

//NOTE reduce method
//NOTE used to reduce the array in to single value

const reducedOutput = arr.reduce((accumulator , el)=>{
    console.log(accumulator,el)
    return accumulator + el
},0)


console.log(reducedOutput);

const items = [{
    name : 'tshirt' , quantity : 2 ,
    price : 500 ,
    name : 'mobile' , quantity : 2 ,
    price : 50000
}]

const reducedPrice = items.reduce((accumulator,item)=>{
    return accumulator + (item.quantity * item.price)
},0)

console.log(reducedPrice);

//Note Object methods

const country = {
    name : 'India',
    capital : 'New delhi' ,
    language : 'english'
}

//object.keys()

const objectkeys = Object.keys(country);
objectkeys.forEach((key)=>{
    console.log(`${key} : ${country[key]}`)
})


//object.values

const objectValues = Object.values(country);
console.log(objectValues)


//object.assign(target , source)
const country2 = {
    language : 'hindi'
}

Object.assign(country,country2);
console.log(country)


// object.freeze
// note when you use object.freeze new properties cannot be added
// note and existing properties are not modified
Object.freeze(country);

country.name = 'us';
console.log(country);

// NOTE Destructing ES6 feature
const pro = ['tv','mobile','shirt'];


// const tv = pro[0];
// console.log(tv)
//NOTE in the case of array

const [tv,mobile,shirt] = pro;
console.log(tv,mobile,shirt)