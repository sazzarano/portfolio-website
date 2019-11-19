const popupButton = document.getElementById("todo-popup-btn");
const popupWindow = document.getElementById("todo-popup");
const closeButton = document.getElementsByClassName("popup-close-btn")[0];

popupButton.onclick = () => {
    console.log("Popup Button has been clicked!")
    popupWindow.style.display = "block";
}

closeButton.onclick = () => {
    console.log("Popup Button has been closed!")
    popupWindow.style.display = "none";
}

/* 
This script is no longer necessary. It is here for archival purposes or reuse only.
*/