{

    // function with generics

    const createArray = (param : string): string[] =>{
        return [param]
    }

    const createArrayWithGeneric = <T>(param :T):T[] =>{
        return [param]
    }

    const res1 = createArray("Bangladesh");

    const resGeneric = createArrayWithGeneric<boolean>(true)
type User = {
    ID:number;
    Name:string;
}
    const resGenricOBJ = createArrayWithGeneric<User>({ID:2213, Name:"Monir"})


    const createArrayWithTuple = <T, Q>(param1 :T, param2:Q):[T,Q] =>{
        return [param1, param2]
    }

    const res2 = createArrayWithTuple<string, number>("Bangladesh", 1234);

    const res3 = createArrayWithTuple<string,{name:string}>("Bangladesh", {name:"Monir"})
type User1 = {
    ID:number;
    Name:string;
}
    const resGenricOBJ1 = createArrayWithGeneric<User1>({ID:2213, Name:"Monir"})


    const addCourseToStudent = <T>(student:T)=>{
        const course = "Next Level Web Development";
        return {
            ...student, course
        }
    }

    const student1 = addCourseToStudent({name:"Mr X", email:"x@gmail.com", devType:"NLWD"});
    const student2 = addCourseToStudent({name:"Mr Y", email:"y@gmail.com", hasWatch:"Apple Watch"})











    //
}