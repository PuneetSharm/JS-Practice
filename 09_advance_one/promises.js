const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    // DB calls, crptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);
});

promiseOne.then(() => {
    console.log('Promise Consumed');
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then(() => {
    console.log('Async 2 resolved');
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Chai", 
        email: 'chai@example.com'})
    }, 1000)
});

promiseThree.then((user) => {
    console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Puneet", password: "123"});
        }
        else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((myUserName) => {
    console.log(myUserName);
})
.catch((e) => {
    console.log(e);
})
.finally(() => {
    console.log('The promise is either resolved or rejected');
});

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Puneet", password: "123"});
        }
        else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
    console.log(response);
}
catch (error) {
    console.log(error);
}
};

async function getAllUsers () {
   try {
    const response  = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
   } catch (error) {
    console.log('E: ', error);
   }

};

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));