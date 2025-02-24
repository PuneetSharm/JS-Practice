function setUserName(username){
    //cpmplex DB calls
    this.username = username;
};
function createUser(username, email, password){
    setUserName.call(this, username); //to hold the reference we use call method
    this.email = email;
    this.password = password;
};

const user = new createUser("Puneet", "puneet@email.com", "123");
console.log(user);