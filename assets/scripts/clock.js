const $containerClock = document.getElementById("clock");
const $earth = document.getElementById("earth")
let runningTime 

const clockFuncionality = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    $containerClock.innerHTML = `${hours}:${minutes}:${seconds}` 
}

const earthChanges = () => {
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 20 || hours < 22) {
        $earth.style.backgroundImage = "url(/assets/images/earth-planet-night.jpg)";
        $earth.style.boxShadow = "box-shadow: inset 15px 0px 20px -2px rgba(100, 99, 99, 0.577), inset -70px 0px 50px 0px #000000, -5px 0px 30px -4px rgb(12, 32, 40);"
    } else {
        $earth.classList.remove("earth-night");
        $earth.style.backgroundImage = "url(/assets/images/earth-planet.jpeg)";
        $earth.style.boxShadow = "none"
    }
}

runningTime = setInterval(() => {
    clockFuncionality();
    earthChanges();
}, 1000);


export { 
    clockFuncionality,
    earthChanges
};