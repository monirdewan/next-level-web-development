{

//union types

type FrontendDeveloper = "fakibazDeveloper" | 'juniorDeveloper'; // string literal type with union; 

type FullstackDeveloper = "frontendDeveloper" | 'expertDeveloper';

//make a type using top two type
type Developer = FrontendDeveloper | FullstackDeveloper;
const newDeveloper:FrontendDeveloper = 'juniorDeveloper';


type User = {
    name:string;
    email?:string;
    gender:'male' | 'female';
    bloodGroup:"O+" | "A+" | "AB+"
}

const user1:User = {
    name:"Monir Hossain",
    gender:'male',
    bloodGroup:'O+'
}

// INTERSECTION
type FrontendDeveloper1 = {
    skills: string[];
    designation1:'Frontend Developer'
}

type BackendDeveloper1 = {
    skills: string[];
    designation2:'Backend Developer'
}

type FullstackDeveloper1 = FrontendDeveloper1 & BackendDeveloper1;

const fullstackDeveloper1 : FullstackDeveloper1 = {
    skills:["HTML","CSS", "Express"],
    designation1:"Frontend Developer",
    designation2:"Backend Developer",
}

//
}