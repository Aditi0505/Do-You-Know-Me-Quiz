var readLineSync = require("readline-sync");
var chalk = require('chalk');
var score=0;

var userName = readLineSync.question(chalk.bgRed.black("May I know your name? "));
console.log();
console.log(chalk.bgYellow.black("Welcome ")+ chalk.bgYellow.black(userName) +chalk.bgYellow.black (" to DO YOU KNOW ME Quiz? " ));
console.log()

//play function
function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
     console.log(chalk.bgGreen.black("\nRight!"));
    score = score + 1;
    
  } else {
    console.log(chalk.bgGreen.black("\nWrong!"));
   
  }

 console.log(chalk.bgWhite.black("\nCurrent Score: ", score));
  console.log("-------------")
}
//question_bank
var questionSet=[
  {
    question: chalk.bgCyan.black("Where is my hometown"),
    answer: "Patna"
  },
  {
    question: chalk.bgCyan.black("What is my favourite color?"),
    answer: "Purple"
  },
    {
    question: chalk.bgCyan.black("What is my lucky number?"),
    answer: "5"
  },
    {
    question: chalk.bgCyan.black("What is my favourite food to eat?"),
    answer: "Pizza"
  },
  {
    question: chalk.bgCyan.black("What would I rather listen to Rock or Pop?"),
    answer: "Pop"
  },
    {
    question: chalk.bgCyan.black("Would I rather drink Tea or Coffee?"),
    answer: "Tea"
  },
  {
    question: chalk.bgCyan.black("What is my last name?"),
    answer: "Jha"
  },
  {
    question: chalk.bgCyan.black("Do I like to watch a lot of movies"),
    answer: "No"
  },
  {
    question: chalk.bgCyan.black("What is my zodiac sign?"),
    answer: "Taurus"
  },
  {
    question: chalk.bgCyan.black("Who is my favourite artist?"),
    answer: "Taylor Swift"
  }
]

function game() {
  for (var i=0; i<questionSet.length; i++) {
    var currentQuestion = questionSet[i];
    play(currentQuestion.question, currentQuestion.answer)  
  }
   console.log("Your Final Score is ",score);
}

game()