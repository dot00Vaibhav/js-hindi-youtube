const accountId = 144553;
let accountEmail = "vaibhav@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"//bad practice

// accountId = 2 //not allowed
accountEmail = "vbhvtwr@gmail.com"
accountPassword = "010122"
accountCity = "Bengaluru"


console.log(accountId);

/*
Prefer not to use "var"
beacuse of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity])