/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*In the script, I have an array computers, which makes an inventory of the computers of a class.
Unfortunately, this inventory is incomplete.
So I created the object defaultProps, which contains the necessary properties and their default values.

When you click on the button, display in the console the contents of the table computers, with, for each element,
all the necessary properties. Attention : if an element already has a value for a property,
do not overwrite it with the default value! */


(() => {
    document.getElementById("run").addEventListener("click", function() {
        const computers = [
            { id: "0001", available: false, user: "leny", os: "macOS" },
            { id: "0002", available: false, user: "Nicolas" },
            { id: "0003" },
            { id: "0004", os: "Windows" },
            { id: "0005" },
            { id: "0006", os: "macOS" },
            { id: "0007" },
            { id: "0008" },
            { id: "0009", available: false, user: "Anthony" },
        ];
        const defaultProps = {
            available: true,
            os: "linux",
            user: null,
        };

        for (let i = 0; i < computers.length; i++) {
            if (computers[i].available == undefined) {
                computers[i].available = defaultProps.available;
            }
            if (computers[i].os == undefined) {
                computers[i].os = defaultProps.os;
            }
            if (computers[i].user == undefined) {
                computers[i].user = defaultProps.user;
            }
        }
        console.log(computers);


    })
})();