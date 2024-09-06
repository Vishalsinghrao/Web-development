




//submit event
const form = document.getElementById('form');
const bear = document.getElementById('bear');
const password = document.getElementById('password');
console.log(password)
const text = document.getElementById('text');
const range = document.getElementById('rangeinput');
console.log(range)
form.addEventListener('submit',(event)=> {
    //NOTE to prevent the default behaviour of the form which is it automatically refresh the page when we try to submit the form..
    event.previewdefault();
    console.log(bear.value)
    console.log(password.value)
    console.log(text.value)
    console.log(range.value)
    
})

//Asynchronous js



