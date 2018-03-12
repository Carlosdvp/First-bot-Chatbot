'use strict';

var questions = [
	`What's your name?`,
	`Where are your from?`,
	`How old are you?`,
	`What are you eating for lunch tomorrow?`,
	`It was nice talking to you.`
];



var num = 0;

// here we grab the elements we need to work with
var botQuestion = document.querySelector('#bot-question'),	
		answer = document.querySelector('#user-input');

// First we set botQuestion to the 1st item in the array
botQuestion.innerHTML = questions[0];

// this is our main method
function showResponse() {

	var input = answer.value;
// Refactor #1 - place all bot responses in their own array
	var responses = [
		`Hi ${input}, nice to meet you.`,
		`${input} is an awesome city.`,
		`So you were born in ${2017 - input}.`,
		`Oh boy! ${input} is my favorite dish.`
	];

	if(answer.value === '') {
		console.log('oh no!');
	} else {
		if(num === 0) {
			botQuestion.innerHTML = responses[0];
			++num;
			setTimeout(changeQuestion, 2000);
		} else if (num === 1) {
			botQuestion.innerHTML = responses[1];
			++num;
			setTimeout(changeQuestion, 2000);
		} else if (num === 2) {
			botQuestion.innerHTML = responses[2];
			++num;
			setTimeout(changeQuestion, 2000);
		} else if (num === 3) {
			botQuestion.innerHTML = responses[3];
			++num;
			setTimeout(changeQuestion, 2000);
		}
	}
};

// to change the question the bot will ask
function changeQuestion() {
	// grabs the new question
	botQuestion.innerHTML = questions[num];
	// clears the input value for the next answer
	answer.value = '';
	// when we get to the last Question
	if(num === 4) {
		answer.style.display = 'none';
	}
};


// we add the event listener for the enter key

// -- with jquery: --
// $(document).on('keypress', function(e) {
// 	if (e.which == 13) {showResponse();} 
// });

// vanila JS w/the new specs and fallbacks
document.addEventListener('keyup', function(event) {
	if (event.defaultPrevented) {
		return;
	}

	var key = event.key || event.keyCode;

	if (key === 'Enter' || key === 'enter' || key === 13) {
		showResponse();
	}
});