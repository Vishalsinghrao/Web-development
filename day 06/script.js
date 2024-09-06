// console.log(console)
//         console.log('js');

//         //value and variables ;
//         //data- types;

//         //NOTE dataTypes

//         //NOTE PRIMITIVE

//         //String
//         //Number
//         //BOOLEAN
//         //NULL
//         //UNDEFINED
//         //BigInt
//         //Symbol

//         //NOTE NON-PRIMITIVE

//         //array = []
//         //object = {}



//         //STRING
//         //variable declaration
//         //always use camelCase;

//         let firstName = 'vishal';
//         console.log(firstName)
//         console.log(typeof firstName);

//         //NUMBER TYPE

//         let firstNumber = 0;
//         console.log(firstNumber)
//         console.log(typeof firstNumber)


//         //BOOLEAN TYPE

//         let isJsFun = true;
//         console.log(isJsFun)
//         console.log(typeof isJsFun)

        
//         //NOTE UNDEFINED
//         //NOTE when you have declare the variable but not assign a value in it

//         let college ;
//         console.log(college)
//         console.log(typeof college)

//         //TYPE NULL

//         let department = null;   
//         console.log(typeof department);

       
//         //TODO - KEYWORDS USED TO DECLARE THE VARIABLES ;

//         //NOTE VAR < LET < CONST

//         //NOTE - VAR
//         //NOTE In the case of VAR we can redeclare and reassign the variable

//         //REVIEW - Reassign
//         var lastName = 'singh';
//         lastName = 'sharma';
//         console.log(lastName) 
        
//         //REVIEW - Redeclare
//         var fruit = 'mango';
//         console.log(fruit)
//         var fruit = 'grapes';
//         console.log(fruit)


//         //NOTE LET 
//         //NOTE Reassign 

//         let company = 'meta';
//         company = 'netflix';
//         console.log(company);

        

//         //NOTE CONST
//         //NOTE No Reassign  No Redeclare 

//         //const product = 'maggie';
//         //product = 'bottle';
//         //console.log(product)


//         //const veggie = 'tomato';
//         //console.log(veggie)
//         //const veggie = 'potato';
//         //console.log(veggie)

        
//         //OPERATORS

//         //NOTE ARITHMATIC (+ , - , * , % , / ,)

//         //NOTE ASSIGNMENT (= , += , -= , *= , /=)
//           let x = 5;
//           //x=x+ 5;
//           x +=5;   //equivalent (x = x+5)
//           console.log(x)

//         //NOTE COMPARRISON(== , === , != , !== , > , < , <= , >=)
//         //NOTE LOOSE EQUALITY (==)
//        const a = 5;
//        const b ='5';
//        //NOTE LOOSE EQUALITY
//        //Always avoid to use
//        console.log(a==b);

//        //NOTE STRICT EQUALITY
//          console.log(a===b);

//        //NOTE != 
//        console.log(5 != '5'); // Don't use

//        //NOTE !==
//        console.log(5 !=='5');  // use


        //NOTE LOGICAL(|| , && , !)

        //prompt , alert 
        // alert('hello')
        // prompt("Enter your name")
     
        //const firstNamee = prompt('Enter your name')
        //console.log(firstNamee)

        //username ='admin'
        //password='admin123'


        //NOTE  Create two prompt one for username and other for password, use && logical operator to check if the username === 'admin' and password === 'admin123' , if both conditions are true then print console.log('authentication Successful) else console.log('authentication Failed)


        //NOTE TYPE COERSION AND TYPE CONVERSION 

        //NOTE IMPLICIT (TYPE COERSION) when javascript internally convert the type of variable from ome datatype to another ;

        const c =3 + '3' ;
        console.log(typeof c);
        
        const bol = true + 1;
        console.log(bol)
        console.log(typeof bol)

        const d = +'5';
        console.log(d)
        console.log(typeof d)

        //NOTE TYPE CONVERSION 
        const num = 5;
        console.log(typeof String(num)) 

        const str = 'true';
        console.log(typeof Boolean(str))


        // //Note Template String;
        // const firstName = 'abc';
        // const lastName = 'xyz';

        // //const fulldetails = 'my' + ' ' + 'name' + 'is' + firstname;
        // const fulldetails = 'my name is ${firstname}'
        // console.log(fulldetails);


        // ternary operator
        // condition ? if true this will run : not true this will run 

        let age = 20;

        const a  = age> 18 ? 'you are above 18' : 'you are below 18'
        console.log(a);



        //TODO type of functions
        //Hoisting

        //function declaration
        window.mydetails('abc' , 'xyz')
        console.log(window)
        function mydetails(firstName ,lastName){
          console.log('my name is ${firstname} ${lastname}')
        }
       //called after declaration
        
        // function expression
        sum(2,3)
        const sum = function(a,b){
          return a+b;
        }
        //arrow function
        //single function
        const subs = (a,b) => b-a;
        //multi line function
        const multiply = (a,b) => {
          return a*b;
        }

        