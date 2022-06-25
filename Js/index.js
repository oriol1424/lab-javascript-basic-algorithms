console.log("Iteration 1: Names and Input");
console.log("------------------");

const hacker1 = "John";
const hacker2 = "Zhang";

console.log("hacker1 = "+ hacker1 + ", hacker2 = " + hacker2);

console.log("\nIteration 2: Conditionals");
console.log("------------------");

if(hacker1.length > hacker2.length){
    console.log("The driver (" + hacker1 + ") has the longest name, it has " + hacker1.length + " characters.");

} else if(hacker1.length < hacker2.length){
    console.log("It seems that the navigator ("+ hacker2 + ") has the longest name, it has " +  hacker2.length + " characters.")
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

console.log("\nIteration 3: Loops");
console.log("------------------");

console.log("3.1 Print all the characters of the haker1's name, separated by a space and in capitals. ");
let aux = "";

    //apunte no poner int i = 0; como en C y java !! aqui con let
for (let i = 0; i < hacker1.length; i++ ){
   aux += hacker1.charAt(i).toUpperCase() + " ";
}

console.log(aux);

console.log("\n3.2 Print all the characters of the navigator's name, in reverse order.");
console.log(hacker1.split("").reverse().join("").toLowerCase());

console.log("\n3.3 Depending on the lexicographic order of the strings.");

if (hacker1.toLowerCase() == hacker2.toLowerCase()){
    console.log("What?! You both have the same name?");
}else {

    if ( hacker1.toLowerCase() < hacker2.toLowerCase()){
        console.log("The driver's name goes first.");
    } else {
        console.log("Yo, the navigator goes first definitely");
    }
}
