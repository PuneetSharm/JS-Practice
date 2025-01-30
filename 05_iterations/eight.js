// reduce

const myNums = [1, 2, 3];

const myTotal =myNums.reduce((acc, currentValue) => {
    console.log(`acc : ${acc}, currentValue : ${currentValue}`);
    return acc + currentValue;
}, 0);

// console.log(myTotal);

const myCourses = [
{
    itemName:"js Course",
    price: 2999
},
{
    itemName:"py course",
    price: 999
},
{
    itemName:"mobile dev course",
    price: 5999
},
{
    itemName:"Data Science course",
    price: 12999
}
];

const priceToPay = myCourses.reduce((acc, item) => (acc + item.price) , 0);
console.log(priceToPay);