//stack memory is use to primitive datatype 
// Heap memory is use to  Non-primitive datatype

const { useInsertionEffect } = require("react");

let myYoutubename = "Javascript"

let anothername = myYoutubename
anothername = 'coding'

console.log(myYoutubename);
console.log(anothername);

let user ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "divya@sakharegmail.com"

console.log(userOne.email);
console.log(userTwo.email);

