/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let confirm = "no";
    while (confirm != "yes") {
        let age = window.prompt("What's your age? :");
        let gender = window.prompt("What's your gender? :");
        let town = window.prompt("What's your town? : ");

        alert("Are your info correct? :" + age + " " + gender + " " + town);

        confirm = window.prompt("confirm? yes or no bitch");
    }
})();