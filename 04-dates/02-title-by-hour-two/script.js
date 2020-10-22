/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    (function() {

        // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
        let x = [];
        var d = new Date("2011-04-20T17:29:51.01");
        d.getHours(); // => 9
        d.getMinutes(); // =>  30

        //if (d.getHours() > 5 && d.getHours() <= 17 d.getMinutes30) {
        if (d.getHours() == 17 && d.getMinutes() < 30 && d.getMinutes() && d.getHours() > 5) {
            x = "Hello";
        } else {
            x = "Good evening";
        };



        document.getElementById("target").innerHTML = (x);
        // your code here

    })();
})();