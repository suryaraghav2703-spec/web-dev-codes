function greet() {
    console.log("hello world");
}

function welcome() {
    greet();
    console.log("welcome to the call stack example");
}

welcome();