// var arr1 = [1,2,3,4,5];
// var mul = 1;
// function multiplyArrayNumbers(arr){
//     for(i=0; i<arr1.length; i++){
//         mul*=arr1[i];
//     }
//     // return mul;
// }
// var mul1 = multiplyArrayNumbers(arr1);
// console.log(mul1);

// var arr1 = [1,2,3,4,5];
// var even = [];
// var odd =[];
// function findOddNumbers(arr){
//     for(i=0; i<arr1.length; i++){
//         // odds = odds/arr1[i];
//         if((arr1[i]%2)!=1){
//             even.push(arr1[i]);
//         //    console.log("even numbers" + evens ) ;
//         }
//         else {
//             odd.push(arr1[i]);
//             // console.log("odd numbers" + odds);
//         }
//     }
// }
// var numbers = findOddNumbers(arr1);
// console.log(even +"," + odd);

var arr1  = [1,3,4,2,5];
var index = [];
var numbers = [];
function removedItemArr1(arr){
    for (i=0; i<arr1.length; i++){
        if(arr1[i]==arr1[2]){
           index.push(arr1[i]); 
        }
        else {
            numbers.push(arr1[i]);
        }
    }
}
var arr = removedItemArr1(arr1);
console.log(numbers);

// var arr1 = [1,3,4,2,5];
// function addedItemAtEnd(arr){
//    arr1.push(6);
// console.log(arr1); 
// }
// var item = addedItemAtEnd(arr1);

// var arr1 = [1,3,4,2,5];
// function addItemAtBeginning(arr){
//     arr1.unshift(0);
//     console.log(arr1);
//     }
// var item = addItemAtBeginning(arr1, 0);


// var arr1 = [1,3,4,2,5];
// arr1.reverse();
// console.log(arr1);

// var arr1 = [1,3,4,2,5];
// arr1.sort();
// console.log(arr1);

// let myVar = 5;
// myVar += 5;
// console.log(myVar);

// const myArray = [1,2,3,4];
// const ourArray = myArray.unshift(0);
// console.log("is"+ourArray);
// console.log(myArray);
  
// let outerWear = "t-shirt";
// function myOutFit(){
//     let outerWear = "sweater";
//     return outerWear;
//     console.log(outerWear);
// }
// myOutFit();
// console.log(outerWear);    //doubt//

// let sum = 0;
// function myFunction(num){
//     sum = sum+num; // doubt
// }
// myFunction(3);
