{
    //generic type
 type GenericArray<T> = Array<T>;

    // const roolNumbr:number[] = [3,6,12];
    const roolNumbr:GenericArray<number> = [3,6,12];

    // const mentors:string[] = ["Monir", "Firoz", "Mir"]
    const mentors:Array<string> = ["Monir", "Firoz", "Mir"]

    // const boolArray: boolean[] = [true, false, true]
    const boolArray: Array<boolean> = [true, false, true]

interface User{
    name:string,
    age:number
}
const user8:GenericArray<User> = [

    {
        name:"Monir",
        age:100,
    },
    {
        name:"Mezba",
        age:20,
    },
   
]



//generic tuple

type GenericTuple<X,Y> = [X,Y];

const manush: GenericTuple<string,string> = ["Monir", "Mamun"]

const UserWithId : GenericTuple<number,{name:string, email:string}> = [123, {name:"Monir", email:"sakil@gmail.com"}]















    //
}