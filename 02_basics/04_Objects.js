// Here are two ways to declare the Objects.There are no internal difference between them but only on interview perspective the first one is singleton Object and second one is non-Single ton / Object literals.
    // const AppleUser = new Object()
    // const tinderUser = {}

const tinderUser = {}

// put the values in Objects.
    tinderUser.email = "Harsh@google.com"
    tinderUser.id = "abc123"
    tinderUser.isLoggedIn = false

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

    const obj4 = Object.assign({}, obj1, obj2, obj3)
    console.log(obj4);
    