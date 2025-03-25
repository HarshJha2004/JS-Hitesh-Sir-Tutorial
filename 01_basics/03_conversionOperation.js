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
// console.log(stringNumber);
// console.log(typeof (stringNumber));

//********************Operations******************************************/

    //Simple Operations.
    let value = 3
    let negValue = -value
    // console.log(negValue);

    // console.log(2+2);
    // console.log(2-2);
    // console.log(2*2);
    // console.log(2**3);
    // console.log(2/2);
    // console.log(2%2);

//Concatenation operation.

    let str1 = "Harsh"
    let str2 = " Kumar"

    let str3 = str1 + str2
    // console.log(str3);
    
// kuch convention.

    //JS me jis type ki value pehle ayyi uska converison sab me hoga(by hitesh sir).But mujhe essa smzjh ayya ki jo string hai usse print kar diya and jisme mathematical equation perform ho sakta hai ussme kiya and phir string ke saath concatenate kar diya.   
    console.log("1" + 2);
    console.log(1 + "2");
    console.log("1" + 2 + 2);
    console.log(1 + 2 + "2");

    //Iska answer true and false ayega kyunki yaha (+) ek arithmetic means number operation ko dikhata hai lekin interesting ki ye sab code faltu hai haam company production code likh rhe hai so code hamara(clean, readable) rehna chahiye haam koi paheli bujho game nhi khel rha hai.
    // console.log(+true);
    // console.log(+"");
    

    
    
    