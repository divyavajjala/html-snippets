var eightBall = {index: 0,advice:["yes","no","maybe","not a achance"],
shake:function(){
this.index=eightBall.index+1;
if(this.index>=eightBall.advice.length){
    eightBall.index=0;
}
},
look:function(){
    return this.advice[eightBall.index];
}
};
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());