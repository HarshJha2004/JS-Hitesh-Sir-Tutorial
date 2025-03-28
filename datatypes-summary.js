// There are two types of datatypes.
    // 1.primitive => 7 types.
        // String, symbol, Number, Boolean, Undefined, Null, BigInt
        // kisi bhi value ko unique banane ke liye symbol use hota hai.


    // 2.Non-primitive / Reference-Type.
        //Memory me iska reference direct allocate kiya ja sakta hai.
        // -Array, Objects, Functions.


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

    userTwo.email = "harshwork5546@gmial.com"

    console.log(userOne);
    console.log(userTwo);

    // For more clarity watch the stackandHeap image.
    