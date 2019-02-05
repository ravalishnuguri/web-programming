// function check() {
//     var question1 = document.quiz1.question1.value;
// 	var question2 = document.quiz2.question2.value;
// 	var question3 = document.quiz3.question3.value;
//     var score = 0;
//     var points;
//     var message = ["Do better next time!", "It was ok!", "You nailed it"];

//     if (question1 == "True") {
// 		score++;
// }
// 	if (question2 == "False") {
// 	    score++;
// }	
// 	if (question3 == "True") {
// 		score++;
//     }

//     if (score == 0) {
// 		points = 0;
// 	}

// 	if (score > 0 && score < 3) {
// 		points = 1;
// 	}

// 	if (score == 3) {
// 		points = 2;
//     }
//     document.getElementById("after_submit").style.visibility = "visible";
//     document.getElementById("message").innerHTML = message[points];
// 	document.getElementById("number_correct").innerHTML = "You got " + points + " correct.";
// };

var data = {
	question: ['1.Each computer has a built-in instruction set that it knows how to execute the design?','2.The computer uses intelligence to execute instructions.','3.Is HTML, CSS,bootstrap are enough to create a interactive webpage?'],
	choices: [['True', 'False'], ['True', 'False'], ['True', 'False']],
	hints: ['Recall that we use the term computation to mean "the execution of a sequence of instructions by a computer with the intention of solving a given problem".', 'Recall that we said a computer executes the instructions given to it mechanically', 'Recall the points from w3 school inorder to answer the question.'],
	correct: ['It is correct', 'It is correct', 'It is correct'],
	wrong: ['IT is Wrong', 'IT is Wrong', 'IT is Wrong'],
	answer: [0,1,0]
}

var a = 0;
var score = 0;
loader(a);

function loader(a) {
	var b = data.choices[a][0];
	var c = data.choices[a][1];
	document.getElementById("quest").innerHTML = data.question[a];
	document.getElementById("choice-1").innerHTML = '<label>' + "</label>"

}