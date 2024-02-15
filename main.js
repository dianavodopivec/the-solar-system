import { clockFuncionality } from "./assets/scripts/clock.js";
const $title = document.querySelector("h1");
const $title2 = document.querySelector("h2");
const $geolocationContainer = document.getElementById("geolocation-info");
/*import { earthChanges 
} from "./assets/scripts/earthChanges.js";*/
/*import { earthChanges } from "./assets/scripts/earthChanges.js";*/
const $title = document.querySelector("h1");
const $title2 = document.querySelector("h2");

//To execute js code that interacts with the DOM
document.addEventListener("DOMContentLoaded", e => {
  clockFuncionality();
  //earthChanges();
});
const lenis = new Lenis();

lenis.on("scroll", e => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add(time => {
  lenis.raf(time * 350);
});

gsap.ticker.lagSmoothing(0);

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

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-scroll",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
  },
});

tl.to(".wrap-scroll", {
  x: "-300vw",
  ease: "none",
  duration: 2,
});

gsap.ticker.lagSmoothing(0);

gsap.to($title, {
  opacity: 1,
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top, bottom",
    end: "+=400",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -80,
  scale: 0.95,
});

gsap.ticker.lagSmoothing(0);

gsap.to($title, {
  opacity: 1,
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top, bottom",
    end: "+=400",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -80,
  scale: 0.95,
});

gsap.to($title2, {
  opacity: 1,
  scrollTrigger: {
    trigger: ".container-planet",
    start: "top, bottom",
    end: "+=400",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -100,
  scale: 0.95,
});

async function getGeolocation() {
  if (navigator.geolocation) {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );

      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      const country = data.address.country;
      const state = data.address.state;
      const town = data.address.town;
      console.log(data.address);
      const formattedCountry = country.toUpperCase().slice(0, 3);
      $geolocationContainer.innerText = `${formattedCountry} ${state} ${town}`;
    } catch (error) {
      console.error(error.message);
    }
  }
}

getGeolocation();

