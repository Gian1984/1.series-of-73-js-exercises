/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        let bday = document.getElementById("dob-day");
        let bmonth = document.getElementById("dob-month");
        let byear = document.getElementById("dob-year");
        let a = bday.value;
        let b = bmonth.value;
        let c = byear.value;

        let today = new Date();

        let age = today.getFullYear() - c;
        let m = today.getMonth() - b;
        if (m < 0 || (m === 0 && today.getDate() < a)) {
            age--;
        }
        alert("Your age is:" + age);
    })

})();