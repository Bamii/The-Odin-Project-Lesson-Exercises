(function () {
	console.log("ROCK PAPER SCISSORS");

	/* Play round */
	function playRound(playerSelection, computerSelection) {
		if (playerSelection === computerSelection) {
			return ["DRAW!", "none"];
		} else if (playerSelection === "rock" && computerSelection === "paper") {
			return ["You Lose! Paper beats Rock", "comp"];
		} else if (playerSelection === "paper" && computerSelection === "scissors") {
			return ["You Lose! Scissors beats Paper", "comp"];
		} else if (playerSelection === "scissors" && computerSelection === "rock") {
			return ["You Lose! Rock beats Scissors", "comp"];
		} else if (playerSelection === "paper" && computerSelection === "rock") {
			return ["You Win! Paper beats Rock", "user"];
		} else if (playerSelection === "scissors" && computerSelection === "paper") {
			return ["You Win! Scissors beats paper", "user"];
		} else if (playerSelection === "rock" && computerSelection === "scissors") {
			return ["You Win! Rock beats Scissors", "user"];
		}
	}

	/* Computer play function */
	function computerPlay() {
		const OPTIONS = ["rock", "paper", "scissors"];
		const random = Math.floor(Math.random() * (3 - 0) + 0);

		return OPTIONS[random];
	}

	//const computerSelection = computerPlay()

	function game() {
		console.log("Welcome to the game: ");
		const PLAY_TIME = 5;
		let counter = 0;
		var user = 0;
		var comp = 0;

		while (counter < PLAY_TIME) {
			let reply;
			let refinedReply;

			ish();
			function ish() {
				reply = prompt();

				if (reply.toLowerCase() != "rock" && reply.toLowerCase() != "scissors" && reply.toLowerCase() != "paper") {
					console.log('Error! \nEnter (Paper, Rock, or Scissors)');
					ish();
				} else {
					refinedReply = reply.toLowerCase();
					const computerSelection = computerPlay();
					console.log(`Computer choice is ${computerSelection}`)
					console.log(playRound(refinedReply, computerSelection)[0]);
					if (playRound(refinedReply, computerSelection)[1] === "user") {
						user++;
					} else {
						comp++;
					}
					counter++;
				}
			}
		}
		if (user > comp) {
			console.log(`You won the game: ${user} Rounds `)
		} else {
			console.log(`Computer won the game: ${comp} Rounds `)
		}
	}

	//game();
})();