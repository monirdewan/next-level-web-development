{

//

const age:number = 18;

if(age >= 18){
    console.log("adult");
}else{
    console.log("Not Adult");
}


const isAdult = age >=18?"adult":"Not adult";
console.log({isAdult});

//nullish coalescing operator

//null / undefined --> decision making

const isAuthenticated = "";

const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated?isAuthenticated:"Guest"
console.log({result1},{result2});



//optional chaining
type User = {
    name:string;
    address:{
        city:string;
        road:string;
        presetAddress:string;
        permanentAddress?:string;
    }
}

const user: User = {
    name:"Monir",
    address:{
        city:'dhaka',
        road:"Mirpur 12",
        presetAddress:"Mirpur"
    }
}

const permanentAddress = user?.address?.permanentAddress ?? "No permanent Address";
console.log({permanentAddress})


//

}