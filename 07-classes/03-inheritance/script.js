/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function() {
        class Animal {
            sayHello() {
                return `${this.constructor.greeting}! I'm ${this.name}!`;
            }
        }
        class Cat extends Animal {
            static greeting = "Miaouw";
            constructor(name) {
                super();
                this.name = name;
            }
        }
        class Dog extends Animal {
            static greeting = "Wouf"
            constructor(name) {
                super();
                this.name = name;
            }
        }

        let argo = new Dog("Argo");
        let toby = new Cat("Toby");
        console.log(argo.sayHello());
        console.log(toby.sayHello());
    })
})();