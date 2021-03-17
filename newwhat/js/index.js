function message(){
    var get = document.getElementById("adat");
    //alert("Good morning" + get);
    var tomb = [];
    for(var i = 0; i < get; i++){
        var val = Math.floor(Math.random()*10)+1;
        tomb[i] = val;
    }
}
function init(){
    //console.log("yo");
    //document.getElementById("text").innerHTML += "nem tudom mi van";

}
window.addEventListener("load",init);