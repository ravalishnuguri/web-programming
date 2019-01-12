function check() {
    var question1 = document.quiz1.question1.value;
	var question2 = document.quiz2.question2.value;
	var question3 = document.quiz3.question3.value;
    var score = 0;
    var points;
    var message = ["Do better next time!", "It was ok!", "You nailed it"];

    if (question1 == "True") {
		score++;
}
	if (question2 == "False") {
	    score++;
}	
	if (question3 == "True") {
		score++;
    }

    if (score == 0) {
		points = 0;
	}

	if (score > 0 && score < 3) {
		points = 1;
	}

	if (score == 3) {
		points = 2;
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = message[points];
	document.getElementById("number_correct").innerHTML = "You got " + points + " correct.";
};