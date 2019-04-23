// Play with number prompt

// var player_choice = prompt("Enter Number 1-3: ROCK (1), PAPER (2), SCISSORS (3)");

// while (player_choice.length == 0){
// 	var player_choice = prompt("Invalid input. Try again (Select between 1-3: ROCK (1), PAPER (2), SCISSORS (3))");
// }

// while (player_choice != 1 && player_choice != 2 && player_choice != 3) {
// 	var player_choice = prompt("Invalid input. Try again (Select between 1-3: ROCK (1), PAPER (2), SCISSORS (3))")
// } 

// var computer_choice = Math.floor(Math.random() * 3) + 1;


// while (player_choice == computer_choice) {
// 	player_choice = prompt("TIEEEEEEE! Computer: " + computer_choice + " vs. Player: " + player_choice + " Try again:");

// 	while (player_choice.length == 0){
// 	var player_choice = prompt("Invalid input. Try again (Select between 1-3: ROCK (1), PAPER (2), SCISSORS (3))");
// }

// 	var computer_choice = Math.floor(Math.random() * 3) + 1;
// }

// console.log("Computer: " + computer_choice + " vs. Player: " + player_choice);

// 	if (player_choice == 1 && computer_choice == 2) {
// 		console.log("Computer wins! Paper beats Rock " + player_choice + " vs. " + computer_choice);
// 	} else if (player_choice == 1 && computer_choice == 3) {
// 		console.log("YOU WIN! Rock beats Scissors " + player_choice + " vs. " + computer_choice);
// 	} else if (player_choice == 2 && computer_choice == 1) {
// 		console.log("YOU WIN! Paper beats Rock " + player_choice + " vs. " + computer_choice)
// 	} else if (player_choice == 2 && computer_choice == 3) {
// 		console.log("Computer wins! Scissors beats paper " + player_choice + " vs. " + computer_choice)
// 	} else if (player_choice == 3 && computer_choice == 1) {
// 		console.log("Computer wins! Rock beats Scissors " + player_choice + " vs. " + computer_choice)
// 	} else if (player_choice == 3 && computer_choice == 2) { 
// 		console.log("YOU WIN! Scissors beats Paper " + player_choice + " vs. " + computer_choice)
// 	}




// Play with string prompt

var playerSelection = function () {

	var player_input = prompt("Enter rock, paper or scissors: ").toLowerCase();

	while (player_input.length = 0 || player_input !== "rock" && player_input !== "paper" && player_input !== "scissors") {
		var player_input = prompt("Invalid input. Try again").toLowerCase();

	}


	return player_input;

}

var computerSelection = function (computer_code) {	

	if (computer_code === 1) {
		var computer_choice = "rock";
	} else if (computer_code === 2) {
		var computer_choice = "paper";
	} else if (computer_code === 3) {
		var computer_choice = "scissors";
	}

	return computer_choice;

}



var result = function(player_choice, computer_choice) {

	console.log("Computer: " + computer_choice + " vs. Player: " + player_choice);

	if (computer_choice === player_choice) {
		console.log("TIE! No one wins.")
	} else if (player_choice === "rock" && computer_choice === "paper") {
		console.log("Computer wins! Paper beats Rock ");
	} else if (player_choice === "rock" && computer_choice === "scissors") {
		console.log("YOU WIN! Rock beats Scissors ");
	} else if (player_choice === "paper" && computer_choice === "rock") {
		console.log("YOU WIN! Paper beats Rock ")
	} else if (player_choice === "paper" && computer_choice === "scissors") {
		console.log("Computer wins! Scissors beats paper ")
	} else if (player_choice === "scissors" && computer_choice === "rock") {
		console.log("Computer wins! Rock beats Scissors ")
	} else if (player_choice === "scissors" && computer_choice === "paper") { 
		console.log("YOU WIN! Scissors beats Paper ")
	}

}



var player_choice = playerSelection();

var computer_code = Math.floor(Math.random() * 3) + 1;

var computer_choice = computerSelection(computer_code);

result(player_choice, computer_choice);


