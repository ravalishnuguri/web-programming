var myInput = document.getElementById("psw");

var secretKey = "batman";
var valid = "Secret key is matched";
var Invalid = "Does not match";

function verify() {
    var v = document.getElementById("psw").value;
    if (v == secretKey) {
        alert (valid);
        document.getElementById("butt").disabled=true;
        var x = document.getElementById("myText").value;
        var y = document.getElementById("usrname").value;
        document.getElementById("text2").innerHTML = "<b>Commont:</b> " + x;
        document.getElementById("text1").innerHTML = "<b>Name: </b>" + y;
        
    } else {
        alert(Invalid);
    }
}