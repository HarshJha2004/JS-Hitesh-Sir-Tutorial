let score = "33abc"

// console.log(typeof (score))

let valueInNumber = Number(score) //Here all the type is shows the Number(reason of typeconversion).
// console.log(typeof (valueInNumber))
// console.log(valueInNumber)


/* 
    "33" -> Number
    "33abc" -> value NaN dikhayi.
    true => 1 ; false => 0.
*/

//In Boolean.

    let isLoggedIn = ""

    let booleanIsLoggedIn = Boolean(isLoggedIn)
    // console.log(booleanIsLoggedIn)
    
/*
    0 => false.
    1 => true.
    (empty string) "" => false.
    (Bhara hua string) "Harsh" => true.
*/

let someNumber = 33

let stringNumber = String(someNumber) //Yahan tune String() se number ko string mein convert kiya. JavaScript mein yeh conversion smoothly hota hai—number 33 ko string "33" mein badal diya.
console.log(stringNumber);
console.log(typeof (stringNumber));

