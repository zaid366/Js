//  stack (  primitive  ) &  Heap  ( non primitive)

//  stack 

let myName = "zaid" //  it  will store  in a stack like structure

let newName = myName
 let anotherName = "ali"

 console.log(myName);
 console.log(anotherName);
 
 


// heap   wher ever u chnge in hear memory it will  change in orignal too
let userOne ={
    emailID : "zadi@ahd",
    UpiId : 123,

}
 
let newUser = userOne
newUser.emailID = "name@gamil.com",
console.log(userOne.emailID);
console.log(newUser.emailID);

