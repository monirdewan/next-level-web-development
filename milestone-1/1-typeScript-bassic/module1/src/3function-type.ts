function num(num1:number, num2:number):number{
    return num1+num2
}

{
const addArrow = (num1:number, num2:number):number=> num1+num2;

// if any function declar in a object that call method

const poorUser = {
    name:'Monir',
    balance:0,
    addBalance(balance:number):string{
        return `my new blance is ${this.balance + balance}`;
    }
}


const arr:number[] = [1,4,12];
const newArr:number[] = arr.map((elem:number):number =>elem*elem)

}