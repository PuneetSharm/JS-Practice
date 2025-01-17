/*if we declare objects using constructors are called Singleton 
Meaning it's only one object of it's kind
Object.create --> this creates singleton
*/

// object literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Puneet",
    "Full Name" : "Puneet Kumar Sharma",
    [mySym] : "myKey1",
    age : 20,
    location : "Bangalore",
    email : "puneetSharma@gmail.com",
    isLoggedIn: false
};

// console.log(JsUser.location);
// console.log(JsUser["Full Name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Puneet@gmail.com";
// Object.freeze(JsUser); //doesn't allow you to change the object values
JsUser.email = "Puneet@google.com";
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting = function ( ){
    console.log("Hello User");
}

// console.log(JsUser.greeting); // gives function reference
// console.log(JsUser.greeting()); // gives not a function
JsUser.greetingTwo = function() {
    console.log(`Hello User, ${this.name}`);
}

console.log(JsUser.greetingTwo());
