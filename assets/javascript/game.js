var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var playerWins = 0;
var playerLosses = 0;
var Guesses = 9;
var choices = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    console.log("userGuess "+ userGuess)

    if (computerChoices.includes(userGuess)) {
        if (userGuess === computerGuess) {
            playerWinsins++;
            Guesses =9;
            choices = [];
        }
    if (userGuess != computerGuess) {
        Guesses --;
        choices.push(userGuess);
    }

    if (Guesses === 0) {
        Guesses = 9;
        playerLosses ++;
        Guesses = [];
    }
}

}
    

 
// //         alert("you win!");
// //         playerWins += 1;
// //       }
// //     else if (userGuess !== computerGuess)
// //         alert("you lose!");
// //         playerLosses +=1;

// // };

