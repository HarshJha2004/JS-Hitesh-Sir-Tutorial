const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//In o/p here the dc_heros array consider as a element,but we also access on that inside.
    // marvel_heros.push(dc_heros)
    // console.log(marvel_heros);

//Accessing the 3 element insider elements.
    // console.log(marvel_heros[3][1]);

//*merge the two array.
    let combineArr = marvel_heros.concat(dc_heros)
    // console.log(combineArr);
    
    //2nd way.
    const all_new_heros = [...marvel_heros, ...dc_heros]
    // console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//Combine all array and return the new array in consistent way.
    const real_another_array = another_array.flat(Infinity)
    // console.log(real_another_array);


//check it is array or not ()
    console.log(Array.isArray("Hitesh"))
    
//other more ways to create an array.
    // console.log(Array.from("Hitesh"))

    // console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

//From and of both are create array.
    // console.log(Array.of(score1, score2, score3));




