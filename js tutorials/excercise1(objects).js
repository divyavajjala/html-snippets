var dog = {name: "fido", weight: 20.2, age: 4, breed: "mixed", activity: "fetch balls"};
var bark;
// dog.years = 100;
delete dog.years;
if(dog.weight>20){
    bark = "WOOF WOOF";
}
else{
    bark = "woof woof";
}
var speak = dog.name +"says"+ bark + "when he wants to"+ dog.activity ;
console.log(speak); 