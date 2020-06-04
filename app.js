'use strict'

//===================== Variables ==========================
var name = prompt("Who is it that wants to know about me?");
// variables for number guessing game
var random = Math.floor(Math.random() * 10) + 1;
var win = "no";
// variables for questions
var kids, fish, anime, dog, birth, correct = (0);

alert(`Hi ${name} let's play a guessing game first, before reading my boring bio page.`);

children();
fishes();
cartoon();
pet();
born();
guessing();
names();
bye();

//=============================Questions =======================================

function children() {

  kids = prompt("Do you think I have kids?").toLowerCase();
  if (kids === "yes" || kids === "y") {
    alert("Correct!\n\nI have three kids ages 4, 8, and 10.");
    correct++;
  }
  else {
    alert("Sorry, I actually have three kids ages 4, 8, and 10.");
  }
}
//============================================================================

function fishes() {

  fish = prompt("Do I have freshwater fish?").toLowerCase();
  if (fish === "no" || fish === "n") {
    alert("Correct!\n\nI have a 90 gallon reef tank.");
    correct++;
  }
  else {
    alert("No, I actually have saltwater fish.");
  }
}
//================================================================================
function cartoon() {

  anime = prompt("Do I watch anime with my kids?").toLowerCase();
  if (anime === "yes" || anime === "y") {
    alert("Correct!\n\nIt has become a nightly family routine to watch 2 or 3 episodes of Fairy Tail or One Piece before bed.");
    correct++;
  }
  else {
    alert("Nope,\nOur family actually watches 2 or 3 episodes of Fairy Tail or One Piece every night before bed.");
  }
}
//==================================================================================

function pet() {

  dog = prompt("Do I have a dog?").toLowerCase();
  if (dog === "yes" || dog === "y") {
    alert("Correct!\nI have a 8 month old Labordoodle named Cider.");
    correct++;
  }
  else {
    alert("No, I actually have a 8 month old Labordoodle named Cider.");
  }
}
//=================================================================================

function born() {

  birth = prompt("Was I born in Washington?").toLowerCase();
  if (birth === "no" || birth === "n") {
    alert("Correct!\nI was born in San Diego but have lived in Washington most of my life.");
    correct++;
  }
  else {
    alert("I have lived in Washington most of my life, but I was born in San Diego.");
  }
}
//===================== Guessing Game ===========================================

function guessing() {

  alert("Now let's play a guessing game.\nI am going to think of a number between 1-10 and you will have 4 tries to guess what number I'm thinking of.\nGood Luck.")

  for (var i = 1; i <= 4; i++) {
    var guess = prompt("Guess a number between 1-10.");

    if (guess == random) {
      alert("You nailed it!!\nMy number was " + random + "\nGood Job.");
      correct++;
      win = "yes";
      break;
    }
    else if (guess < random) {
      alert("Too low.");
    }
    else if (guess > random) {
      alert("Too high.");
    }
    else {
      alert("Are you using a actual number?\n\nTry:\n1 2 3 4 5 6 7 8 9 10");
    }
  }
  if (win === "no") {
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


