{


    //generic constraint with keyof operator

type Vehicle = {

    bike:string;
    car:string;
    ship:string;
}


type Ouner = "bike" | "car" | "ship"; // manually away

type Owner2 =  keyof Vehicle


const person1 : Owner2 = "bike"

const user = {
    name:"mar. Persian",
    age:26, 
    address:'ctg'
}


const getPropertyValue = <X,Y extends keyof X>(obj:X, key:Y)=>{
    return obj[key]
}

const result1 = getPropertyValue(user, 'name')














    //
}