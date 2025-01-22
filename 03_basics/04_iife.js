//IIFE- Immediately invoked function expressions
(function chai() { //named IIFE
    console.log(('DB CONNECTED'));
})();

//To avoid getting polluted by global scope
( () => console.log("DB Connected"))();
