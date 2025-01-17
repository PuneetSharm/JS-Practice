const tinderUser = new Object();

const User = {
    email : "user@gmail.com",
    fullName: {
        userName : {
            firstName : "Puneet",
            lastName : "Sharma"
        }
    }
}

// console.log(User.fullName?.userName.firstName); //optional chaining used when getting response from API

const obj1 = {
    1: "a",
    2: "b"
};
const obj2 = {
    3: "c",
    4: "d"
};

const obj3 = {obj1,obj2};
// console.log(obj3);
const obj4 = Object.assign({},obj1,obj2); //we take empty object as target because there might be other values as well
// console.log(obj4);

const obj5 = {...obj1, ...obj2};
// console.log(obj5);

const users = [
    {
    id: 1,
    email: "p@gmail.com"
},
{
    id: 2,
    email: "pu@gmail.com"
},
{
    id: 3,
    email: "pun@gmail.com"
},
{
    id: 4,
    email: "pune@gmail.com"
}
];
console.log(users[2].email);

console.log(Object.keys(User)); //an array of keys in object
console.log(Object.values(User));//an array of values in object
console.log(Object.entries(User));//an array inside array for each key and value

console.log(User.hasOwnProperty('isLoggedIn')); // to check if that object has this property or key
