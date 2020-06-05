'use strict'

//===================== Variables ==========================
var name = prompt("Who is it that wants to know about me?");
var random = Math.floor(Math.random() * 10) + 1; //random number between 1-10
var win = "no";                                 // used to see if user won and select appropriate responce
var correct = (0);                              // Keeps track of correct answers
var questionsArray = ["Do you think I have kids?", "Do I have freshwater fish?", "Do I watch anime with my kids?", "Do I have a dog?", "Was I born in Washington?"];
var answersArray = ["y", "n", "y", "y", "n"];

//functions
fiveQuestions();
guessing();
names();
bye();

//================================ 5 questions function ============================
function fiveQuestions()
{
  alert(`Hi ${name} let's play a guessing game first, before reading my boring bio page.`);

  for(var i = 0; i < answersArray.length; i++)
  {
    var answer = prompt(questionsArray[i]).charAt(0).toLowerCase();
    
    if(answer === answersArray[i])
    {
      alert("You are correct!!");
      correct++;
    }
    else
    {
      alert("You had a 50-50 chance of getting it right....\nBut you blew it! Wrong answer");
    }
  }
}

//===================== Guessing Game ===========================================

function guessing() 
{
  alert("Now let's play a guessing game.\nI am going to think of a number between 1-10 and you will have 4 tries to guess what number I'm thinking of.\nGood Luck.")

  for (var i = 1; i <= 4; i++) 
  {
    var guess = prompt("Guess a number between 1-10.");

    if (guess == random) 
    {
      alert("You nailed it!!\nMy number was " + random + "\nGood Job.");
      correct++;
      win = "yes";
      break;
    }
    else if (guess < random) 
    {
      alert("Too low.");
    }
    else if (guess > random) 
    {
      alert("Too high.");
    }
    else 
    {
      alert("Are you using a actual number?\n\nTry:\n1 2 3 4 5 6 7 8 9 10");
    }
  }
  if (win === "no") 
  {
    alert("Sorry your out of guesses.\nMy number was " + random);
  }
}
//================= Array Guessing game =========================================

// Guessing game with multiple possible answers that are stored in an Array.
// User will have 6 attempts. break out when user guesses correct or runs out of guesses.
// Display all correct answers

function names() {

  var names = ["Ally", "Breanah", "Samuel"];
  var nameGuess;
  win = "no";

  alert("Now let's see if you can guess one of my kids names.\nYou can have 6 guesses to get one name.");

  nameGuess = prompt("What is your first name guess?").toLowerCase();

  //https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
  nameGuess = nameGuess.charAt(0).toUpperCase() + nameGuess.slice(1);

  for (var j = 6; j > 0 && win === "no"; j--) {

    for (var i = 0; i < names.length; i++) {

      if (nameGuess === names[i]) {
        alert("Nice job!!\nYou are correct.\nMy kids names are: " + names[0] + ", " + names[1] + ", and " + names[2]);
        correct++;
        win = "yes";
        break;
      }
    }

    //check to see if user has already won, then check to see if they have any guesses left to give them the correct responce.
    if (win === "yes") {
      break;
    }
    else if (j > 1) {
      nameGuess = prompt("Sorry I don't have a kid named " + nameGuess + "\n\nGive me another name please:");
      nameGuess = nameGuess.charAt(0).toUpperCase() + nameGuess.slice(1);

    }
    else {
      alert("Sorry your out of guesses.\n\nMy kids names are " + names[0] + ", " + names[1] + ", and " + names[2]);

    }
  }
}
//==================== Goodbye message =======================================
function bye() {

  alert("Thanks for playing " + name + ".\nYou got " + correct + " questions correct out of 7.\n\nI hope you had fun and now you know a little more about me.")
}


