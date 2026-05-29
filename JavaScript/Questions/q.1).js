// 1. select both element
const statusText = document.getElementById('statue-text');
const actionButton = document.getElementById('action-button');
// 2. Add the event Lsitener to the button
actionButton.addEventListener('click', () =>{
    // 3. his callback function runs on click
    statusText.textContent = "Button was clicked!";
});