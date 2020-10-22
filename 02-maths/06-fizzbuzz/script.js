/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// --- In the console, for each numbers between 1 and 100 : show "fizz" if the number is a multiple of 3, 
//     "buzz" if it's a multiple of 5, "fizzbuzz" if it's both, or simply the number if it's none of these. ---

(function() {

    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            console.log('fizzbuzz');
        else if (i % 3 == 0)
            console.log('fizz');
        else if (i % 5 == 0)
            console.log('buzz');
        else
            console.log(i);

    }


})();

/* 
1 - create a for each loop for an array of number between by 1 to 100
2 - set the condition
3 - if (n % 5 = 0) && (n % 3 = 0) console.log fizzbuzz
4 - if else n % 3 = 0 then console.log fizz 
4 - if else n % 5 = 0 then console.log buzz
6 - else console.log n
*/