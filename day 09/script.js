//NOTE named import
import {firstName , address} from './index.js' ;
//NOTE default import
import hello from './index.js'



console.log(firstName, address) ;
hello() ;



console.log(window);

setTimeout(() => {
  console.log('hello');
}, 3000);

const clrInterval = setInterval(() => {
  console.log('run in every 1 sec');
}, 1000);

//to clear the execution of the setInterval
clearInterval(clrInterval);

//event loop ;
//call stack;
//execution context ;
//global execution context ;
//callback queue ;

//NOTE callback ;

// function first(callback){
//     console.log(callback)
// const d = 'hello ' ;
// callback(d);
// }

// function second(data){
//     console.log(data)
// }

// first((data)=>{
// console.log(data)
// })

//when next step is dependent on previour one in the case of the callback leads to callback hell ..

// function step1(callback){
//    setTimeout(()=>{
//   console.log('step1 complete');
//   callback();
//    },1000)

// }

// function step2(callback){
//    setTimeout(()=>{
//   console.log('step2 complete');
//   callback();
//    },1000)

// }

// function step3(callback){
//    setTimeout(()=>{
//   console.log('step3 complete');
//   callback();
//    },1000)

// }
// function step4(){
//    setTimeout(()=>{
//   console.log('step4 complete');

//    },1000)

// }

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })

// //Promises :

// // promises = placeholder ,it is a js object
// //promises = always return from a function
// //promises have different stages => fulfilled , rejected

// //creating a promise

const willYouPassInExam = new Promise((resolve, reject) => {
  reject('no');
});
console.log(willYouPassInExam);

// console.log(fetch('https://restcountries.com/v3.1/all'))

function data() {
  return new Promise((resolve, reject) => {
    const data = 'failed to fetch data';
    reject(data);
  });
}

console.log(data());
data()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('run everytime');
  });

//REVIEW  in the case of the promise fulfilled we have to handle with .then() method
//REVIEW in the case of the promise is rejected we have to handle with .catch() method
//REVIEW finally() will always run in both cases.

fetch('https://restcountries.com/v3.1/all')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//async await ;
//new version of promise by using async await your code look more like synchronous line by line

//NOTE async await both are keywords
//NOTE to use the await keyword you always have to make the function asynchronous by using async keyword before it ;

//NOTE REGULAR PROMISES
//  fetch('https://restcountries.com/v3.1/all').then((res)=>{
// return res.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

//NOTE ASYNC AWAIT ;

const fetchData = async () => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}; 

fetchData();

//NOTE FETCHING MULTIPLE APIS CALL SIMULTANEOUSLY


//NOTE PROMISE.ALL method ;

//NOTE when using async await 

//NOTE STEP-1 create a function and make it async

const apikey = '909d6461103c15e65a08fdc29010e158'
const city1 = 'Tokyo'
const city2 ='London'
const city3 = 'Mumbai'

const url1 = https//api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apikey}
const url2 = https//api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apikey}
const url3 = https//api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apikey}


const fetchWeatherData = async () => {

const [res1,res2,res3] = await Promise.all([fetch(url1),fetch(url2),fetch(url3)])

console.log(res1,res2,res3)
//pasrse the data from the body 
const data1 = await res1.json() ;
console.log(data1) ;
const data2 = await res2.json();
console.log(data2);
const data3 = await res3.json();
console.log(data3)
}

fetchWeatherData() ;


// //NOTE : Protoypes in javascript ;
// const obj = {
//   name : "ritesh"
// }

// console.log(obj._proto_) ;

// const animal = {
//   eats : true,
//   walk(){
//     console.log('is walking')
//   }
// }
// const rabbit = {
//   run : true,
//   _proto_ : animal
// }

// //NOTE Object.create creates an empty object and sets the prototype of the newly created object to the value we have passed in the create method ;
// const lion = Object.create(animal) ;
// console.log(lion)
// console.log(lion.eats)



// // we can also use this
// rabbit._proto_ = animal ;

// console.log(animal)
// console.log(rabbit)
// console.log(animal.eats)
// console.log(rabbit.eats)


//ways to create an object ;

//constructor functions ;

function Animal(name){
    this.name = name ;
  //   this.walk = function(){
  //     console.log(${this.name} is walking)
  //   }
  }
  
  //NOTE we can directly set methods on the prototype of the animal which are then available to the all the instance we are going to create with the animal.
  
  Animal.prototype.walk = function(){
      console.log(`${this.name} is walking`)
  }
  
  //ways to call constructor function
  //always call with new keyword ;
  
  const rabbit = new Animal('rabbit')
  console.log(rabbit)
  
  const lion = new Animal('lion');
  console.log(lion.walk())
  
  
  console.log(rabbit._proto_)
  
  
  const arr = [1,2,3,4];
  console.log(arr) ;
  
  //another way to create an array in the js
  const arr2 = new Array();
  // console.log(arr2)
  //NOTE directly saving methods on the prototype;
  Array.prototype.laugh = function(){
      console.log('haha')
  }
  
  console.log(arr2.laugh()) ;