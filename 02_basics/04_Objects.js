// Here are two ways to declare the Objects.There are no internal difference between them but only on interview perspective the first one is singleton Object and second one is non-Single ton / Object literals.
    // const AppleUser = new Object()
    // const tinderUser = {}

const tinderUser = {}

// put the values in Objects.
    tinderUser.email = "Harsh@google.com"
    tinderUser.id = "abc123"
    tinderUser.isLoggedIn = false

//also we change the value of an Object.
    tinderUser.email = "Harshwork@customer.in"

    // console.log(tinderUser)

// Nesting in Objects is Completely Possible.
    const anotherUser = {
        email : "Harsh@google.com",
        fullname : {
            userfullname : {
                firstname : "Harsh",
                lastname : "Jha"
            }
        }
    }

// Access all the Objects using (.) Notation.
    // console.log(anotherUser.fullname.userfullname)

// Merge the Objects.
    const obj1 = {
        1 : "a",
        2 : "b",
        3 : "c"
    }

    const obj2 = {
        4 : "a",
        5 : "b",
        6 : "c"
    }

    const obj3 = {
        7 : "a",
        8 : "b",
        9 : "c"
    }

//  Here we merge in 2 ways of Objects.
    //const obj4 = Object.assign({}, obj1, obj2, obj3)
        // console.log(obj4); 
    //2nd way.
        const obj4 = {...obj1, ...obj2}
        // console.log(obj4)

// get the Object key and value.mostly in upcoming project this task we perform repetedly.
    // console.log(Object.keys(tinderUser));
    // console.log(Object.values(tinderUser));
    
//Destructing the Objects.
    const courseInformation = {
        courseName : "JS in hindi",
        courseInstructor : "Hitesh sir",
        coursePrice : "999",
        courseLanguage : "Hindi"
    }

    //Here when we access the Objects then we know to use the (.) to access them,it's absolutely right, but here are 2nd ways to access them and mostly also use for clean code.this much use in React.
    const {courseInstructor} = courseInformation
    // console.log(courseInstructor);

    //and in case i want to the courseInstructor name is much big and i want to put the small name then in Object {courseInstructor:name}.
 
//++++++++++++++++++++++++++++++ API +++++++++++++++

    //In simple language the meaning of API apna kaam kisi aur ke maathe mad dena!.API pehele XML me likhi jaati thi but ab JSON me likhi jaati hai.

    // {
    //     //JSON me key:value dono string me likhi jaati hai.
    //     "myName" : "Harsh Jha",
    //     "study" : "BTECH in cs",
    //     "College" : "ADIT"
    
    // }

    //API Objects and array dono form me mil sakti hai.
    [
        {},
        {},
        {}
    ]

    

    