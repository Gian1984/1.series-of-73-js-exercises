/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {
    let cake = window.prompt("do you wanna cake? answer yes or no ");
    if (cake === 'yes') {
        alert("Congraturation!");
    } else if (cake === 'no') {
        alert("More cake for me then :p !");
    } else {
        alert("answer must be yes or no!");
    }

})();