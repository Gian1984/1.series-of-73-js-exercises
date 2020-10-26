/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//When you click the button, operates the following transformations on the Set fruits : 
//remove the "apple" and the "cerise", add a "banana" and a "kiwi".
//Finally, display the Set's result in the console.

//https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Set

(() => {
    document.getElementById("run").addEventListener("click", function() {
        const fruits = new Set([
            "apple",
            "pear",
            "strawberry",
            "tomato",
            "orange",
            "mandarin",
            "durian",
            "peach",
            "grape",
            "cherry",
        ]);
        fruits.delete("apple");
        fruits.delete("cerise");
        fruits.add("banana");
        fruits.add("kiwi");
        console.log(fruits)
    })
})();