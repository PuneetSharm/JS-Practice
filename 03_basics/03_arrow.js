const user = {
    username : "Hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Puneet";
// user.welcomeMessage();

// console.log(this); //gives empty object
//but in browser it refers to window object

// function chai () {
//     console.log(this);
// }
// chai();

// function chai () {
//     let username = "Puneet";
//     console.log(this.username);
// }
// chai();

// const chai = () => { 
//     let username = "Puneet";
//     console.log(this);
// }
// chai();

//Pure arrow function 
const addTwo= (num1,num2) => {
    return num1+num2;
}

// const addThree = (num1,num2,num3) => num1+num2+num3; //this is known as implicit return
const addThree = (num1,num2,num3) => (num1+num2+num3); // if you use curly braces you will have to write return
console.log(addThree(3,4,5));