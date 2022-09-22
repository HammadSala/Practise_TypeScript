// Description
// Write a program to do the following

// Create a global variable in the ts file.
// Create a class called Pattern
// Inside the class create a function which takes height as a parameter with return type
// Use necessary tools(for,if, while….) in the function to create a pattern of your choice and return it.
// Do as needed to print the pattern from outside the class.

var globalV : string = " Am global";

class Pattern{
        h : number;
    height( h: number)  {
        this.h  = h;
        if ( h > 0 ) {
            console.log( " positive");
        }
        for(var i = 0; i< h ; i++) {

        }
        return h;
    }
}

var ob1 = new Pattern();
console.log ("SSSssss\nssssSSSSSS\ns");
ob1.height(4);