const accountId = 144553; // cannot be changed and the value is locked
let accountEmail = "imtiyaz@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai";

// accountId = 2;  // not allowed
accountEmail = "khan@gmail.com";
accountPassword = "@@@@";
accountCity = "Pune"; // without declaring using variable

let accountState;

console.log(accountId);

/*
not to use var
because of issue in block scople and functional scope 

*/
console.log([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
