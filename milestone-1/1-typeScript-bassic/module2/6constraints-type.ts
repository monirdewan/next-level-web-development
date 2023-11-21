{
    //Constraints

    //any one dont input any data so that we have to fix data type in our generic type by using constraints by extends key word

    const addCourseToStudent = <T extends {id:number, name:string, email:string}>(student:T)=>{
        const course = "Next Level Web Development";
        return {
            ...student, course
        }
    }

    //const student3 = addCourseToStudent({emni:"emni"})

    const student1 = addCourseToStudent({
        id:111,
        name:"Mr X", 
        email:"x@gmail.com",
        devType:"NLWD"});

    const student2 = addCourseToStudent({
        id:112,
        name:"Mr Y",
        email:"y@gmail.com", 
        hasWatch:"Apple Watch"})















    //
}