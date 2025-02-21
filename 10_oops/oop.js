const user = {
    username: "Puneet",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user details from Database");
    }
}; //object literal

// console.log(user.loginCount);
// console.log(user.getUserDetails());

const promiseOne = new Promise();
const date = new Date(); // new is the constructor function

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //return this;
}

const userOne = new User("Puneet", 12, true); //1st - new creates an empty object or we can say instance
const userTwo = new User("Shilpa", 11, true); //2nd step - constuctor function call because of new keyword
//3rd step - this keyword - all the arguments written are injected  
console.log(userOne.constructor); // it is a reference 