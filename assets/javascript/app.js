/**
 * 
 *  Trivia Game by Ian Richard 
 * 
 */

//Declare a Trivia game object and initialize with default values.
var triviaGame = {
    numQuestions : 0,
    rightAnswers : 0,
    wrongAnswers : 0,
};
//Declare a game object and initialize it with default valuse.  It defines the questions, answers, and wrong answers.
var game = { 
        question : "why am I here?",
        correctAnswer : "You got someplace better to be?",
        rightNumber : 0,
        allAnswers : ["Yes", "No", "True", "False"],

};



//Shuffle METHOD will get a random number from 1 to 4 and ovewrite one of the wrong answers in all answers


var shazBot = "shazbot";

 //Java script will execute this functionafter the page has loaded, launching the program.
 $(document).ready(function(){
    
    var myTriviaGame = new TriviaGame(3,0,0);
    var myGame = new Game( "What is your favorite color?", "red", ["blue", "Green", "Purple", "Orange"] );    //this will need to change for reusability
    var myGame2 = new Game( "How many fingers am I holding up?", "One.", ["Two","Three","Four","Five"] );
   // console.log(myGame.allAnswers[x]);
    
    

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
    
    //debugMe(x);

    //override for debug me taking a variable parameter.
    function debugMe(shazBot){
        console.log("This " + shazBot + " happened!");
    }

});

