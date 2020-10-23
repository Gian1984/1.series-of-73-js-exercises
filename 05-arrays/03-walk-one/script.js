/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//When you click the button, display in the console, one after the other (use a loop), each value of the fruits array.

(function() {
    document.getElementById("run").addEventListener("click", function() {
        var fruits = [
            "apple",
            "pear",
            "raspberry",
            "tomatos",
            "kiwi",
            "banana",
            "orange",
            "mandarin",
            "durian",
            "peache",
            "grap",
            "cherry",
        ];
        let myfruits = fruits.length;
        for (var i = 0; i < myfruits; i++) {
            console.log(fruits[i]);
            // your code here
        }
    })
})();