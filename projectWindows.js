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
PSEUDO CODE HERE

*/

/* 
HOW IT'S SUPPOSED TO WORK

Each button opens a different project window which displays the html, css 
and js of the project within tab buttons. This can be done via a pdf file or 
with another method unknown to me. This window can also be closed via the 
close button on it's corner.
*/