var scores = [60, 50, 60, 58, 54, 54,58, 50, 52, 54, 48, 69,34, 55, 51, 52, 44, 51,69, 64, 66, 55, 52, 61,46, 31, 57, 52, 44, 18,41, 53, 55, 61, 51, 44];
var output;
// var i=0; //using a while loop
// while (i<scores.length){
//     output=("Bubble solution #"+ i+"score:" + scores[i]);
//     console.log(output);
//     i++;
// }
var highScore=0;
for (i=0; i<scores.length; i++){ //using for loop
    output=("Bubble solution #"+ i+"score:" + scores[i]);
    console.log(output);
    if(scores[i]>highScore){
       highScore=scores[i]; 
    }
}
console.log("bubble tests:"+ scores.length);
console.log("highest bubble score:" + highScore);
var bestSolutions = [];
for (var i=0; i<scores.length; i++){
    if(scores[i]==highScore){ //to find the highest scores in scores array (in index 11 value 69 and in 18 also has the same value 69 when scores[i] mathes the highscore 69 it displays) 
        bestSolutions.push(i);
    }
}
console.log("solutions with the highest score:"+ bestSolutions);




