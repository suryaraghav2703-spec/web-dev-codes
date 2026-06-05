function Third(){
    console.log("Third function s running (top of the stack)");
}

function Second(){
    console.log("Second function is running");
    Third();
}

function First(){
    console.log("First function is running");
    Second();
}

console.log("Starting the script");
First();
console.log("Script has finished executing");