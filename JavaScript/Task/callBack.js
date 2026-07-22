function finishHomework(callback){
    console.log("doing homework");

    setTimeout(()=>{
        console.log("homework done!");
        callback(); //call the next task
    },2000);
}

function goToPlayground(){
    console.log(" Now Going to the playground");
}
finishHomework(goToPlayground);