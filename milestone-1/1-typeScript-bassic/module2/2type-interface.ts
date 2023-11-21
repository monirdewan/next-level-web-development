{
    //declar type alias
    type User1 = {
        name:string;
        age:number;
    }

    type UserWithRole1 = User1 & {role:string}

    const user2:UserWithRole1 = {
        name:"Monir",
        age:100,
        role:"50"
    }

// all premitive data type we use type alias but interface type we only use non-premitive like object
    interface User2 {
        name:string;
        age:number;
    }

    interface UserWithRole2 extends User2 {
        role:string;
    }


    const user1:User2 = {
        name:"Monir",
        age:100
    }

    const user3:UserWithRole2 = {
        name:"Monir",
        age:100,
        role:'20'
    }



    // define type using interface in a array

    type Roll1 = Number[];

    interface Roll2 {
        [index : number]:number;
    }

    const rollNumber1:Roll2 = [1,2,3];


    //define type using interface in a function

    type Add1 = (num1:number, num2:number)=> number;

    interface Add2{
        (num1:number, num2:number):number;
    }

    const add:Add2 = (num1, num3) => num1+num3;











    //
}