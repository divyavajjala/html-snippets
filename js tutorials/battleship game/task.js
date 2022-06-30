function test(){
    var view = { 
        firstRowDisplayHit: function( location){
            var firstRow = document.getElementById("0"+ location);
            firstRow.setAttribute("class","hit");
        }
    };
    view.firstRowDisplayHit("0");
    view.firstRowDisplayHit("1");
    view.firstRowDisplayHit("2");
    view.firstRowDisplayHit("3");
};
window.onload=test;