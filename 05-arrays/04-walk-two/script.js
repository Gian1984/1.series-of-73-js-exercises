/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: array traversal (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//When you click the button, display on the console, one after the other, each value of the array fruits. Use the forEach method.

(function() {
    document.getElementById("run").addEventListener("click", function() {
        var fruits = [
            "apple",
            "peer",
            "strawberry",
            "tomato",
            "kiwi",
            "banana",
            "orange",
            "mandarine",
            "durian",
            "peach",
            "grape",
            "cherry",
        ];
        fruits.forEach(item => console.log(item)); // ES6

    })
})();