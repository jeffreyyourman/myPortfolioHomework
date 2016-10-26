
// Sets the computer choices
var computerChoices = ['r', 'p', 's'];
// Declares the tallies to 0
var wins = 0;
var losses = 0;
var ties = 0;
// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // This sets the computer guess equal to the random.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // Making sure the user chooses r, p, or s
    if ((userGuess == 'r') || (userGuess == 'p') || (userGuess == 's')){
        // It tests to determine if the computer or the user won the round and then increments
        if ((userGuess == 'r') && (computerGuess == 's')){
            wins++;
        }else if ((userGuess == 'r') && (computerGuess == 'p')){
            losses++;
        }else if ((userGuess == 's') && (computerGuess == 'r')){
            losses++;
        }else if ((userGuess == 's') && (computerGuess == 'p')){
            wins++;
        }else if ((userGuess == 'p') && (computerGuess == 'r')){
            wins++;
        }else if ((userGuess == 'p') && (computerGuess == 's')){
            losses++;
        }else if (userGuess == computerGuess){
            ties++;
        }
        // Taking the tallies and displaying them in HTML
        var html = "<p>Press r, p or s to start playing</p>" +
        "<p>wins: " +
        wins +
        "</p>" +
        "<p>losses: " +
        losses +
        "</p>" +
        "<p>ties: " +
        ties +
        "<br />You guessed: "+userGuess+" Computer guessed: "+computerGuess+"</p>";
        // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;
        if(userGuess=='r'){
            document.querySelector('#rocpic').style.display='block';
        }else{
            document.querySelector('#rocpic').style.display='none';
        }
        if(userGuess=='p'){
            document.querySelector('#pappic').style.display='block';
        }else{
            document.querySelector('#pappic').style.display='none';
        }
        if(userGuess=='s'){
            document.querySelector('#scipic').style.display='block';
        }else{
            document.querySelector('#scipic').style.display='none';
        }


        if(computerGuess=='r'){
            document.querySelector('#rocpicComp').style.display='block';
        }else{
            document.querySelector('#rocpicComp').style.display='none';
        }
        if(computerGuess=='p'){
            document.querySelector('#pappicComp').style.display='block';
        }else{
            document.querySelector('#pappicComp').style.display='none';
        }
        if(computerGuess=='s'){
            document.querySelector('#scipicComp').style.display='block';
        }else{
            document.querySelector('#scipicComp').style.display='none';
        }
    }
}
