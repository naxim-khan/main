var bulb = document.getElementById("bulb");
var button=document.getElementById("btn");

function handleClick(event) {
    if (bulb.src.includes("bulb_off.png")) {
        bulb.style.opacity = 0;
        setTimeout(() => {
            bulb.src = "bulb_on.png";
            bulb.style.opacity = 1;
        }, 500); // wait for 500ms to start transition
        button.innerHTML = "OFF";
    } else {
        bulb.style.opacity = 0;
        setTimeout(() => {
            bulb.src = "bulb_off.png";
            bulb.style.opacity = 1;
        }, 500); // wait for 500ms to start transition
        button.innerHTML = "ON";
    }
}

button.addEventListener('click', handleClick);