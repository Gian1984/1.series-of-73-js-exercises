/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 100 + 1));
        }
        for (let j = 1; j < 11; j++) {
            document.getElementById("n-" + j).innerHTML = arr[j - 1];
        }
        document.getElementById("min").innerHTML = Math.min(...arr);
        document.getElementById("max").innerHTML = Math.max(...arr);
        let sum = arr.reduce(function(a, b) { return a + b; }, 0);
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum / arr.length;
    })
})();