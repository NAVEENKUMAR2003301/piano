alert("Hi, Are You using Mobile Kindly On Landscape Mode");
var SelectAllKeys = document.querySelectorAll(".key").length;
for(var i=0;i<SelectAllKeys;i++){
    document.querySelectorAll(".key")[i].addEventListener("click",function(){
        var ClickButton = this.innerHTML;
        switch(ClickButton){
            case"a":
                var audio = new Audio("A0.mp3");
                audio.play();
            break;
            case"a0":
                var audio = new Audio("A1.mp3");
                audio.play();
            break;
            case"a3":
                var audio = new Audio("A3.mp3");
                audio.play();
            break;
            case"a4":
                var audio = new Audio("A4.mp3");
                audio.play();
            break;
            case"a5":
                var audio = new Audio("A5.mp3");
                audio.play();
            break;
            case"a6":
                var audio = new Audio("A6.mp3");
                audio.play();
            break;
            case"a1":
                var audio = new Audio("A6-102820.mp3");
                audio.play();
            break;
            case"a7":
                var audio = new Audio("A7.mp3");
                audio.play();
            break;
            case"ab1":
                var audio = new Audio("Ab1.mp3");
                audio.play();
            break;
            case"ab2":
                var audio = new Audio("Ab2.mp3");
                audio.play();
            break;
            case"ab3":
                var audio = new Audio("Ab3.mp3");
                audio.play();
            break;
            case"ab4":
                var audio = new Audio("ab4.mp3");
                audio.play();
            break;
            case"ab6":
                var audio = new Audio("Ab6.mp3");
                audio.play();
            break;
            case"ab7":
                var audio = new Audio("Ab7.mp3");
                audio.play();
            break;
            case"b1":
                var audio = new Audio("B1.mp3");
                audio.play();
            break;
            case"b2":
                var audio = new Audio("B2.mp3");
                audio.play();
            break;
            case"b3":
                var audio = new Audio("B3.mp3");
                audio.play();
            break;
            case"b6":
                var audio = new Audio("b6-82017.mp3");
                audio.play();
            break;
            case"c6":
                var audio = new Audio("c6-102822.mp3");
                audio.play();
            break;
            case"e6":
                var audio = new Audio("e6-82013.mp3");
                audio.play();
            break;
            case"g6":
                var audio = new Audio("g6-82016.mp3");
                audio.play();
            break;
            case"re":
                var audio = new Audio("re-78500.mp3");
                audio.play();
            break;
            case"si":
                var audio = new Audio("si-80238.mp3");
                audio.play();
            break;
            case"s0":
                var audio = new Audio("sol-101774.mp3");
                audio.play();
            break;
            case"d0":
                var audio = new Audio("soft-piano-100-bpm-121529.mp3");
                audio.play();
            break;
            case"d1":
                var audio = new Audio("1-note-piano-104171.mp3");
                audio.play();
            break;
            case"d2":
                var audio = new Audio("D2.mp3");
                audio.play();
            break;
            case"d3":
                var audio = new Audio("D3.mp3");
                audio.play();
            break;
            case"d4":
                var audio = new Audio("D4.mp3");
                audio.play();
            break;
        default:console.log(ClickButton);
        }
    })
}