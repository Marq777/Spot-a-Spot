var lessThan = document.getElementById("lessThan");
var equalTo = document.getElementById("equalTo");
var greaterThan = document.getElementById("greaterThan");

document.querySelector("#findNewMusic").addEventListener("click",function(){
    if (equalTo.checked === true){
        console.log("equalTo checked")
    } else {
        console.log("equalTo not checked")
    }
});