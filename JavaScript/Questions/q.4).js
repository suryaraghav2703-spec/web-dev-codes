const hoverbox = document.getElementById('hover-box');

// listner for when the mouse enters the element
hoverbox.addEventListener('mouseover', () => {
    hoverbox.style.backgroundColor = 'lightblue';
});

// listner for when the mouse leaves the element
hoverbox.addEventListener('mouseout',() => {
    hoverbox.style.backgroundColor = 'white';
});