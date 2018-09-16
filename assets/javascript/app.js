/**
 *  Trivia Game by Ian Richard 
 */

//Declare a Trivia game object and initialize with default values.

//Java script will execute this functionafter the page has loaded, launching the program.
$(document).ready(function(){
    var triviaGame = {
        numQuestions : 0,
        rightAnswers : 0,
        wrongAnswers : 0,
    }
    var controller;    
    var clock;
    var player;

    //Declare a game object and initialize it with default valuse.  It defines the questions, answers, and wrong answers.
    var game = { 
            question : "why am I here?",
            correctAnswer : "You got someplace better to be?",
            rightNumber : 0,
            allAnswers : ["Yes", "No", "True", "False"],
            activeQuestion: false,
    }
               
    var myTriviaGame = new TriviaGame(3,0,0);
    var questionOne = new Game( "What is your favorite color?", "red", ["blue", "Green", "Purple", "Orange"] );    //this will need to change for reusability
    var questionTwo = new Game( "How many fingers am I holding up?", "One.", ["Two","Three","Four","Five"] );
    var QuestionThree = new Game( "Which movie was Bruce Campbell not in?", "Terminator", ["Army of Darkness","Spiderman","Evil Dead","Bubbahotep"] );
    var QuestionFour = new Game( "Which movie was Bruce Campbell not in?", "Terminator", ["Army of Darkness","Spiderman","Evil Dead","Bubbahotep"] );
    var QuestionFive = new Game( "Which movie was Bruce Campbell not in?", "Terminator", ["Army of Darkness","Spiderman","Evil Dead","Bubbahotep"] );
    
    startTimer();


    function countDown(){
        if(clock === 0){
            clearInterval(controller);
        }
        else{
        $("timer").text(clock);
        clock--;
        console.log(clock);
        }
    }

    function startTimer(){
        clock = 10;
        player = 4;
        controller = setInterval(countDown,1000);
    }

//Construct trivia game.
    function TriviaGame(quiz,right,wrong){
        this.numQuestions = quiz;
        this.rightAnswers = right;
        this.wrongAnswers = wrong;   
    }

//Game CONSTRUCTOR METHOD, randomizes answer location.
    function Game(ask, answer, choices){
        this.question = ask;
        this.correctAnswer = answer;
        this.allAnswers = choices;
        this.rightNumber = Math.floor(Math.random() * 4) +1;
        this.allAnswers.splice(this.rightNumber - 1 , 1 ,this.correctAnswer);   //replace random element in array with correct answer.
        console.log(this.rightNumber);
        console.log(this.correctAnswer);
        console.log(this.allAnswers);     
    }
});

