/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
//Inside the element with id "target", create an HTML table with 10 columns and 10 rows, containing the tables of multiplication from 1 to 10.

(function() {

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    document.getElementById("target").insertBefore(tbl, null);
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 1; i < 11; i++) {

        var row = document.createElement("tr");

        for (var j = 1; j < 11; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(i * j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);


    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");

})();