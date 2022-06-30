
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
};
window.onload = test;
var ships = [ {locations: ["10","20","30"],hits:["","",""]},
              {locations: ["32","33","34"],hits:["","",""]},
              {locations: ["63","64","65"],hits:["","",""]} 
            ];
// location ----> variable /name of a variable

// "location" ----> literalsvalue