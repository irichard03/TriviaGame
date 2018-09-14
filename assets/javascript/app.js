/**
 * 
 *  Trivia Game by Ian Richard 
 * 
 */

//Trivia game the object.
var triviaGame = {
    numQuestions = 0,
    rightAnswers = 0,
    wrongAnswers = 0,
    
    //game object defines the questions, answers, wrong answers, and a method-
    // to replace a random wrong answer with the correct answer, and a constructor to create questions.
    //mostly I just want to try out nested objects.
    game = { 
        question = "why am I here?",
        rightAnswer = "You got someplace better to be?",
        rightNumber = 0,
        allAnswers = ["Yes", "No", "True", "False"],
        
        //Game CONSTRUCTOR METHOD.
        Game: function(ask, answer, nope){
            
            this.question = ask,
            this.rightanswer = answer,
            this.allAnswers = nope
        },

        //Shuffle METHOD will get a random number from 1 to 4 and ovewrite one of the wrong answers in all answers
        //array using the array method splice
        shuffle : function(){
            
            this.rightNumber = Math.floor(Math.random() * 4) + 1;
            this.allAnswers.splice(x,0,this.rightAnswer);
       }
    },

    //triviaGame constructor
    TriviaGame : function(quiz,right,wrong){
        this.numQuestions = quiz;
        this.rightAnswers = right;
        this.wrongAnswers = wrong;
    }
    
}



var shazBot = "shazbot";

 //Java script will execute this functionafter the page has loaded, launching the program.
 $(document).ready(function(){
    
    
    
    
    
    debugMe(x);

    //override for debug me taking a variable parameter.
    function debugMe(shazBot){
        console.log("This " + shazBot + " happened!");
    }

});

