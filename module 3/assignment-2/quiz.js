function fun() {
    document.getElementById("op1").style.display = "none";
    document.getElementById("op2").style.display = "none";
    document.getElementById("op3").style.display = "none";
    document.getElementById("op4").style.display = "none";
    document.getElementById("op5").style.display = "none";
    document.getElementById("op6").style.display = "none";
    document.getElementById("hint1").style.display = "none";
    document.getElementById("hint2").style.display = "none";
    document.getElementById("hint3").style.display = "none";
}

function hint1() {
    document.getElementById("h1").style.display = "none";
    document.getElementById("hint1").style.display = "block";

}
function hint2() {
    document.getElementById("h2").style.display = "none";
    document.getElementById("hint2").style.display = "block";

}
function hint3() {
    document.getElementById("h3").style.display = "none";
    document.getElementById("hint3").style.display = "block";

}
function display1() {
    document.getElementById("op1").style.display = "block";
    document.getElementById("op2").style.display = "none";

}

function display2() {
    document.getElementById("op2").style.display = "block";
    document.getElementById("op1").style.display = "none";

}
function display3() {
    document.getElementById("op3").style.display = "block";
    document.getElementById("op4").style.display = "none";

}
function display4() {
    document.getElementById("op4").style.display = "block";
    document.getElementById("op3").style.display = "none";
}
function display5() {
    document.getElementById("op5").style.display = "block";
    document.getElementById("op6").style.display = "none";
}
function display6() {
    document.getElementById("op6").style.display = "block";
    document.getElementById("op5").style.display = "none";

}
function check() {
    location.reload();
}