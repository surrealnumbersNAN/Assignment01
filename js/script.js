"use strict";
// STEP 1

/*
Convert the following highlighted identifiers to Camel Case notation
*/

let someMonth;
function theMonth() {
    return ""
}
let currentMonth;
let summerMonth;
let myLibraryFunction;


/*
Give an example of a numerical literal expression, 
a string literal expression, 
a boolean literal expression, 
and null literal expression
*/
1;
'Hello World';
false;
null;
let numericalLiteral = 1;
let stringLiteral = "RawString";
let isFalse = false;
let isNull = null;

// Step 3
function someFunc() {
    return "someName"
}
let yearMD = "2025" + "03" + "22"
let whatIsValue = someFunc()



// Step 4

// let strFirstName;
// let strLastName;
// let strAddress; 
// let strCity;
// let strState;
// let numZipCode; // strZipCode;
// let numAge;
// let strRefferalSource;
// let boolContactable; // bMayWeContactYou;


// Step 5
// let strFirstName = someFunc()
// let strFirstName = "Bobby"
// let strFirstName = "B" + "obby"

// let numZipCode = 12345

// let oneless = 12344
// let numZipCode = oneless + 1
// let numZipCode = oneless += 1

// let boolContactable = true;
// let boolContactable = !true;
// let boolContactable = false;


// Step 6
// var myFirstVariable;
// myFirstVariable =  2 + "1"
// console.log(myFirstVariable)

// Step 7
// var myVarOne = false + " NotTrue";
// console.log(myVarOne) 
// var myVarTwo = 0 + false;
// console.log(myVarTwo)


// Step 8

// Below is not valid string because inner single quote ought to be escaped.
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'

// //Example
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)



// // Step 9
// let declaredNull = null;
// console.log(declaredNull)

// let someRandomValueonTheStack;
// console.log(someRandomValueonTheStack)


// Step 10
// var undefd;
// console.log(typeof "This might be a str");
// console.log(typeof 1234);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefd);




// Step 11
// alert("Hello " + "Ted Saintvil" + ", welcome to the JavaScript class!");

//Step 12
// var name = "Ted Saintvil";
// var message = "Hello " + `${name}` + ", welcome to the JavaScript class!";
// alert(message);

// Step 13
// var name = "Ted Saintvil";
// var course = "JavaScript";
// var message = "Hello " + `${name}` + `, welcome to the ${course} class!`;
// alert(message);

// Step 14
// var name = "Ted Saintvil";
// var course = "JavaScript";
// var CRLF = "\n";
// var message = "Hello " + `${name}.` + CRLF + `welcome to the ${course} class!`;
// alert(message);

// Step 15 
// let value = prompt("This is something");
// console.log(value);



// Step 17
// var x = 10;
// var y = 20;
// console.log(x + y);

// Step 18
// var x = 20;
// x += 20;
// console.log(x);


// Step 19
// var x = 20;
// x *= 5;
// console.log(x)

// Step 20
// var x = 20 % 3;
// x /= 1;
// console.log(x)

// Step 21
// var email = "someValue@mail.com";
// var badPassword = "12345";

// var last = email.split("@")
// function testTruthy(splitEmail, badPassword){
//     if (splitEmail == null) {
//         return "do nada";
//     }
//     return last[1] == "mail.com" && badPassword.length > 4;
// }
// console.log(testTruthy(last, badPassword))


// Step 22
// var email = "someValue@mail.com";
// var badPassword = "12345";

// var last = email.split("@")
// function testTruthy(splitEmail, badPassword){
//     if (splitEmail == null) {
//         return "do nada";
//     }
//     return last[1] == "mail.com" && badPassword.length > 4;
// }
// console.log(testTruthy(last, badPassword));

// Step 23
var email = "someValue@mail.com";
var badPassword = "12345";

var last = email.split("@")
function testFalsey(splitEmail, badPassword){
    return badPassword.length <= 4 || last[1] != "mail.com" ;
}
console.log(testFalsey(last, badPassword));