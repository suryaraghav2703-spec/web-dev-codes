const keyInput = document.getElementById("key-input");
keyInput.addEventListener("keydown", (event)=>{
    // the 'event' object contains information about the key press
    console.log(`key pressed: ${event.key}`);
});