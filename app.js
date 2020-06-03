'use strict'

/*   
Ask the user their name through a prompt()----------check
Display that name back to the user through a custom greeting welcoming them to your site.--------check
Display the user’s name back to them in your final message to the user. --------check

Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.


*/

var name = prompt("Who is it that wants to know about me?");

alert (`Hi ${name} let's play a guessing game first, before reading my boring bio page.`);
//console.log (`Hi ${name} let's play a guessing game first, before reading my boring bio page.`);

/* 
questions to ask:
1) Do I have kids?
2) Am I over 40?
3) Do I have any pets?
4) Do I have a dog?
5) Was I born in Washington?

*/

var kids, fish, anime, dog, birth, correct = (0);

kids = prompt("Do you think I have kids?").toLowerCase();
if(kids === "yes" || kids === "y")
{
  alert("Correct!\n\nI have three kids ages 4, 8, and 10.");
  console.log("Correct!\n\nI have thre kids ages 4, 8, and 10.");
  correct++;
}
else
{
  alert("Sorry, I actually have three kids ages 4, 8, and 10.");
  console.log("Sorry, I actually have three kids ages 4, 8, and 10.");
}
//============================================================================
fish = prompt("Do I have freshwater fish?").toLowerCase();
if(fish === "no" || fish === "n")
{
  alert("Correct!\n\nI have a 90gallon reef tank.");
  console.log("Correct!");
  correct++;
}
else(fish === "yes" || fish === "y")
{
  alert("No, I actually have saltwater fish.");
  console.log("No, I actually have saltwater fish.");
}
//================================================================================
anime = prompt("Do I watch anime with my kids?").toLowerCase();
if(anime === "yes" || anime === "y")
{
  alert("Correct!\n\nIt has become a nightly family routine to watch 2 or 3 episodes of Fairy Tail or One Piece before bed.");
  console.log("Correct!\n\nIt has become a nightly family routine to watch 2 or 3 episodes of Fairy Tail or One Piece before bed.");
  correct++;
}
else
{
  alert("Nope,\n Our family actually watches 2 or 3 episodes of Fairy Tail or One Piece every night before bed.");
  console.log("Nope,\n Our family actually watches 2 or 3 episodes of Fairy Tail or One Piece every night before bed.");
}
//==================================================================================
dog = promt("Do I have a dog?").toLowerCase();
if(dog === "yes" || dog === "y")
{
  alert("Correct!\nI have a 8 month old Labordoodle named Cider.");
  console.log("Correct!\nI have a 8 month old Labordoodle named Cider.");
  correct++;
}
else
{
  alert("No, I actually have a 8 month old Labordoodle named Cider.");
  console.log("No, I actually have a 8 month old Labordoodle named Cider.");
}
//=================================================================================
birth = prompt("Was I born in Washington?").toLowerCase();
if(birth === "no" || birth === "n")
{
  alert("Correct!\nI was born in San Diego but have live in Washington most of my life.");
  console.log("Correct!\nI was born in San Diego but have live in Washington most of my life.");
  correct++;
}
else
{
  alert("I have lived in Washington most of my life, but I was born in San Diego.");
  console.log("I have lived in Washington most of my life, but I was born in San Diego.");
}

//==================== End of Questions ================================================

//==================== Goodbye message =================================================

if(correct === 5)
{
  alert(`Wow ${name} you know a lot about me......Bye Bye now\n\n\nStalker alert.`);
  //console.log(`Wow ${name} you know a lot about me......\n\n\nStalker alert.`);
}
else
{
  alert(`You got `+ correct + ` questions right.\nNow you know a little more about me.\nThanks for playing  ${name}.`);
  //console.log(`You got `+ correct + ` questions right.\nNow you know a little more about me.\nThanks for playing  ${name}.`);
}


//========= didn't read that they were suppose to be yes or no questions, will save the code below for later========
//===================================================================================================

//var kids, age, pets, dog, fish, correct = (0);
  
//   kids = prompt("How many kids do you think I have?\n\n\nclue: This is not the Brady Bunch");
//   if(kids === '3')
//   {
//     alert("Correct");
//     //console.log("Correct");
//     correct++;
//   }
//   else
//   {
//     alert("Sorry I have three kids.\nAges 4,8,10");
//     //console.log("Sorry I have three kids.\nAges 4,8,10");
//   }
//   //===========================================================================================================
//   age = prompt("How old do you think I am?\n\n\nclue: careful now....");

//   if(age === '41')
//   {
//     alert("Correct");
//     //console.log("Correct");
//     correct++;
//   }
//   else if(age > '41')
//   {
//     alert("What?! " + age + "!!! \nI'm only 41." );
//     //console.log("What?! " + age + "!!! \nI'm only 41." );
//   }
//   else if(age < '41')
//   {
//     alert("Thank you..\nI'm actually 41\n\nI moisturize.");
//     //console.log("Thank you..\nI'm actually 41\n\nI moisturize.");
//   }
//   else
//   {
//     alert("Yeah I'm not even sure where you going with " + age + " but I'm 41.");
//     //console.log(`Yeah I'm not even sure where you going with ${age} but I'm 41.`);
//   }

// //=================================================================================================
//   pets = prompt("Do you think I have any pets?").toLowerCase();
//   console.log("pets " + pets);

//   if(pets === 'yes')
//   {
//     alert("Correct");
//     //console.log("Correct");
//     correct++;
//   }
//   else
//   {
//     alert("I do have pets.");
//     //console.log("I do have pets.");
//   }
// //==================================================================================================
//   dog = prompt("So since you know I have pets, \nDo you think I'm a dog person or a cat person?").toLowerCase();
//   console.log("dog " + dog)

//   if(dog === 'dog')
//   {
//     alert("Correct! \n\nI have a 8 month old Labordoodle.");
//     //console.log("Correct");
//     correct++;
//   }
//   else
//   {
//     alert("No, I'm a dog person. \nI have a 8 month old Labordoodle.");
//     //console.log("No, I'm a dog person. \nI have a 8 month old Labordoodle.");
//   }
// //==================================================================================================
// fish = prompt("Can you guess what other type of animal I keep as a pet?").toLowerCase();
// console.log("fish  " + fish);
// if(fish === 'fish')
// {
//   alert("Correct!\n\nI have a saltwater reef aquarium");
//   //console.log("Correct!\n\nI have a saltwater reef aquarium");
//   correct++;
// }
// else
// {
//   alert("Nope the answer is fish.");
//   //console.log("Nope the answer is fish.");
// }