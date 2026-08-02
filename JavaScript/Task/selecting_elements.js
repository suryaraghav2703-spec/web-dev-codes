let heading = document.getElementById("mainTitle");
console.log(heading.textContent);

let paragraph = document.getElementsByClassName("info");
console.log(paragraph[0].textContent);

let card = document.querySelector(".card");
console.log(card.textContent);

const para = document.querySelector(".Info");
para.style.color = "blue";

let notes = document.querySelectorAll(".note");
notes.forEach(note => console.log(note.textContent));