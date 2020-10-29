/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let column;
    let row;
    let array = document.createElement("table");

    array.setAttribute("id", "table");
    document.getElementById("target").insertBefore(array, null);
    for (let i = 1; i <= 10; i++) {
        row = document.createElement("TR");
        row.setAttribute("id", "tr-" + i);
        document.querySelector("#table").appendChild(row);
        column = document.createElement("TD");
        document.querySelector("#tr-" + i).appendChild(column);

    };

})();