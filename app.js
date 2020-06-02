'use strict'

/*   
Ask the user their name through a prompt()
Display that name back to the user through a custom greeting welcoming them to your site.
Display the user’s name back to them in your final message to the user.

Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.


*/

//function getName()
//{
  var name = prompt("Who is it that wants to know about me?");

  //return name;
//}

//function greeting(userName)
//{
  alert (`Hi ${name} let's play a guessing game first, before reading my boring bio page.`);
  console.log (`Hi ${name} let's play a guessing game first, before reading my boring bio page.`);
//}

/* 
questions to ask:
1) How many kids do I have?
compare answer as string
2) How old am I?
compare as string
3) Do I have any pets?
yes or no
4) Name 1 animal?
check for dog or fish
5) Name the other animal type?

*/
//function questions()
//{
  var kids, age, pets, dog, fish
  
  kids = prompt("How many kids do you think I have?\n\n\nclue: This is not the Brady Bunch");

  if(kids === '3')
  {
    alert("Correct");
    console.log("Correct");
  }
  else
  {
    alert("Sorry I have three kids.\nAges 4,8,10");
    console.log("Sorry I have three kids.\nAges 4,8,10");
  }
  //===========================================================================================================
  age = prompt("How old do you think I am?\n\n\nclue: careful now....");

  if(age === '41')
  {
    alert("Correct");
    console.log("Correct");
  }
  else if(age > '41')
  {
    alert("What?! " + age + "!!! \nI'm only 41." );
    console.log("What?! " + age + "!!! \nI'm only 41." );
  }
  else if(age < '41')
  {
    alert("Thank you..\nI'm actually 41\n\nI moisturize.");
    console.log("Thank you..\nI'm actually 41\n\nI moisturize.");
  }
  else
  {
    alert("Yeah I'm not even sure where you going with " + age + " but I'm 41.");
    console.log(`Yeah I'm not even sure where you going with ${age} but I'm 41.`);
  }

//=================================================================================================
  pets = prompt("Do you think I have any pets?").toLowerCase();
  console.log("pets " + pets);

  if(pets === 'yes')
  {
    alert("Correct");
    console.log("Correct");
  }
  else
  {
    alert("I do have pets.");
    console.log("I do have pets.");
  }
//==================================================================================================
  dog = prompt("So since you know I have pets, \nDo you think I'm a dog person or a cat person?").toLowerCase();
  console.log("dog " + dog)

  if(dog === 'dog')
  {
    alert("Correct! \n\nI have a 8 month old Labordoodle.");
    console.log("Correct");
  }
  else
  {
    alert("No, I'm a dog person. \nI have a 8 month old Labordoodle.");
    console.log("No, I'm a dog person. \nI have a 8 month old Labordoodle.");
  }
//==================================================================================================
fish = prompt("Can you guess what other type of animal I keep as a pet?").toLowerCase();
console.log("fish  " + fish);
if(fish === 'fish')
{
  alert("Correct!\n\nI have a saltwater reef aquarium");
  console.log("Correct!\n\nI have a saltwater reef aquarium");
}
else
{
  alert("Nope the answer is fish.")
}

//}