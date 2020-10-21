/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        let num = document.getElementById("numbers").value;
        let numArray = num.split(', '); // split string on comma space
        let x = numArray.map((i) => Number(i)); // array into integer
        alert(x.sort((a, b) => a - b)); // ascending order

        // your code here

    });

})();

// Put the value of id numbers inside a variable
//transformer ma valeur in a array 
//passar string en numero 
//ordener numero de l'array de manier croissant