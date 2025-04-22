let countClicker = document.getElementById("clicker__counter").textContent;
document.getElementById("cookie").onclick = click;
function click(){
    if(countClicker % 2 === 0) {
        document.getElementById("cookie").style.width = "150px";
        countClicker++;
        document.getElementById("clicker__counter").textContent = countClicker;
    }
    else {
        document.getElementById("cookie").style.width = "200px";
        countClicker++;
        document.getElementById("clicker__counter").textContent = countClicker;
    }
    
}