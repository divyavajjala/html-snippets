var fiat={make:"fiat",model:500,year:1957,color:"medium blue", passangers:2,convertible:false,mileage:88000, started: false,
start: function(){
    this.started = true;
},
stop: function(){
    this.started = false;
},
drive: function(){
    if(this.started){
        alert("zoom zoom");
    }
    else{
        alert("you need to start the engine first");
    }
}
};
fiat.drive();
fiat.start();
fiat.drive(); 
fiat.stop();  


