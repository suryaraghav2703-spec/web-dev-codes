let arr = [1, 2, 3, 4, 5, 7];
// Index = 0, 1, 2, 3, 4, 5

// arr[0] = 566;
// console.log(arr);
// console.log(arr.length);

// Arrays are mutable

// arr[0] = 10;
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[4]);

//  METHODS OF ARRAYS
console.log(arr.toString());  // to convert array into string
console.log(arr.join(" - "));  // to join array elements with a separator (can write anything like and , or etc..)
console.log(arr.pop());  // to remove the last element of the array and return it

a = [1, 2, 3]
console.log(a.push("surya"));  // to add a new element at the end of the array
console.log(a);

a.shift();  // to remove the first element of the array
console.log(a);

a.unshift("shreya");  // to add a new element at the beginning of the array
console.log(a);

// shift pop ka bhai hota hai or unshift push ka bhai hota hai

delete a[1];  // to delete an element at a specific index (it will leave undefined in place of the deleted element)
console.log(a);
// a[1] is now undefined but still exists in the array there is a memory space allocated for it but without any value

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];    // but concat never change the original arrays
let a3 = a1.concat(a2);
console.log(a3);


let b1 = [7, 8, 9];
let b2 = [10, 11, 12];
let b3 = [13, 14, 15];
b1 = b1.concat(b2, b3);  // to concatenate multiple arrays together
console.log(b1);


let c = [5, 0 ,4, 1, 3, 2]; // sort will arrange the elements in ascending order
c.sort();
console.log(c);


const number = [1, 2, 3, 4, 5];
number.splice(1, 2);
console.log(number);  // to remove elements from an array at a specific index (1 is the starting index and 2 is the number of elements to remove)

number.splice(1, 0, "surya", "shreya");  // to add elements to an array at a specific index (1 is the starting index, 0 is the number of elements to remove, and "surya" and "shreya" are the elements to add)
console.log(number);

const num = [1, 2, 3, 4, 5];
num.slice(2);
console.log(num);  // to create a new array by slicing a portion of an existing array (2 is the starting index, and it will slice till the end of the array)

num.slice(1, 4);
console.log(num);  // to create a new array by slicing a portion of an existing array (1 is the starting index, and 4 is the ending index, but it will slice till index 3 because the ending index is exclusive)


// LOOPING THROUGH ARRAYS
let d = [1, 93, 5, 6, 88];
// for loop is used to iterate over the elements of an array using an index variable

for(let index = 0; index < d.length; index++){
    const element = d[index];
    // console.log(element);
    newElement = element ** 2;
    console.log(newElement);
}


// forEach loop is used to iterate over the elements of an array and execute a provided function once for each element in the array

// d.forEach((value, index, arr)=>{
//     console.log(value , index, arr);
// });


//  for in loop is used to iterate over the keys of an object (like arrays, objects, etc..)

let object = {
    a: 1,
    b: 2,
    c: 3
}
for(const key in object){
    if(object.hasOwnProperty.call(object, key)){
        console.log(key, object[key]);
    }
}



// for of loop is used to iterate over the values of an iterable object (like arrays, strings, etc..)

// for (const value of d) {
//     console.log(value);
// }


// map method is used to create a new array by applying a provided function to each element of the original array

let e = [1, 2, 3, 4, 5];
let f = e.map((value)=>{
    return value * 2;
});
console.log(f); // [2, 4, 6, 8, 10]

// filter method is used to create a new array with all elements that pass the test implemented by the provided function

let g = [1, 2, 3, 4, 5];
let h = g.filter((value)=>{
    return value % 2 === 0;
});
console.log(h); // [2, 4]


// let arr1 = [1, 13,5, 7, 11];
// console.log(arr1)
// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return True
//     }
//     return false 
// }
// console.log(arr1.filter(greaterThanSeven))

// reduce method is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b)=> {
    return a*b
}
console.log(arr2.reduce(red))

