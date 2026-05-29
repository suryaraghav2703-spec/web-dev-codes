const button = document.getElementById("btn");
const stopButton = document.getElementById("stop");
function showMessage(){
    alert("button clicked");
}

button.addEventListener("click", showMessage);
stopButton.addEventListener("click", function(){
    button.removeEventListener("click", showMessage);
});