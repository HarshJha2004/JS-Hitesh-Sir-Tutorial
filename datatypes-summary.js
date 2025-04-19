// There are two types of datatypes.
    // 1.primitive => 7 types.
        // String, symbol, Number, Boolean, Undefined, Null, BigInt(n)
        // kisi bhi value ko unique banane ke liye symbol use hota hai.


    // 2.Non-primitive / Reference-Type.
        //Memory me iska reference direct allocate kiya ja sakta hai.
        // -> Array, Objects, Functions. ->Hitesh sir ne kaha tha in sab ka type function hai.

        //Array Create.
             const cars = ["BMW", "Mercedes", "Ferrari"]

        //Create an simple object.
            let myObj =  {
                    name : "Harsh Jha",
                    age : 18,
                    EnrollmentNumber : 20030106021
                }

              
                
    //BigInt.
        const bigNumber = 20030106021n
        // console.log(typeof(bigNumber));
    
    //Symbol
        const id = Symbol('123')
        const anotherId = Symbol('123')

        // console.log(id == anotherId);
        
        //Here the Symbol use for uniqueness.so we give the same value in symbol but than it's return value is not same.so that's called is used for uniqueness.

    //Datatype Check.(Query)
        // console.log(typeof String);
        // console.log(typeof Number);
        // console.log(typeof BigInt);
        // console.log(typeof Boolean);
        // console.log(typeof null);
        // console.log(typeof undefined);
        // console.log(typeof Object);
        // console.log(typeof Symbol);
        // console.log(typeof Array);
        // console.log(typeof Function);
        
        
        
        




// *************************Memories*******************************************
    // types of 2 memories : Stack(Primitive), Heap(Non-primitive).
    // Stack me value ki copy milti hai so usse change kar sakte hai but Heap me direct value ka reference milta hai.

    //example of stack.
        // let userEmail = "Harshjha5546@gmail.com"
        // let anotherEmail = userEmail

        // anotherEmail = "harshwork5546@gmail.com"

        // console.log(userEmail);
        // console.log(anotherEmail);

    // Heap Example
    
    let userOne = {
        email : "Harshjha5546@gmail.com",
        upiId : "kotak@ybl"
    }

    let userTwo = userOne

    userTwo.email = "harshwork5546@gmail.com"
    userTwo.upiId = "BOI@ybl"

    console.log(userOne);
    console.log(userTwo);

    // For more clarity watch the stackandHeap image.
    



