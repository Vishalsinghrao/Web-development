// DOCUMENT OBJECT MODEL (DOM);

console.log(document)

//NOTE SELECT THE ELEMENT
//NOTE document.getElementbyId
const heading = document.
getElementById('heading');
console.log(heading);
console.dir(heading);

//Note document.getElementByTagName
//REVIEW - getElementsbyTagname always returns html collection which looks like an array but it is not an array
const para = document.
getElementsByTagName('p');
console.log(para);
console.log(para[0]);

//TODO convert the html collection 'para' in to an array(use spread operator);
const newpara = [...para];
console.log(newpara);

newpara.forEach((el)=>{
    console.log(el.innerText);
})

//Note document.getElementByClassName
const list = document.
getElementsByClassName('special');
console.log(list);

//Note document.querySelector
const list2 = document.
querySelector('.special')
console.log(list2);
//Note document.querySelectorAll
const list3 = document.
querySelectorAll('.special')

list3.forEach((el)=>{
    console.log(el.innerText)
})
console.log(list3);

//NOTE READING TEXT FROM ELEMENTS;
//NOTE innertext , textContent , innerhtml properties available on the element

//text content
//NOTE text content gives the text as it is without applying any css or calculation
heading.textContent = 'dom';
//NOTE innertext always preserve the css
heading.innerText = 'dom2';

console.log(document.body.innerText)

const container = document.
querySelector('#container');

// container.innerHTML =
// `<h1>SERVICES</h1>`

//NOTE reading the href and src attributes of the anchor and img tag

// const a = document.querySelector
// ('#address');
// a.href = 'https://www.amazon.com';

// const img = document.querySelector
// ('#bear-photo');
// img.src = './../day08/onepiece.jpg';

//NOTE changing style using js;

heading.style.color='green';
heading.style.fontSize = '30px';
heading.style.textDecoration =
'underline'

//NOTE changing attributes using js
const input = document.
querySelector('#bear');

input.setAttribute('placeholder','enter your name');
console.log(input.getAttribute('placeholder'));

//creating new elements using js
//first you have to create a new element 
const h1 = document.createElement('h1');

//second you have to add content to it
h1.innerText = 'creating your js'
console.log(h1)
//third you have to decide where to place in our html 
container.append(h1)

//event addEventListener
const btn = document.getElementById('btn');

btn.addEventListener('click',() =>{
    const p = document.
    createElement('p');
    console.log(p);
    p.innerText = `hello this is the para`
    console.log(p);
    document.body.prepend(p)
})

//append add elements to the last
//prepend add elements to the start

document.addEventListener
('keydown',(event)=>{
    
})