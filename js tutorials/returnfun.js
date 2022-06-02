// var radius = 5.2;
// calculateArea(radius);
// function calculateArea(r){
//     var area;
//     if(r<=0) {
//         return 0;
//     }
//     else{
//         area= Math.PI *r*r;
//         return area;
//     }
// }
// // var theArea= calculateArea(radius);
// console.log("the area is:" + area);


// var avatar = "generic";
// var skill = 1.0;
// var pointPerLevel = 1000;
// var userPoints = 2008;
// function getAvatar (points){
//     var level = points/pointPerLevel;
//     if (level == 0){
//         return "TeddyBear";
//     }
//     else if(level==1){
//         return "cat";
//     }
//     else if (level>=2){
//         return "Gorilla";
//     } 
//     else {
//         return "dog";
//     }
// }
// function updatePoints(bonus,newPoints){
//     var i=0;
//     while(i<bonus){
//         newPoints=newPoints+skill*bonus;
//         i=i+1;
//     }
//     return newPoints+userPoints;
// }
// var addPoints = updatePoints(2,100);
// var avatar = getAvatar(2112);
// console.log(avatar); //the value returned from the getAvatar function is stored in the variable avatar.
// console.log(addPoints);//the value returned from the updatePoints function is stored in the variable addPoints.

// document.onload = function() {    
        function clunk(times) {
            var num = times;
            while (num > 0) {
                display("clunk");
                num = num - 1;
            }
        }
        function thingamajig(size) {
            var facky = 1;
            clunkCounter = 0;
            if (size == 0) {
                display("clank");
            } else if (size == 1) {
                display("thunk");
            } else {
                while (size > 1) {
                    facky = facky * size;
                    size = size - 1;
                }
                clunk(facky);
            }
        }
        function display(output) {
            console.log(output);
            clunkCounter = clunkCounter + 1;
        }
        var clunkCounter = 0;
        thingamajig(4);
        console.log(clunkCounter);
// };

