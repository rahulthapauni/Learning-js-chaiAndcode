//Keep name easy to read
//small letter camel Casing
const accountId = 144573;
let accoutEmail = "rahul@example.com"
var accountPass = "1234567"
accountCity = "Jaipur"
let accountState; //only declared value will have undefined as a value
// undefined means we have no idea about value and the type of value

// accountId = 2  //cant be changed
console.log("Original Value");

console.table([accountId, accoutEmail, accountPass, accountCity,accountState])


console.log(accountId);
accoutEmail = "Rahul@newexample.com";
accountPass = 112233;

accountCity = "Delhi"
console.log("Modified Value");
console.table([accountId, accoutEmail, accountPass, accountCity])

const user = {
    name: "Rahul",
    age:19,
    city:"Jaipur"
}
console.table(user)

//avoid using var due to block scope and functional scope problems