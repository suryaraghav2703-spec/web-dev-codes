document.getElementById("outer").addEventListener("click", () => {
alert("Outer Div (Capturing)"); 
 }, true); // true = capturing phase
document.getElementById("inner").addEventListener("click", () => {
alert("Inner Div (Capturing)");
}, true); // true capturing phase
document.getElementById("btn").addEventListener("click", () => {
 alert("Button Clicked");
}); 