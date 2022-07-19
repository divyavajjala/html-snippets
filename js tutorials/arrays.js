function makePhrases() {
    var words1 = ["24/7","multi-tier","30000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
    var rand1 = Math.floor(Math.random()*words1.length);
    var rand2 = Math.floor(Math.random()*words2.length);
    var rand3 = Math.floor(Math.random()*words3.length);
    var phrase = words1[rand1] + " " +words2[rand2] +" "+ words3[rand3];
    alert(phrase);
}
makePhrases();  
// makePhrases();//we can call the function multiple times to see morethan one phrase.

// -------------------------------Input Arrays------------------------------------------- //
var arr1 = [1, 3, 4, 2, 5];
var arr2 = [1, 3, 4, 2, 5];
var arr3 = [1, 3, 4, 2, 5];
var arr4 = [1, 3, 4, 2, 5];
var arr5 = [1, 3, 4, 2, 5];
var arr6 = [1, 3, 4, 2, 5];

// -------------------------------------------------------------------------- //

// find the sum of all array items as a number
function addArrayNumbers(total, arr) {
    
}
var sum1 = addArrayNumbers(arr1);
// test if sum1 = 15

// -------------------------------------------------------------------------- //

// find the product of all array items as a number
function multiplyArrayNumbers(arr) {
    
}
var product1 = multiplyArrayNumbers(arr1);
// test if product1 = 120

// -------------------------------------------------------------------------- //

// find out all odd array items as an array
function findOddNumbers(arr) {

}
var oddsArr1 = findOddNumbers(arr1);
// test if oddsArr1 = [1, 3, 5]

// -------------------------------------------------------------------------- //

// find out all even array items as an array
function findEvenNumbers(arr) {

}
var evensArr1 = findEvenNumbers(arr1);
// test if evensArr1 = [4, 2]

// -------------------------------------------------------------------------- //

// remove an array item at the given index and return the resultant array
function removeItem(arr, index) {

}
var removedItemArr2 = removeItem(arr2, 2);
// test if removedItemArr2 = [1, 3, 2, 5]

// -------------------------------------------------------------------------- //

// add an array item at the end and return the resultant array
function addItemAtEnd(arr, item) {

}
var addedItemAtEndArr3 = addItemAtEnd(arr3, 6);
// test if addedItemArr3 = [1, 3, 4, 2, 5, 6]

// -------------------------------------------------------------------------- //

// add an array item at the beginning and return the resultant array
function addItemAtBeginning(arr, item) {

}
var addedItemAtBeginningArr4 = addItemAtBeginning(arr4, 0);
// test if addedItemAtBeginningArr4 = [0, 1, 3, 4, 2, 5]

// -------------------------------------------------------------------------- //

// reverse an array items and return the resultant array
function reverseArr(arr) {

}
var reverseArr5 = reverseArr(arr5);
// test if reverseArr5 = [5, 2, 4, 3, 1]

// -------------------------------------------------------------------------- //

// sort an array items and return the resultant sorted array
function sortArrayNumbers(arr) {

}
var sortedArr6 = sortArrayNumbers(arr6);
// test if sortedArr6 = [1, 2, 3, 4, 5]
