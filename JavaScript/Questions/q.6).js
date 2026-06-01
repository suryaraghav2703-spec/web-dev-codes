const form = document.getElementById("myform");
form.addEventListener('submit', function(event){
     event.preventDefault(); // prevent the default form submission
     alert("Form submitted!");
});