const user = {
    username: "Divya",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to website`);
        
    }
}


//user.welcomeMessage()
//user. username = "Disha"
//user. welcomeMessage()

//console.log(this);

//function chai()
//{
    //let username = "Om"
   // console.log(this.username);
    
//}
//chai()

const chai = () =>
{
    let username = "Om"
    console.log(this.username);
    
}
chai()

//const addTwo = (num1, num2) =>
//{
  //  return num1 + num2
//}console.log(addTwo(3,4))

//console.log(addTwo(3,4));


//const addTwo = (num1, num2) =>  num1 + num2

//console.log(addTwo(3,4))

const addTwo = (num1, num2) => ({username: "Divya"})
console.log(addTwo(3,4))
