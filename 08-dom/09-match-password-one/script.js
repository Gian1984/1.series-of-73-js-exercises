/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        let field = document.getElementsByClassName('field');

        if (document.getElementById('pass-one').value ==
            document.getElementById('pass-two').value) {
            alert("Welcome with us!")

        } else {
            document.getElementById("pass-one").setAttribute("style", "border :1px solid red");
            document.getElementById("pass-two").setAttribute("style", "border :1px solid red");

        }
    })

})();