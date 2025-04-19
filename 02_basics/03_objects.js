//Objects are declare by two types : 1)Literals, 2)Constructor(singleton).

//making an Object.This way of making Object making is called Object literals.
    const JsUser = {
        //Here the name which is called key in Object is treat as String in Object.like this "name", but we don't write bcoz JS do itself.
         name : "JS",
         age : 18,
         location : "whole World",
         email : "JS@customer.in",
         isLoggedIn : false,
         "Payment Method" : "UPI",
         
    }

//Accessing the Object.
    // console.log(JsUser.email); 
    //Here are 2nd way of accessing the Object.it is called square bracket Notation.
        // console.log(JsUser["Payment Method"]);

//create Symbol.
    const mySym = Symbol("Key1")
    
    
    //In Interview Questions are asked use the symbol in Object.so here below we performed.
    let myBio = {
        name : "Harsh Jha",
        age : 20,
        location : "Surat",
        email : "Harsh@work.com",
        //used the symbol.It is written in [],because it's a syntax structure.
        [mySym] : "mykey1"
    }

    //Access the Symbol.
        // console.log(myBio[mySym]);
        
//Changing in the Objects value.
    myBio.name = "Shivam Jha"

//Frezze the Object.
    // Object.freeze(myBio)

    
    