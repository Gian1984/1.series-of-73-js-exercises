/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {


            if (document.getElementById('pass-one').value ==
                document.getElementById('pass-two').value) {
                alert("Welcome with us!")

            } else {
                document.querySelector("input").setAttribute("class", "error");
            }
        }) // your code here

})();