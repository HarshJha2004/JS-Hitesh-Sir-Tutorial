/*if we want to take mastery in JS then this 2 topics is important.
1.Objects
2.Events*/

// making an Object. This way of making called is Object literals.
    const JsUser = {
        // Yaha pe jo name hai vo string ki tarah treat ho rha ha defaulty so that's reason ham logo ne usse "" nhi diya.
        name : "Harsh Jha",
        email : "harsh@work.com",
        age : 18,

    }

// Change the value of an object.
        JsUser.email = "harshwork5546.com"
//Freeze the Object to not change the value.
    Object.freeze(JsUser)
    
// Two ways to print an Object. 
    console.log(JsUser.name);
    console.log(JsUser["email"])
    
    
    // Declaring a symbol.
    const mysym = Symbol("key1")

// jabhi constructor se banega tab sinleton banega. Ye bhi hamne ek object hi banaya same
    // Object.create 