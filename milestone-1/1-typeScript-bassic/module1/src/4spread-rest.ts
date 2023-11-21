{// should start typeScript with {} with culy brasses
//spread operator in array
    const bros1:string[] = ["Mosarrof", "Mamun", "Murad"];
    const bros2:string[]= ["Forad", "Faysal", "Hasan"];


    bros1.push(...bros2)

// spread operator in object

const mentor1 = {
    prisma:'Firoz',
    next:'Mizan',
    cloud:'Nahid',
}

const mentor2 = {
    typeScript:"Firoz",
    redux:"Mir Hossain",
    mongos:"Monir"
}

const mentorList = {
    ...mentor1, ...mentor2
}

//rest operator in a function

const greeatFriend = (friend1:string, friend2:string, friend3:string) =>{
    console.log(`Hi ${friend1}${friend2} ${friend3}`)
}

greeatFriend("Monir", "Mosarrof", "Mamun")

//if we need more parameter we use rest operator

const greeatFriend2 = (...friends:string[])=>{
    friends.forEach((friend:string) => console.log(`Hi ${friend}`))
}

greeatFriend2("Monir","Mosarrof","Mamun", "Murad") // now our function parameter is dynamic


}