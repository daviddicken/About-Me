'use strict'

//grab Users name
var name = prompt("Who is it that wants to know about me?");

alert (`Hi ${name} let's play a guessing game first, before reading my boring bio page.`);

// variables for questions
var kids, fish, anime, dog, birth, correct = (0);

//=============================Questions =======================================

kids = prompt("Do you think I have kids?").toLowerCase();
if(kids === "yes" || kids === "y")
{
  alert("Correct!\n\nI have three kids ages 4, 8, and 10.");
  correct++;
}
else
{
  alert("Sorry, I actually have three kids ages 4, 8, and 10.");
}

//============================================================================

fish = prompt("Do I have freshwater fish?").toLowerCase();
if(fish === "no" || fish === "n")
{
  alert("Correct!\n\nI have a 90 gallon reef tank.");
  correct++;
}
else
{
  alert("No, I actually have saltwater fish.");
}

//================================================================================

anime = prompt("Do I watch anime with my kids?").toLowerCase();
if(anime === "yes" || anime === "y")
{
  alert("Correct!\n\nIt has become a nightly family routine to watch 2 or 3 episodes of Fairy Tail or One Piece before bed.");
  correct++;
}
else
{
  alert("Nope,\nOur family actually watches 2 or 3 episodes of Fairy Tail or One Piece every night before bed.");
}

//==================================================================================

dog = prompt("Do I have a dog?").toLowerCase();
if(dog === "yes" || dog === "y")
{
  alert("Correct!\nI have a 8 month old Labordoodle named Cider.");
  correct++;
}
else
{
  alert("No, I actually have a 8 month old Labordoodle named Cider.");
}

//=================================================================================

birth = prompt("Was I born in Washington?").toLowerCase();
if(birth === "no" || birth === "n")
{
  alert("Correct!\nI was born in San Diego but have live in Washington most of my life.");
  correct++;
}
else
{
  alert("I have lived in Washington most of my life, but I was born in San Diego.");
}

//=====================


//==================== End of Questions ================================================

//==================== Goodbye message =================================================

if(correct === 5)
{
  alert(`Wow ${name} you know a lot about me......Bye Bye now\n\n\nStalker alert.`);
}
else
{
  alert(`You got `+ correct + ` questions right.\nNow you know a little more about me.\nThanks for playing  ${name}.`);
}


