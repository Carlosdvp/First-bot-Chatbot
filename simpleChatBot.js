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

}