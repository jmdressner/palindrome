
palindromeScanner();

function palindromeScanner() {
	let answer = getUserInput("please enter a word, phrase, or sequence.");
	let inputTest = answer.split("").reverse().join("");
	//console.log(inputTest);

	if (answer === inputTest) {
		console.log(answer + " is a Palindrome!")
	}
	else {
		console.log(answer + " is not a Palindrome!")
	}
}

function getUserInput(question) {
	let response = prompt(question);
	return response;
}