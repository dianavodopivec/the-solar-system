import { 
    clockFuncionality,
} from "./assets/scripts/clock.js";

import { earthChanges 
} from "./assets/scripts/earthChanges.js";

//To execute js code that interacts with the DOM
document.addEventListener("DOMContentLoaded", e => {
    clockFuncionality();
    earthChanges();
})

//---------- GSAP TESTING ----------//

// const $sun = document.getElementById("sun");
// console.log($sun)

// gsap.set($sun.children, { opacity: 1, y: 500, rotation: 0 }); 

// gsap.to($sun.children, {
//   opacity: 1,
//   scrollTrigger: {
//     trigger: ".container-planets",
//     start: "top center",
//     toggleActions: "restart pause pause pause",
//     scrub: true,
//   },
//   y: 0,
//   rotation: 0,
//   duration: 4,
// });