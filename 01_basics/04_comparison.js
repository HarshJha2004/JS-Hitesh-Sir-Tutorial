//Here JS is automatically converted this string to number.
    // console.log("2" > 1)
    // console.log("02" > 1)

//The reason is an equality check(==) and comparsion operator(<,>) are work differently.Comparison convert null to a number, treating it as 0.That's why in Number 3 (null >= 0) is true and Number 1 (null > 0) is false.most time avoided this type of conversion(clean code).
    console.log(null > 0);
    // console.log(null == 0);
    // console.log(null >= 0);
    
 

