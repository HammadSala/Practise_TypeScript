// Description
// Write a program to do the following.
// Create a global variable and assign some value to it
// Create a function without return type and print the global variable value from the function
// create a variable in the function and try to print it from outside the function.
var global_Variable = "Am a global one";
var funcReturn = function () {
    var isnideFucntion = 10;
    console.log(typeof global_Variable + " " + global_Variable);
};
funcReturn();
