/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let image = document.querySelector("img");
    let src = image.getAttribute("src");
    image.addEventListener("mouseenter", () => {
        image.setAttribute("src", image.dataset.hover);
    });
    image.addEventListener("mouseleave", () => {
        image.setAttribute("src", src);
    });


})();

// mouse enter / leave : simule le hover css en js.
// mouse over : quand tu calcules points de coordonnées sur une div. jamais utilisé
// mouse move : sert comme mouse over, cas précis!
// mouse out : fini obselete vielle version!!!