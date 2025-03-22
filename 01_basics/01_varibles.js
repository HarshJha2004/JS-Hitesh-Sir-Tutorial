// variable name must be reliable.
const accountId = 105536540
let accountUserName = "Harsh Jha"

// prefer not to use var because of issue in block and functional scope.
var accountPassword = "harsjha2004@"

// JS is smart if we forget to declare let, than it's still reserve a memory space but it is not a good practice.
accountCity = "Surat"
let accountState;
console.log(accountId);


// second method to print on tabular form.
console.table([accountId, accountUserName, accountPassword, accountCity, accountState])
