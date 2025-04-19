//Create an array.
    const cars = ["BMW", "Mercedes", "Ferrari", "Jaguar"]

//Access the value of the array.
    // console.log(cars[0])

//other ways to declare the array.
    const superHeros = new Array("Shaktiman", "Doreamon", "Shinchan")

// Array Methods.
    cars.push("Buggati", "Swift")
    // console.log(cars);

    // In POP operation the last value is deleted.
    // console.log("After using POP operation.")
    cars.pop()
    // console.log(cars);
    
    
    // Shift and unshift method PUSH and POP ki tarah hi kaam karta hai.Ye mostly TODO projects banane ma kaam atta hai.ye elements ko sabse aage me rakh deta hai.
    // cars.shift("Buggati")
    // console.log(cars);
    // cars.unshift()
    // console.log(cars);
    
    // console.log(cars.includes("Swift"));
    // console.log(cars.indexOf("Jaguar"));
    
    // slice and splice => Read the documentation.
        const numArr = [1, 2, 3, 4, 5]
        console.log(numArr.slice(1, 3));
        
