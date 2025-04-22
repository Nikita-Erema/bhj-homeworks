let secund = document.getElementById("timer");
let countSec = secund.textContent;
console.log(countSec)
let countInterval = setInterval(() => {
    countSec--;
    secund.textContent = countSec;
    if(countSec <= 0) {alert("Вы победили в конкурсе!");
        clearInterval(countInterval);
    }
},1000);