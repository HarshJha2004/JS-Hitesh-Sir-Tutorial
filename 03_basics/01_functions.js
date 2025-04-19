//function is a set of code that performs tasks.
    function sayMyName(){
        console.log("H");
        console.log("A");
        console.log("R");
        console.log("S");
        console.log("H");       
    }

    //call the function.
        // sayMyName()

//Create a new function which adds 2 Numbers.
    //Here when we declare a function and pass the value in this (), so it's called Parameters and when we call the function and pass the value in this () is called arguments.
    function addTwoNumbers(number1, number2){
        //This is not the right way to perform the operation.
            // console.log(number1 + number2);
            
        //2nd way => Right way.
            // let result = number1 + number2
            // return result

        //3rd way.
            return number1 + number2
    }

        const result = addTwoNumbers(3, 4)
        // console.log(result);


// some practices of function.
    function userLoginMessage(username){
        //check the condition because when the user not give any value.
        if(!username){
            console.log("Please enter a username");
            return
        }

        return `${username} just logged in`
    }

    console.log(userLoginMessage());
    

    