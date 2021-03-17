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

  
//var nev = document.getElementById("adat").value;

function paros(tomb) {
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {            
        }
    } document.getElementById("parosSzamok").innerHTML = "A páros számok: " + i;
}

function feltolt(tomb) {
    var darab = Number(document.getElementById("adat").value);
    for (var i = 0; i < darab; i++) {
        var vel = Math.floor(Math.random() * 10) + 1;
        tomb[i] = vel;
    }
}


function dolgozz() {
    var tomb = [];
    paros(tomb);
    feltolt(tomb);
    console.log(tomb);
    document.getElementById("eredmeny").innerHTML = "Az eredmény: <br> " + tomb.join("; ");

    osszegzes(tomb);

    max(tomb);

    otteloszthato(tomb);
    paros(tomb)
}

function otteloszthato(tomb) {
    var otteloszthatoszamok = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 5 === 0) {
            otteloszthatoszamok++;
        }
    }
    document.getElementById("otszam").innerHTML = "Az 5-el oszthato számokból van: " + otteloszthatoszamok;

}

function osszegzes(tomb) {
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    document.getElementById("osszeg").innerHTML = "Az összeg: " + osszeg;
}

window.addEventListener("load", init);

function init() {
    console.log("Első üzenet");
    document.getElementById("eredmeny").innerHTML = "Rajta vagyok";
    document.getElementById("oke").addEventListener("click", dolgozz);
}


function max(tomb){
    var index=1;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]>tomb[index]){
            index=i;
        }
    }
    var ered=tomb[index];
    document.getElementById("max").innerHTML="A legnagyobb " + ered;
}