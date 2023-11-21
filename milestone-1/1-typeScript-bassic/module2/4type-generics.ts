{

interface Developer <T,Y=null> {
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear:Number;
    }

    smartWatch:T;
    bike?:Y;
}

type Emilab = {
    brand:string;
    model:string;
    display:string;
}

const poorDeveloper : Developer<Emilab> = {
    name:'Monir',
    computer:{
        brand:"Asus",
        model:"X-255UR",
        releaseYear:2013
    },

    smartWatch:{
        brand:"Emilab",
        model:'kw66',
        display:'OLED'
    }
}


interface Apple{
    brand:string;
    model:string;
    heartTrack:boolean;
    sleepTrack:boolean;
}


interface YamahaBike {
    model:string;
    engineCapacity:string;
}

const richDeveloper : Developer<Apple, YamahaBike> = {
    name:'Rich Dev',
    computer:{
        brand:"HP",
        model:"X-25UR",
        releaseYear:2018
    },

    smartWatch:{
        brand:"apple",
        model:'Something',
        heartTrack:true,
        sleepTrack:true,
    },

    bike:{
        model:"Yamaha",
        engineCapacity:"100CC"
    }
}







}