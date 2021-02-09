"use strict";

let result;
let userinput;

// adding a eventlistener to button
document.querySelector("button").addEventListener("click", readInput);

// taking the value from the .input and making into variable as I will use at alot later.
// the variable name is given at the top of the script.
function readInput () {
    console.log ("readInput");
    userinput = document.querySelector(".input").value;
    generateOutput ()
}

function generateOutput (){
    console.log ("generateOutput");
// reading the value chosen in the dropdown
    let dropdown = document.querySelector("#dropdown").value;

// Making the first letter big
    if (dropdown === "1") {  
    const first = userinput.substring(0,1).toUpperCase();
    const second = userinput.substring(1).toLowerCase();
    result =`${first}${second}`;
// Finding the first name by finding the first spacing and trimming the rest of
    } else if (dropdown === "2") {
        const firstSpace = userinput.indexOf(" ");
        result = userinput.substring (0, firstSpace).trim;
// counting the length of the first name
      } else if (dropdown === "3") {
        const firstSpace = userinput.indexOf(" ");
        result = userinput.substring(0, firstSpace).length;
// finding the middlename by defining the first and last spaces - and trim the rest of
    } else if (dropdown === "4") {
        const firstSpace = userinput.indexOf(" ");
        const lastSpace = userinput.lastIndexOf(" ");
        const middleName = userinput.substring(firstSpace, lastSpace).trim();
        result = `The middlename starts at ${
            firstSpace + 2
          } and ends at ${lastSpace} and the middlename is ${middleName}`;
// checking if the input end with a filename - decided by true/false boolean
    } else if (dropdown === "5") {
        if (userinput.endsWith(".jpg") || userinput.endsWith(".png")) {
            result = "yes";
          } else {
            result = "No";}
// checking length of input and thereafter replacing with *
        } else if (dropdown === "6") {
            const length = userinput.length;
            result = "*".repeat(length);
// making a letter capital
          } else if (dropdown === "7") {
            const first = userinput.substring(0, 2);
            const second = userinput.substring(2, 3).toUpperCase();
            const third = userinput.substring(3, 6); 
            result = first + second + third;
// 
          } else if (dropdown === "8") {
            const splitted = userinput.split(" " && "-");
            result = "";

            splitted.forEach((split) => {
                const part1 = split.substring(0, 1).toUpperCase();
                const part2 = split.substring(1).toLowerCase();
                result += part1 + part2 + " ";
            });
              result = result.trim();
            }
    writeOutput()
}

function writeOutput () {
    console.log ("writeOutput");
    document.querySelector('.output').value = result;
}