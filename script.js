/*
BMI Updated
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your Tasks
1. Print a nice output to the console, saying who has the higher BMI. The
message is either "Mark's BMI is higher than John's!" or "John's BMI is
higher than Mark's!" 2.
2. Use a template literal to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement.
*/

let marksMass = 77; // 170 pound in kg 77.1107
let marksHeight = 1.8034; // 5'11" in meters 1.8034
let marksBmiMass = marksMass / (marksHeight ** 2);
let marksBmi = marksBmiMass / marksHeight * marksHeight;

let johnsMass = 70; // 154 pound in kg 69.8532
let johnsHeight = 1.91; //6'3" in meters 1.905 
let johnsBmiMass = johnsMass / (johnsHeight ** 2);
let johnsBmi = johnsBmiMass / johnsHeight * johnsHeight;

let markHigherBMI = marksBmi > johnsBmi;
console.log(marksBmi);
 console.log(johnsBmi);
 console.log(markHigherBMI);

 if (marksBmi > johnsBmi) {
  console.log("who has the higher BMI?");
  console.log("Mark's BMI is higher than John's!")
  } else {
    console.log("John's BMI is higher than Mark's!")
  }

  /*
  Use a template literal to include the BMI values in the outputs.
  Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
  Hint: Use an if/else statement.
  */

if (marksBmi < johnsBmi) {
  console.log(`Mark's BMI at ${Math.floor(marksBmi)} is higher than John's! BMI at ${Math.floor(johnsBmi)}.`)
  } else {
    console.log(`John's BMI at ${Math.floor(johnsBmi)} is higher than Mark's! BMI at ${Math.floor(marksBmi)}`)
  }

  /*
  Question 2.
    Part1
    Write a program that takes in a user's age as input and outputs whether the
    user is old enough to vote (i.e., 18 years old or older).
  */
 
// This is one way of doing it!
  let voteAge = 18;
  if (voteAge > 18){
    console.log("You are allowed to vote!")
  } else {
    console.log("Unfortunatly you are not old enough, come back when your at the age 18 and older. Thanks");
  }
 // can you please show me how to go to the next line when I have a string this long?

// Here is another way of doing it!
/*
let votingAge = prompt("Enter your age;") // this will take the users age and stores it in votingage variable 

if(votingAge > 18){
  console.log("You are allowed to vote!")
} else {
  console.log("Unfortunatly you are not old enough, come back when your at the age 18 and older. Thanks");
}
*/

/*
Part2
Write a program that takes in a user's grade as input (e.g. "A", "B", "C", "D", or
"F") and outputs a message based on their grade. For example, if the user
enters "A", the program could output "Great job!"
*/

/*
let individualGrade = prompt("What was your grade on the last Exam?");
if (individualGrade >= 90 || individualGrade == 'A' ){
  console.log("Great Job");
}
  else if(individualGrade >= 80 || individualGrade == "B"){
    console.log("Not bad!");
  } 
  else if (individualGrade >= 70 || individualGrade == "C"){
  console.log("You can do better!");
  } 
  else if (individualGrade >= 60 || individualGrade == "D"){
    console.log("This is not you! I know you can do better!");
  } 
  else {
    console.log("This tells me you don't understand the matterial at all!");
  }
*/

/*
Part3
Write a program that takes in a user's age as input and outputs whether the
user is a baby (0-2 years old), a toddler (3-5 years old), a child (6-12 years old),
a teenager (13-18 years old), or an adult (19 years old or older).
*/

let age;

if (age <= 2){
  console.log("User is a baby!");
} else if (age <=5){
console.log("User is a toddler!");
} else if (age <=12){
  console.log("User is a child!");
} else if (age <= 18){
console.log("User is a teenager");
}
else {
  console.log("User is an adult!");
}

/*
Part4
Write a program that takes in a user's number as input and outputs whether
the number is positive, negative, or zero.
*/

let number;
if (number >= 1){
  console.log("Positive number!");
} else if (number <= -1){
console.log("Negative number!");
} else {
console.log("You have entered Zero");
}