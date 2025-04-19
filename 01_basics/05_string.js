const repoName = "Harsh Jha"
const repoCount = 10


//Bad practice.
    // console.log(repoName + repoCount + "total repo count"); 

//Good practice.it is called string Interpolation.
// console.log(`Hello my name is ${repoName} and my Github repo count is ${repoCount}`); 


// other ways to declare a string.
    const gameName = new String('FreeFire')
    // console.log(typeof gameName); //Here the String is Object.

    //Key:value pair access.
        // console.log(gameName[0])

    // console.log(gameName.__proto__);
    
    //Basic Methods Using.
        console.log(gameName.length);
        console.log(gameName.toLowerCase());
        console.log(gameName.toUpperCase());
        console.log(gameName.charAt(2));
        console.log(gameName.indexOf("e"));
        console.log(gameName.substring(0, 4));
        console.log(gameName.slice(0, 4));
        
        
    //Some extra Methods.
        const newGameName = "      Call of duty     "
        console.log(newGameName.trim()); //Remove the extra spaces and it's widely used in Input forms.
        

        
        

//saare String Methods bhi padhne hai documentation se.(Remaining)