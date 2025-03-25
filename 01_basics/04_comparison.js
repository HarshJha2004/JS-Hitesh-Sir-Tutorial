// Here JS Type Coercion.Agar ek operand string hai aur doosra number hai, toh JS string ko number mein convert karne ki koshish karta hai but mostly time haam iss type ke conversion ko avoid hi karte hai(clean code).
    // console.log("2" > 1)
    // console.log("02" > 1)

//The reason is an equality check(==) and comparsion operator(<,>) are work differently.Comparison convert null to a number, treating it as 0.That's why in Number 3 (null >= 0) is true and Number 1 (null > 0) is false.most time avoided this type of conversion(clean code).
    // console.log(null > 0);
    // console.log(null == 0);
    // console.log(null >= 0);
    

