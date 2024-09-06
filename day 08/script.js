//object destructuring

const details = {
    firstName : 'vishal',
    age : 2024-2004,
    address:{
        state : 'jaipur'
    }

}
// const {first name : fname,age address='jaipur'}=details

const {firstName,age,address:{state}}= details
console.log(firstName,age,state)

//NOTE spread operator

// const arr2 = [1,2,3] => ... => 1,2,3
// console.log([...arr2])


//copy a array or object

const arr2 = [1,2,3,4,5];
//const arr3 = arr2
const arr3 = [...arr2];
console.log(arr3.push(6));
console.log(arr2,arr3);

//adding two array
const clothing = ['shirt','jeans'];
const elections = ['tv','ac'];

const shoppingCart = ['tshirt',...clothing,...elections,'mobile'];
console.log(shoppingCart);


//object
const obj1 = {
    a:1,
    b:2
}

const obj2 = {
    c:3,
    d:4
}

const obj3 = {...obj1};
console.log(obj3);

//NOTE in the case of the duplicate properties later spread object will replace the property of the previous one 
const obj4 = {...obj1,...obj2}
console.log(obj4)

//note Rest parameter(...)
//NOTE it packs the remaining values in an array

const numberArray = [1,2,3,4,5,6];
const [one,two,...others] = numberArray;

console.log(one,two,others)

//destructing in the function params
function sum([a,b,c]){
    return a+b+c;
}

console.log(sum([1,2,3]))


function printnumber(...el){
    console.log(el)
    el.forEach((num)=>{
        console.log(num)
    })
}

printnumber(1,2,3,4);

//string methods
const str = 'javascript is fun';

console.log(str.length);
console.log(str[0]);

//NOTE includes
console.log(str.includes('j'));


//NOTE slice
// console.log(str.slice(2,5));
console.log(str.slice(5,1)); //we will get empty string

//NOTE substring
console.log(str.substring(5,1)); //we will get empty string

console.log(str.charAt(9));
console.log(str.replace('is', 'are'));


const newStr = '   hello   ';

console.log(newStr.trim());

console.log(newStr.indexOf('h'));
console.log(newStr.indexOf('l'));

console.log(newStr.startsWith('e'));
console.log(newStr.endsWith('i'));

//split method convert an string into an array
const str4 = 'javascript is fun';
console.log(str4.split('').reverse().join(''))

//Math object

//abs
console.log(Math.abs(-3));

//round 
console.log(Math.round(-1.5));

//trunc
console.log(Math.trunc(3.4));

//floor
console.log(Math.floor(4.7));
console.log(Math.floor(-4.7));

//ceil
console.log(Math.ceil(1.2));

//min,max
console.log(Math.min(1,2,4));
console.log(Math.max(1,2,4));

//random
const randomNumber = Math.trunc(Math.random() * 10);
console.log(randomNumber);

//date object
const date = new Date();
console.log(date)

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`${hours}:${minutes}:${seconds}`);

console.log(date.toDateString());
console.log(date.toLocaleTimeString());

