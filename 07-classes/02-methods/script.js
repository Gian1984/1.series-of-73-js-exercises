/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Create a Person class. It will have two properties, firstname and lastname, and method sayHello, which will return 
//"Hello, [firstname] [lastname]!".When the button is clicked, create an instance of the Person 
//class and return the value of the sayHello method inside the console.

(() => {
    document.getElementById("run").addEventListener("click", function() {

        class Person {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
            sayHello() {
                return "Hello, " + this.firstname + " " + this.lastname;
            }
        }

        let Person1 = new Person("Gianluca", "Tiengo");
        let Person2 = new Person("Bryan", "Gustin");

        console.log(Person1.sayHello());
        console.log(Person2.sayHello());


    })

})();