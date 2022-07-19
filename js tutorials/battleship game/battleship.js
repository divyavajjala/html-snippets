
function test() {
    var view = {
        displayMessage: function(msg){ //the displayMessage is a method(object method)takes one argument msg//
            var messageArea = document.getElementById("messageArea");//we get the messageArea element from the page.//
            messageArea.innerHTML = msg; //and update the text of the messageArea element by setting its innerHtml to msg.//
        },
        displayHit: function(location){
            var cell = document.getElementById(location);
            cell.setAttribute("class","hit");
        },
        displayMiss: function(location){
            var cell = document.getElementById(location);
            cell.setAttribute("class","miss");
        }
    };
    view.displayMiss("00");
    view.displayHit("34");
    view.displayMiss("55");
    view.displayHit("12");
    view.displayMiss("25");
    view.displayHit("26");
    view.displayMessage("Tap tap, is this thing on?");
    var model = {
        boardSize: 7,numShips: 3,shipsSunk: 0, shipLength: 3,
        ships: [ {locations: ["10","20","30"],hits:["","",""]},
              {locations: ["32","33","34"],hits:["","hit",""]},
              {locations: ["63","64","65"],hits:["","",""]} 
            ],
        fire: function(guess){
            for(var i=0; i<this.numShips; i++){
                var ship = this.ships[i];
                // locations = ship.locations;
                // var index = locations.indexOf(guess);
                var index = locations.indexOf(guess);
                if(index>=0){
                    ship.hits[index]="hit";
                    view.displayHit(guess);
                    view.displayMessagae("HIT");
                    if(this.isSunk(ship)){
                        view.displayMessage("you sank my battaleship!");
                        this.shipsSunk++;
                    }
                    return true;
                }
            }
            view.displayMiss(guess);
            view.displayMessage("you missed it");
            return false;
        },
        isSunk: function (ship){
            for(var i=0;i<this.shipLength; i++){
                if(ship.hits[i]!=="hit"){
                    return false;
                }
            }
            return true;
        }
    };
};
window.onload = test;
// location ----> variable /name of a variable

// "location" ----> literalsvalue