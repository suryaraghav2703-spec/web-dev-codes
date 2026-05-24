// without preventDefault
document.getElementById("myform").addEventListener('submit', function(e){
    alert("Form submitted with automatically");
});

// with preventDefault
document.getElementById("Myform").addEventListener('Submit', function(e){
    e.preventDefault(); // stops page reload
    alert("Form submitted with preventDefault");
})