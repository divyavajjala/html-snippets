var cadi = {make:"GM",model:"cadllic",year:1955,color:"tan",passangers:5,convertible: false,mileage:12892,started:false,fuel: 0,
start:function(){
    if(this.fuel==0){
        alert("the car is on empty, fill up before starting");
    }
    else{
        this.started = true;
    }
},
stop:function(){
    this.started = false;
},
drive:function(){
    if(this.started){
        if(this.fuel>0){
            alert(this.make+""+this.model+" goes zoom zoom");
            this.fuel = this.fuel-1;
        }
        else {
            alert("oh out of fuel");
            this.stop();
        }
    }
    else {
            alert("you need to start the engine first"); 
        }
},
addFuel: function(amount){
    this.fuel=this.fuel+amount;
}
};
cadi.start();
cadi.drive();
cadi.addFuel(0);
cadi.start();
cadi.drive();
cadi.drive();
cadi.drive();
cadi.stop();