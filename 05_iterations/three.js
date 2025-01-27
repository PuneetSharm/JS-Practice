//for of 

const arr = [1,2,3,4,5];

for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello world";
for (const greet of greetings) {
    // console.log(`Each char is : ${greet}`);
}

//maps

const map = new Map(); //it's known for it's unique values
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("UK", "United Kingdom");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ` :-> `, value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key , value] of object) { //objects are not iterable using for Of loop
    // console.log(key, value);
}