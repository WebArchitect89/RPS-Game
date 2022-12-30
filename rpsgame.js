//My activity "RPS Game"
//Pseudocode
//create variables for the options
//create variables for the wins, 
// for loop to go trough all the possibilities
//make sure opponent choses random
//make sure the options are entered are with lower cases
//If no valid option is entered the game gives you an error
//outline the conditions
//increase wins, looses and ties
// at the end give na alert of who won and what is the score


// Creates an array that lists out all of the options (Rock, Paper, or Scissors).

var options = ["paper", "rock", "scissors"];

// Create variables to hold the number of wins for each person They start at 0.

var compWins = 0;
var userWins = 0;
var ties = 0;
var rounds = 0;

for (var v = 0; v < 5; v++) {


    //Randomly chooses a choice from the options array. This is the Pisica's guess.
    var compChoice = options[Math.floor(Math.random() * options.length)];

    // Collect the user's response and convert to lower case.
    var userChoice = prompt("Ce alege Jeka Baitanul? paper, rock, or scissors ?");
    userChoice = userChoice.toLowerCase();

    //make sure the game runs only if a valid choice is entered


    if (userChoice === "paper" || userChoice === "rock" || userChoice === "scissors") {

        alert(" Ok. \nStai sa aleg si eu ")


        // Win/lose conditions:
        if ((userChoice === "rock" && compChoice === "scissors")
            || (userChoice === "paper" && compChoice === "rock")
            || (userChoice === "scissors" && compChoice === "paper")) {
            rounds++;
            userWins++;
            alert("Da eu aleg " + compChoice + "\nMaladets pizdiuc istets, ai cistigat roundu ista. \nAi gistigat de " + userWins + " ori! \nRounds " + rounds + "/5");

        } else if (userChoice === compChoice) {
            rounds++;
            ties++;
            alert("Si eu tot aleg " + userChoice + " \nEgailtate. " + rounds + "/5");
        } else {

            rounds++;
            compWins++;
            alert("Da eu aleg " + compChoice + ". Roundu ista eu am cistigat. \nAm gistigat de " + compWins + " ori! \nRounds " + rounds + "/5");


        }

    } else {
        alert("Asa si mam gindit ca o sa te manince intr-ubn loc. Alege paper, rock, or scissors ori verifica daca ai facut vreo greseala in cuvint !!! ")
    }



}

if (userWins > compWins) {
    alert("Janea e cistigatorul, futui curu cui il are. \nMos craciun s-o suparat, nu vine ista la tine. \nScorul este urmator: Janea = " + userWins + " Victor = " + compWins + " Egalitate = " + ties)
} else if (compWins > userWins) {
    alert("\nVictor este citigatorul, bravo baietelu frumushelu. \nMos craciun, vine la tine. \nScorul este urmator Janea = " + userWins + "  Victor = " + compWins + "  Egalitate = " + ties)
} else if (ties > compWins, userWins) {
    alert("A gistigat drujba:)))) Cognacul e din partea ta. \nScorul este urmator: Janea = " + userWins + " Victor = " + compWins + " Egalitate = " + ties);
}