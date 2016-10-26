//HANGMAN

//1. you have to have the various answers to choose from
//2. then you're going to have to have another variable to have the computer choose from at random
	//a. variable with the amount of blanks
	//b. variable with the amount of blanks and the correct answers
	//c. variable of the incorrect guesses
	//then you have your game variables
		//wins
		//losses
		//number of guesses left
//when you have your variable of words list you're going to have to make it randomized. 
// you want the chosen word to be from the var words to choose from
// once you have that you want the word to be split into only letters. 
// after you split the words you're going to want to see how many letters are in that word by using .length and equalling that to amount of numbers in the blank
// reset the incorrect guesses and also reset the correct and blank letters
//next you have to loop over the number of blanks while pushing '_' into correct letters and blank spaces. 
// next you have to get the element IDs for guesses left, word blanks, and wrong guesses. 

//lines 12 through 18 are going to be in the function that i will call startGame

// then I will have another function called checkLetters(letter) which will be checking through the chosen words and the blanks_correct letters to see if it is equal to what letter i pressed. 

// you are going to set the var lettersInWord to false;
//you are going to make a for loop over numBlanks because that's how many blanks you're going to have based on the letter chosen by the computer
//then you're going to have an if statement asking if the wordChosen is equal to the argument letter
//then youre going to set lettersInChosenWord to false. 
//then you're going to have another if statement called lettersInwWord
// youre going to make another for loop going over the same numBlanks
// if that happens you're going to have another if statement asking if cwordChosen is equal to the argument and then
// if correctAndBlanks is equal letter 
//else you're going to push the argument into the incorrectGuesses variable and also subtract -1 from guessesLeft

//line 24 to 32 is completing the check letters function. the function is to check all the letters if they are in the array input it in if not put in the wrong guesses. 

// then I will have another function called round complete that will add to the counter or add to the loss counter and then i will reitterate the startGame function which will end up restarting the game.

var wordsToChoose = ['nagger', 'darren', 'jeff', 'roni', 'coding'];
var wordChosen = [];
var lettersInChosenWord = [];
var numBlanks = 0;
var correctsAndBlanks = [];
var incorrectGuesses = [];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

function startGame () {



}


