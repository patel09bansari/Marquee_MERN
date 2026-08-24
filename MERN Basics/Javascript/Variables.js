debugger;

// var a = 10;
// // add(10, 10);
// add("Alice");

// function add(name){
//     console.log(name);
// }

// add("Alice");
// console.log("Hello World");

// function Morning(mor){
//     console.log("Morning");
// }
// function Afternoon(aft){
//     console.log("Afternoon");
// }
// function Evening(eve){
//     console.log("Evening");
// }

// switch("Afternoon"){
//     case "Morning":
//         Morning();
//         break;
//     case "Afternoon":
//         Afternoon();    
//     break;
//     case "Evening":
//         Evening();
//         break;
// }


// function license(age, license){
// if(age >= 18){
//     if(license == true){
//     console.log("You can drive");
// }
// } else {
//     console.log("You cant drive");
// }
// }

// license(10, false);


//function callback
// function hello(name){
//     console.log(name);
// }

// function greet(callback){
//     console.log("Hello");
//     callback();
// }
// greet(hello);



//high order function
// function mul(){
//     console.log("Heey");
// }


// function parent(){
//     return function child(){
//     console.log("I am parent");
// }

// console.log(child());
// }



//closure
function outer(){
    let x = 44;
    return function inner(){
        x++;
        console.log(x);
    }
}
let z = outer();
z();
z();

//accesses address but works on values and next time works on the same address and value is updated. 
// This is called closure. It is a function that has access to its outer function scope even after the outer function has returned.

