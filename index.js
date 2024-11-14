alert("Hi,Are You Using Mobile Kindly On Landscape Mode");
var numberOfbottle = document.querySelectorAll(".key").length;
for(var i=0;i<numberOfbottle;i++){
    document.querySelectorAll(".key")[i].addEventListener("click",function(){
        var inducleKey = this.innerHTML;
        makeSound(inducleKey);
        buttonAnimation(inducleKey);

    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key){
        case"a":
        var audio = new Audio("A0.mp3");
        audio.play();
    break;
    case"b":
        var audio = new Audio("A1.mp3");
        audio.play();
    break;
    case"c":
        var audio = new Audio("A3.mp3");
        audio.play();
    break;
    case"d":
        var audio = new Audio("A4.mp3");
        audio.play();
    break;
    case"e":
        var audio = new Audio("A5.mp3");
        audio.play();
    break;
    case"f":
        var audio = new Audio("A6.mp3");
        audio.play();
    break;
    case"g":
        var audio = new Audio("A6-102820.mp3");
        audio.play();
    break;
    case"h":
        var audio = new Audio("A7.mp3");
        audio.play();
    break;
    case"i":
        var audio = new Audio("Ab1.mp3");
        audio.play();
    break;
    case"j":
        var audio = new Audio("Ab2.mp3");
        audio.play();
    break;
    case"k":
        var audio = new Audio("Ab3.mp3");
        audio.play();
    break;
    case"l":
        var audio = new Audio("ab4.mp3");
        audio.play();
    break;
    case"m":
        var audio = new Audio("Ab6.mp3");
        audio.play();
    break;
    case"n":
        var audio = new Audio("Ab7.mp3");
        audio.play();
    break;
    case"o":
        var audio = new Audio("B1.mp3");
        audio.play();
    break;
    case"p":
        var audio = new Audio("B2.mp3");
        audio.play();
    break;
    case"q":
        var audio = new Audio("B3.mp3");
        audio.play();
    break;
    case"r":
        var audio = new Audio("b6-82017.mp3");
        audio.play();
    break;
    case"s":
        var audio = new Audio("c6-102822.mp3");
        audio.play();
    break;
    case"t":
        var audio = new Audio("B3.mp3");
        audio.play();
    break;
    case"u":
        var audio = new Audio("g6-82016.mp3");
        audio.play();
    break;
    case"v":
        var audio = new Audio("re-78500.mp3");
        audio.play();
    break;
    case"w":
        var audio = new Audio("si-80238.mp3");
        audio.play();
    break;
    case"x":
        var audio = new Audio("sol-101774.mp3");
        audio.play();
    break;
    case"y":
        var audio = new Audio("soft-piano-100-bpm-121529.mp3");
        audio.play();
    break;
    case"z":
        var audio = new Audio("1-note-piano-104171.mp3");
        audio.play();
    break;
    case"1":
        var audio = new Audio("D2.mp3");
        audio.play();
    break;
    case"2":
        var audio = new Audio("D3.mp3");
        audio.play();
    break;
    case"3":
        var audio = new Audio("D4.mp3");
        audio.play();
    break;
default:console.log(inducleKey);
    }
}

function buttonAnimation(ani){
var active =document.querySelector("."+ani);
active.classList.add("pressed");
setTimeout(function(){
    active.classList.remove("pressed")
},100)
}