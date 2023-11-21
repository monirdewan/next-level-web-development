{

   //array of object

type User = {
    id:number;
    name:string;
}

   const users: Array<User> = [

    {
        id:12,
        name:"Mezba",
    },
    {
        id:22,
        name:"Sakil",
    },
    {
        id:33,
        name:"Rabi",
    },
   ]

//T Array of Object

   function getPropertyFromArray<T, K extends keyof T>(array:T[], key:K) : T[K][]{
        return array.map((obj)=> obj[key])
   }

// console.log("Extracted Names :", getPropertyFromArray(users, "name"))

// console.log("Extracted Id :", getPropertyFromArray(users,"id"))

// Problem 2

const keyValueArray : [string, any][] = [
    ["id", 23],
    ["name", "Monir"],
    ["IsMarried", true]
]

function arrayToObject<T extends string, U>(array:[T,U][]):Record<T, any>{
    const transfromObject = array.reduce((finalObj, [key, value])=>{
        finalObj[key] = value;
        return finalObj
    }, {} as Record<T,U>);
    return transfromObject;
}

// console.log(arrayToObject(keyValueArray))



// problem 3

const addFunction = (...rest:number[]):number=>{
   let sum = 0;
   
   rest.forEach((number)=>{
    sum = sum+number;
   })
   return sum
}

console.log(addFunction(1,2,3,4))






}