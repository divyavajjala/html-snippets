var taxi = {make: "webville motors", model: "taxi", year: 1955, color: "yellow", passengers: 4, convertible: false, mileage: 281341};
function prequal (car){
    if(car.mileage>10000){
        return false;
    }
    else if(car.year>1960){
        return false;
    }
    else{
        return true;
    }
}
var worthAlook = prequal(taxi);
if(worthAlook){
    console.log("you gotta checkout this" + taxi.make+""+taxi.model);
}
else{
    console.log("you should really pass on the" + taxi.make+""+taxi.model);
}



// function getSecret(file,secretPassword){
//     file.opened=file.opened+1;
//     if (secretPassword==file.password){
//         return file.contents;
//     }
//     else{
//         return "invalid password! no secret for you";
//     }
// }
// function setSecret(file,secretPassword, secret){
//     if (secretPassword==file.password){
//         file.opened=0;
//         file.contents=secret;
//     }
// }
// var superSecretFile = {level:"classified", opened:0, password: 2, contents: "Dr.Evel's next meeting in Detriot"};
// var secret=getSecret(superSecretFile,2);
// console.log(secret);
// setSecret(superSecretFile,2, "Dr.Evel's next meeting in Philadelphia");
// secret=getSecret(superSecretFile,2);
// console.log(secret);