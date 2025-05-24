//object literals



const Jsuser = {
    name: "Divya",
   
    age:18,
    location:"pune",
    email:"sakhareDivya123@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])

Jsuser.email = "divya@123chatgpt.com"
Object.freeze(Jsuser)
console.log(Jsuser);

Jsuser.greeting = function()
{
    console.log("Hello Js user");
    
}

Jsuser.greetingTwo = function()
{
    console.log(`Hello Js user, ${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


