/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Clicking on the button, display inside the console, a list of the object's keys from person. 
//Then, also displays the list of values for the same object.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

(() => {
    document.getElementById("run").addEventListener("click", function() {
        const person = {
            lastname: "Delnatte",
            firstname: "Pierre-Antoine",
            nickname: "Leny",
            birthDate: "08-05-1985",
            city: "Liège",
            status: "married",
        };

        console.log(Object.values(person));

        for (const [key] of Object.entries(person)) {
            console.log(`${key}`)
        }


        // Or, using array extras
        Object.entries(person).forEach(([key, value]) => {
            console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
        });


    })
})();