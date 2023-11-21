{
    //type assertion  if we can define the type better than typescript that called type assertion

    let anything : any;
    anything = "Next Level Web Development";

    anything = 222;

    (anything as number)

    const kgToGm = (value:string | number): string | number| undefined =>{
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)*1000;
            return `The converted value is: ${convertedValue}`
        }
        if(typeof value === 'number'){
            return value * 1000;
        }
    }

    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string;

    //for try catch error -- you have to make type

    type CustomError = {
        message:string;
    }
    try{

    }catch(error){
        console.log((error as CustomError).message);
    }











    //
}