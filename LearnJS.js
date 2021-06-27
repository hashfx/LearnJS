/*
variables
operators
string()
conditionals
loops
array
functions
*/


// Display on browser Screen
document.writeln("Display using document.write()", "<br>");

// write to a tag:p of id:th
document.getElementById('th').innerHTML = "This is from external JS";

/* variables in JS */
// variables are constructed using keyword: var
function variables() {
    var num1 = 10;
    var num2 = 11;
    var str = "This is a String";
    document.writeln("Displaying variables: ", num1, " ", num2, " ", str, "<br>");
    document.writeln("Sum of ", num1, " and ", num2, " is ", num1 + num2, "<br>");
    // SAME AS : document.writeln("Sum of " + num1 + " and " + num2 + " is " + num1+num2)

    console.log("This will be printed in console of the browser", "<br>"); // often used for debugging purpose

    // Take input from floating-window in browser
    // var content = prompt("Enter Something ");
    // document.write("You have entered: ", content, "<br>");

    // // alert

    // alert("This is an alert window");
}
function operators() {
    document.write("<br>Mathematical Operations in JavaScript: <br>");

    document.write("1 + 2 = ", 1 + 2, "<br>");
    document.write("1 - 2 = ", 1 - 2, "<br>");
    document.write("1 * 2 = ", 1 * 2, "<br>");
    document.write("1 / 2 = ", (1 / 2).toFixed(2), "<br>"); // .toFixed() print off the number of digits after decimal
    document.write("1 % 2 = ", 1 % 2, "<br>");

    document.write("<br>Predefined Mathematical functions in JS", "<br>");

    document.write("2 ^ 5 = ", Math.pow(2, 5), "<br>");
    document.write("|-10| = ", Math.abs(-10), "<br>");
    document.write("sqrt(64) = ", Math.sqrt(64), "<br>");
}

function string(){
    document.write("<br>String Functions in JS", "<br>");

    var string1 = "This is a string";
    document.write(string1, "<br>");
    document.write("Length of string is ", string1.length, "<br>");
    document.write("Index of letter 'a' is ", string1.indexOf("a"), "<br>"); // Index starts at 0
    document.write("Index of word 'is' is ", string1.indexOf("is"), "<br>"); // Index starts at 0
    document.write("Sliced string between index[6] till index[15] is ", "'", string1.slice(6, 15), "'", "<br>");
    document.write("String from index[7] is '", string1.substr(7), "'", "<br>");
    document.write("String after replacing 'This' with 'These' : ", string1.replace("This is", "These are"), "<br>");
    document.write("String in Upper Case ", string1.toUpperCase(), "<br>");
    document.write("String in Lower Case ", string1.toLowerCase(), "<br>");
}

function conditionals() {
    document.write("<br>Logic, Conditionals in JS<br>")
    document.write("Relational Operators : ==,!=,<,<=,>,>= ", "<br>");
    document.write("Logical Operators : &&,|| ", "<br>");

    var age = prompt("What is Your age: ");
    document.write("Your age is: ", age, "<br>");

    // Conditionals in JS
    if (age < 18) {
        document.write("You are less than 18 years old", "<br>");
    } else if (age >= 18 && age <= 21) {
        document.write("You are between 18 and 21", "<br>");
    } else {
        document.write("You are not eligible for this Program!", "<br>");
    }

    // Switch-Case in JS
    switch (age) {
        case "18":
            document.write("You should apply for VoterID(SWITCH)", "<br>");
            break;
        case "21":
            document.write("You are 21 years old(SWITCH)", "<br>");
            break;
        default:
            document.write("You have surpassed SWITCH Case!", "<br>");
            break;
    }
}

function loops() {
    document.write("Loops in JS", "<br>");
    document.write("While Loop: ", "<br>");
    var i = 1;
    while (i <= 20) {
        document.write(i, "<br>");
        i++
    }

    document.write("Do-While Loop: ", "<br>");
    do {
        document.write(i, " This is a Do-While Statement!", "<br>");
        i++;
    } while (i >= 100);

    document.write("For Loop: ", "<br>");

    for (var j = 0; j < 5; j++) {
        document.write(j, "<br>");
    }
}

function array() {
    document.write("<br>Arrays in JS", "<br>");
    var arr = ["element0", "element1", "element2", "element3", "element4"];
    
    document.write("Elements of the array are: <br>");
    for (var a = 0; a < arr.length; a++) {
        document.write(arr[a], "<br>");
    }

    arr.push("new_element"); // inserts element at last of the array
    document.write("Array after PUSH(element is appended at last): <br>");
    for (var b = 0; b < arr.length; b++) {
        document.write(arr[b], "<br>");
    }

    arr.pop() // Last element is popped out of the array
    document.write("Array after POP(last element is popped out): <br>")
    for (var c = 0; c < arr.length; c++) {
        document.write(arr[c], "<br>");
    }

    arr.shift(); // First element is popped out of the array
    document.write("Elements after SHIFT(first element is popped out): <br>");
    for (var d = 0; d < arr.length; d++) {
        document.write(arr[d], "<br>");
    }

    arr.unshift("Google") // adds element to top of the array
    document.write("Elements after UNSHIFT(inserts values to beginning of the array): <br>")
    for (var e = 0; e < arr.length; e++) {
        document.write(arr[e], "<br>");
    }
    
    document.write("Converting Array to String: <br>");
    document.write(arr.toString());
    
    document.write("<br>Sorted array: <br>")
    var arr2 = [5, 4, 3, 2, 1];
    document.write(arr2.sort()); // converts integers to string and checks them in dictionary to find their order



}

function functions(){
    document.write("<br>Functions in JS<br>");

    function fun_name() {
        document.write("This is a Function<br>");
        console.log("Function fun_name has been executed Successfully!");
    }
    fun_name();
    function sum(a, b) {
        c = a + b;
        return c;
    }
    document.write("Sum is ", sum(50, 50), "<br>");
}

function date(){
    date = new Date();
    document.write("<br>Date is: ",date, "<br>") 
    document.write("Time in Seconds: ", date.getTime(), "<br>");
    document.write("Year is: ", date.getFullYear(), "<br>");
    document.write("Minutes are: ", date.getMinutes(), "<br>");
    document.write("Hour is: ", date.getHours(), "<br>");
    // document.write("", , "<br>");}
}


// Calling all Function
// variables();
// operators();
// string();
// conditionals();
// loops();
// array();
// functions();
date();

// document.write( , "<br>");
// document.write( , "<br>");





