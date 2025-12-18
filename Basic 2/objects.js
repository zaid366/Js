//objest litreal


const mySym = Symbol ("key1")

// obj 

const JsUser = {
    name : "zaid",
    age : 18,
    location : "Pakistan",
    email :  "zaid@gmai;l.com"

    // symool
    [ mySym] = "key1"  // it will onny be symbol when the variable  in "[]"
    
}
//   how to acceses 

console.log(JsUser.name);//   way 1
console.log(JsUser["name"]) // way 2 ??  cuz onj take the variabla name as a stringe u can't accesn by " . "
console.log(JsUser(mySym));// print symbol


//  basic obj 

//how to acceses -->  console.log(JsUser.name)

// how to change   -->  conssole.log(jsser .name " ali")
  
//   how to acces symoblo -->   using [ ] squar brakits

// add funtion in obj   

JsUser.greating  = function(){
    console.log("hello  pakitan ");
    
}
console.log(JsUser.greating);//  will be undifined 

console.log(JsUser.greating());// will print " helll pakistan"


