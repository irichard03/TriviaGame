/**
 * 
 *  Trivia Game by Ian Richard 
 * 
 */

//Trivia game the object.
var triviaGame = {
    numQuestions : 0,
    rightAnswers : 0,
    wrongAnswers : 0
}
//game object defines the questions, answers, wrong answers, and a method-
var game = { 
        question : "why am I here?",
        rightAnswer : "You got someplace better to be?",
        rightNumber : 0,
        allAnswers : ["Yes", "No", "True", "False"]
}

function TriviaGame(quiz,right,wrong){
    this.numQuestions = quiz;
    this.rightAnswers = right;
    this.wrongAnswers = wrong;   
}

//Game CONSTRUCTOR METHOD.
function Game(ask, answer, nope){
    this.question = ask;
    this.rightanswer = answer;
    this.allAnswers = nope;
}

//Shuffle METHOD will get a random number from 1 to 4 and ovewrite one of the wrong answers in all answers
function shuffle(gameObject){
    myGame = gameObject;
    myGame.rightNumber = Math.floor(Math.random() * 4) + 1;
    return myGame.allAnswers = myGame.allAnswers.splice(myGame.rightNumber,0,this.rightAnswer);
}

var shazBot = "shazbot";

 //Java script will execute this functionafter the page has loaded, launching the program.
 $(document).ready(function(){
    
    var myTriviaGame = new TriviaGame(3,0,0);
    var myGame = new Game( "What is your favorite color?", "red", ["blue, Green, Purple, Orange"] );    //this will need to change for reusability
    console.log(myGame.allAnswers);
    myGame.allAnswers = shuffle(myGame);        
    console.log(myGame.allAnswers + " after game shuffle");
    
    
    
    //debugMe(x);

    //override for debug me taking a variable parameter.
    function debugMe(shazBot){
        console.log("This " + shazBot + " happened!");
    }

});

