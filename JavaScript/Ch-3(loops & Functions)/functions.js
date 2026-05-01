// maine ye lines add ki hain ab agar yahi cheej 40k baar likhi hoti or mujhe isme changes karne hote 
// for example if mujhe name change karna hota to mujhe har jagah change karna padta which is very hectic to do
console.log("Hey surya you are doing great!")
console.log("Hey surya you are awesome!")
console.log("Hey surya you are nice!")
console.log("Hey surya you are learning JavaScript!")


// so to make this code more maintainable, we can use a function
function nice(name){
    console.log("Hey " + name + " you are doing great!")
    console.log("Hey " + name + " you are awesome!")
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are learning JavaScript!")
}
nice("Shreya")
nice("shivam")

// function sum(a,b){
//     console.log(a + b)
// }
// sum(2,3)

function sum(a,b, c = 3){
    return a + b + c
}
result1 = sum(5,8)
result2 = sum(7, 5)
result3 = sum(10, 12, 1)
// console.log("The sum of these numbers is: ", result1, result2, result3)
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


//  arrow function
const func1 = (x)=>{
    console.log("This is an arrow function", x)
}
func1(34);
func1(66);
func1(100);