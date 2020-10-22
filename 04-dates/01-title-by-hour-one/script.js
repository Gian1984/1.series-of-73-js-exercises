/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let x = [];
    let d = new Date("2011-04-20T19:30:51.01");
    d.getHours(); // => 9

    if (d.getHours() > 5 && d.getHours() < 18) {
        x = "Hello"
    } else {
        x = "Good evening"
    };

    document.getElementById("target").innerHTML = (x);
    // your code here

})();