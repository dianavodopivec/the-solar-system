const $containerClock = document.getElementById("clock");
const $date = document.getElementById("date")
let runningTime 

const clockFuncionality = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    $containerClock.innerHTML = `${hours}:${minutes}:${seconds}` 
}

runningTime = setInterval(() => {
    clockFuncionality();
}, 1000);

