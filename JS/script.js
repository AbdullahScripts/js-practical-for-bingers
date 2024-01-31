//  Hello Message to User

// window.onload = function() {

//         let name = prompt("What is your Good Name");
//         if (name != null) {
//             document.getElementById("helloUser").innerHTML = "Good Day! Dear " + name + " Thanks for Visiting our Page"
//             document.getElementById("helloUser").style.textTransform = "capitalize"
//             document.getElementById("helloUser").style.color = "white"
//         }

//     }
// -------------------------------------------------------------------------------------------------------------------------
// clear btn statement
document.getElementById("statementBtn").onclick = function() {
    document.getElementById("originalStatement").innerHTML = " ";
};
// output btn statement
document.getElementById("outputBtn").onclick = function() {
    document.getElementById("outputResult").innerHTML = " ";
};

// Concatenation of Strings
function someString() {
    let userName = "";
    var message = "Salaam ";
    var bager = "!";
    alert(message + userName + bager);
    document.getElementById("originalStatement").innerHTML =
        "Using the plus operator +, the code combines—concatenates elements into a message <br>  let userName = 'Ali Abbas';<br>var message ='Thanks';<br>  var bager = '!';<br> alert(message + userName + banger);";
    document.getElementById("outputResult").innerHTML =
        "If you put numbers in quotes, JavaScript concatenates them as strings rather than adding them.<br>For example alert('2'+'2') will give result 22 so be aware of concatenation and addition operation(+) in JavaScript";
}
// Prompt ask Name from User
function askUser() {
    var name = prompt("What is Your Name", "Abdullah");
    var address = prompt("Where Do you live");
    if (name && address != null) {
        alert(
            "Good Day " +
            name +
            " To live in " +
            address

        );
    }
}


// Comparison Operator
function comparison() {
    document.getElementById("originalStatement").innerHTML =
        "Comparison operators are used in logical statements to determine equality or difference between variables or values, the table below explains the comparison operators symbols:<br>(==)	equal to<br> (===)	equal value and equal data-type<br>(!=)	not equal<br>(!==)	not equal value or not equal data-type<br>(>)	greater than<br>(<)	less than<br>(>=)	greater than or equal to<br>(<=)	less than or equal to";
}


// if else  condition

function ifElse() {
    let Name = prompt("What is Your Name");

    if (Name != "") {
        let Age = +prompt("What is Your age");
        if (Age >= 18) {
            alert(Name + " You are young so you can drive a car");
        } else {
            alert(Name + " You are not young ");
        }
    }
}
//Testing Sets of Conditions
function testSet() {
    let name = prompt("What is Your Name");
    if (name != "") {
        let age = +prompt("What is Your age"); // When You want to get a number value in prompt you will use + sign before it
        if (age != "") {
            let weight = +prompt("What is Your weight");
            if (weight != "") {
                // Code to be executed Now.
                if (age >= 18 && weight <= 72) {
                    alert("You are Fit");
                } else if (age >= 18 && weight <= 82) {
                    alert("You are not fit.You need Exercise for a healthy diet");
                } else {
                    alert("You are not adult.This is for 18+");
                }
            } else {
                alert("Enter Your weight");
                return;
            }
        } else {
            alert("Enter Your name and age correctly please");
            return;
        }
    } else {
        alert("Please Enter Your Name");
        return;
    }
}
//Nested if Statement
function Nested() {
    document.getElementById("originalStatement").innerHTML =
        "Nested If functions, meaning one If function inside of another, allow you to test multiple criteria and increases the number of possible outcomes.Above we apply a lot of nesting in Testing sets of Condition button.You can check in code for better understanding";

}

// Login Portal
function login() {

    let administrator = prompt("ENTER ADMINISTRATOR NAME OF THIS COMPUTER");
    if (administrator == "") {
        alert("Enter admisistrator name of this computer");
        return;
    }
    let password = +prompt("ENTER ADMINISTRATOR PASSWORD ");
    if (administrator === "Muahmmad Abdullah" && password === 2211) {
        alert("Login Successfully");
    } else {
        alert("Login Failed");
    }
}