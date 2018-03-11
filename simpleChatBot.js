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
var botQuestion = document.querySelector('#bot-question');
var answer = document.querySelector('#user-input');

botQuestion.innerHTML = questions[2];

function showResponse() {
	// var input = answer.value;
	// if(answer.value )
	alert('yeah!!!');
}

// we add the vent listener for the enter key

// with jquery:
// $(document).on('keypress', function(e) {
// 	if (e.which == 13) {
// 		showResponse();
// 	} 
// });

// vanila JS w/the new specs
document.addEventListener('keyup', function(event) {
	var key = event.key || event.keyCode;
	if (key === 'Enter' || key === 'enter' || key === 13) {
		showResponse();
	}
});


