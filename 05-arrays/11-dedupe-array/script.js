/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// When you click the button, remove the duplicates from the array fruits and display the resulting array in the console. Each value should be there one time, and one time only.
// https://www.codegrepper.com/code-examples/whatever/array+dedupe+javascript+

(function() {
    document.getElementById("run").addEventListener("click", function() {
        const fruits = [
            "cerise",
            "durian",
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "fraise",
            "durian",
            "pêche",
            "cerise",
            "raisin",
            "cerise",
        ];


        console.log(fruits.filter((a, b) => fruits.indexOf(a) === b))


    })
})();