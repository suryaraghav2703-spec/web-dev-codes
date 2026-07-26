 document.getElementById("outer").addEventListener("click", () => {
      alert("Outer Div (Bubbling)");
 });

document.getElementById("inner").addEventListener("click", () => {
     alert("Inner Div (Bubbling)"); 
});

 document.getElementById("btn").addEventListener("click", () => {
     alert( "Button Clicked");
 });