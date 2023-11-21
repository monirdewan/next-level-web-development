const EventEmiter = require("events");

const myEmitter = new EventEmiter();

//Listener

myEmitter.on('birthday', ()=>{
    console.log(`Happy Birthday To You`)
})

myEmitter.on('birthday', (gift)=>{
    console.log(`I will gift a ${gift}`)
})


myEmitter.emit('birthday', 'watch');