const bulle = document.getElementById("bulle");

window.addEventListener("mousemove", (e) => {
    bulle.style.visibility = "visible";
    bulle.style.top = e.clientY + "px";
    bulle.style.left =  e.clientX + "px";
});
