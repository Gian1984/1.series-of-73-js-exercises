/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("pass-one").addEventListener("input", () => {
        let str = document.getElementById("pass-one").value;
        let confirm;
        document.getElementById("pass-one").setAttribute("maxlength", 8)
        let patt = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{2})(?=.{8,})");
        if (!patt.test(str)) {
            return confirm = document.getElementById("validity").innerHTML = "Not ok";
        } else {
            return confirm = document.getElementById("validity").innerHTML = "Ok";
        }

    })
})();