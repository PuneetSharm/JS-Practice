function sayMyName () {
    console.log("P");
    console.log("U");
    console.log("N");
    console.log("E");
}
sayMyName; //it's the reference
// sayMyName(); //this is execution

function add(num1,num2){ //num1 & num2 are parameters
   console.log(num1+num2); 
}
// add(4,6); //4 & 6 are the arguments

// const result = add(4,9);
// console.log("Result : ", result);

function add1(num1,num2,num3) {
    // let res = num1+num2+num3;
    // return res;
    return num1+num2+num3; //if you write anything after return it will not execute
}

const res = add1(3,4,5);
// console.log("Result : ",res);

function userMessage (username = "Sharma"){
    // if(username === undefined){
    //     console.log("Please enter username")
    // }
    // else{
    //     return `${username} Just logged IN`;
    // }
    if(!username){
        console.log("Please enter username");
        return ;
    }
    return `${username} Just logged IN`;
};

// console.log(userMessage("Puneet"));
// console.log(userMessage()); //undefined Just logged IN

function calculateCartPrize(...num1){
    return num1;
}

// console.log(calculateCartPrize(200, 500, 800, 1000));

function calculatePrize(val1, val2,...num2){
    return num2;
}
// console.log(calculatePrize(200, 500, 800, 10000, 15000));

const user = {
    userName: "Puneet",
    price: 2000,
};

function handleObject(anyObject) {
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user);

// handleObject({
//     userName:"Manish",
//     price: 200,
// });

const array = [200, 400, 500, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(array));
// console.log(returnSecondValue([200, 400, 700, 600]));
