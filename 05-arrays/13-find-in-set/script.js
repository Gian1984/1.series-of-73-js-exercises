/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//When you click the button, display (in the console) the number of 
//the people in the Set people. Next, show if Alexandre is part of the Set.

// https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Set convert set to array 

(() => {
    document.getElementById("run").addEventListener("click", function() {
        const people = new Set([
            "Nicolas",
            "Nick",
            "Leny",
            "Alexandre",
            "Charlène",
            "Laureline",
            "Esther",
            "Simon",
            "Lucas",
        ]);
        let mySet2 = people;
        console.log(mySet2.size); // 4
        console.log("Is it true that Alexandre is between people? Answer is: " + people.has("Alexandre")); // true

    })

})();