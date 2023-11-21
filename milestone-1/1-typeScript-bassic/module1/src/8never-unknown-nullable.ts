{
    //nullable types / unknown types

    const searchName  = (value: string | null) =>{
        if(value){
            console.log("Searching");
        }else {
            console.log("There is nothing to search")
        }
    }

    searchName("Monir")
    searchName(null)


    // unknown type use typeof
    const getSpeedInMeterPerSecond = (value:unknown ) => {
        if(typeof value === "number"){
            const convertedSpeed = (value * 1000)/3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`)
        }

      else  if(typeof value === 'string'){
            const valueInNumber = value.split(" ")
            const [result, unit] = value.split(" ")
            const convertedSpeed = (parseFloat(result)*1000)/3600;
            console.log(valueInNumber)
            console.log(convertedSpeed)
        }else{
            console.log("Wrong Input")
        }

        
    }

    getSpeedInMeterPerSecond(1000)
    getSpeedInMeterPerSecond(`1000 khm^-1`)
    getSpeedInMeterPerSecond(null)


//never type if we sure that this function never return that time we use never type

const throwError = (msg:string):never =>{
    throw  new Error(msg)
}

throwError("Muskhil se error hogaya")



    //
}