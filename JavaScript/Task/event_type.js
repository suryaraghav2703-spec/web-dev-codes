document.getElementById("mybutton").addEventListener("click", function(){
    alert("button clicked");
});


document.getElementById("mybtn").addEventListener("mouseover", function(){
    alert("button hovered");
});

// listner for any key press on the whole document
document.addEventListener("keydown", function(event){
    alert("key pressed:" + event.key);
});

document.addEventListener("keyup", function(event){
    alert("key released:" + event.key);
});