var products = ["cho cho chocolate", "ice mint" , "cake batter", "bubble gum"];
var hasBubbleGum = [false,false,false,true];
var i = 0;
// if (hasBubbleGum[i]){       //i wrote this code
//     while (i<products.length){
//         console.log(products[i] + "contains bubblegum");
//         i=i+2;
//     }
// }
// else {
//     i=i+1;
//     i=i+2;
//     console.log(products[i] + "contains bubblegum");
// }

while(i < hasBubbleGum.length){
    if (hasBubbleGum[i]){
        console.log(products[i] + "contains bubblegum");
    }
    i=i+1;
}