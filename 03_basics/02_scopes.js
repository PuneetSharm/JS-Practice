let a = 2500;
const b = 200;
// var c = 25;
//global scope
var c = 300;
if (true) { //block scope
let a = 18;
const b = 20;
// console.log("A : ",a);
}

//global scope in node and browser are different

// console.log(a);
// console.log(b);

function one(){
    const username = "Puneet";

    function two () { // two can access all the variables 
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); //gives error website is not defined
    two();
}

// one();

if (true) {
    const username = "Puneet";
    if(username === "Puneet"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //cannot access it. Therefore, gives error
}

// console.log(username); //cannot access it 

/******interesting ***********/

function addone(num){
    return num + 1;
}

addone(5);

const addTwo = function(num){ //function Expression
    return num + 2;
}

addTwo(5);

addThree(5); //gives error "Cannot access before initialization"
//this is part of hoisting
const addThree = function(num){ //function Expression
    return num + 2;
}

// addThree(5);