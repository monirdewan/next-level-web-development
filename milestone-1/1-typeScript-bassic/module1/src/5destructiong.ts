{

   const user = {
        id:365,
        name:{
            firstName:"Monir",
            lastName:" Hoosain"
        },
        contactNo:"01715323634",
        address:"dhaka"
    }

    const {contactNo, name:{firstName}} = user; //when we declar a object inside object then we destructor this waya 
    const {name:{lastName:lName}} = user; // change object veriable name;


    const myBestFriend = ["Sahin", "Amran", "Shorif", "Kabir","Jamal"];

    const [, , bestFriend, ...rest] = myBestFriend;



}