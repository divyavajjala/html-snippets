function test(){
    // var view = { 
    //     firstRowDisplayHit: function( location){
    //         var firstRow = document.getElementById("0"+ location);
    //         firstRow.setAttribute("class","hit");
    //     }
    // };
    // view.firstRowDisplayHit("0");
    // view.firstRowDisplayHit("1");
    // view.firstRowDisplayHit("2");
    // view.firstRowDisplayHit("3");
    var ships = [{locations: ["31","41","51"], hits: ["", "", ""] },
    { locations: ["14", "24", "34"], hits: ["", "hit", ""] },
    { locations: ["00", "01", "02"], hits: ["hit", "", ""] }];
    var ship2 = ships[1];//Finish this code to access the second ship’s middle location and print its value with console.log.//
    var locations=ship2.locations;
    console.log("Location is"+locations[1]);
    var ship3 = ships[2]; //Finish this code to see if the third ship has a hit in its first location://
    var hits = ship3.hits;
    if(hits[0]==="hit"){
        console.log("hit on third ship at location one");
    }
    var ship1=ships[0]; //Finish this code to hit the first ship at the third location://
    var hits=ship1.hits;
    hits[2]="hit";
};
window.onload=test;