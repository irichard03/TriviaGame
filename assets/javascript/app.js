/**
 *  Trivia Game by Ian Richard 
 */

//Declare a Trivia game object and initialize with default values.

//Java script will execute this functionafter the page has loaded, launching the program.
$(document).ready(function(){
    
    startgame();

    function startgame(){

        //Declare a game object and initialize it with default valuse.  It defines the questions, answers, and wrong answers.
        var game = { 
                question : "why am I here?",
                correctAnswer : "You got someplace better to be?",
                rightNumber : 0,
                allAnswers : ["Yes", "No", "True", "False"],
                activeQuestion : false,
                id : "default"
        }
                
        //Question objects, store the Question, the correct answer, and an array of incorrect answers. When the constructor is called
        //It replaces one of the incorrect questions with the correct question randomly.
        var question1 = new Game( "What is the title of Bruce Campbell's first book?", "If Chins could Kill", ["Bruce Campbell vs. Hollywood","Real Confessions of the Briscoe Kid","Man with the Screaming Brain","Make Love the Bruce Campbell Way"] );
        var question2= new Game( "Which movie was Bruce Campbell not in?", "The Punisher", ["Army of Darkness","Spider-man","Fargo","Escape from L.A."] );
        var question3 = new Game( "Which television series has Bruce Cambell not appeared on?", "Star Trek The Next Generation", ["X-Files","Fargo","Xena","Burn Notice"] );
        var question4 = new Game( "Complete the phrase: Klaatu, Barada, ", "Nikto", ["Necktie","Nickel","Noodle","Nectar"] );
        var question5 =  new Game( "What was the character name of the Bruce Campbell's re-ocurring role on Hercules?", "Autolycus", ["Thesues","Heroditus","Shemp","Polyphemus"] );
        var quizArray = [question1, question2, question3, question4, question5];

        var numQuestions = 5;   //number of questions to be asked, variable to control which array element to pull.
        var rightAnswers = 0;
        var wrongAnswers = 0;
        
        var controller;         //vaiable to store setInterval
        var clock;              //stores timer value 0-10.
        var step = 1;           //stores current question, when = 5 quiz ends.

        //console.log(numQuestions);            debugging
        //console.log(rightAnswers);
        //console.log(wrongAnswers);
        //console.log(step);

        drawQuestion(quizArray[step-1]);
        //Fills the Question Div with the question from game object.
        function drawQuestion(x){
            $(".question").text(x.question);
            for(var y = 0; y <= 3; y++){
                $( `#answer${y}` ).text(x.allAnswers[y]);
                if(x.allAnswers[y] === x.correctAnswer){
                    $(`#answer${y}`).attr("hint","RIGHT");  //adds an attribute so I can find div with right answer for click
                }                
                else{
                    $(`#answer${y}`).attr("hint","WRONG");  //adds an attribute so I can find div with wrong answer for click
                }
                $( `#answer${y}` ).mouseenter(function() {  //mouseover to show what is highlighted.
                    $( this ).css( "color", "red" );
                    $( this ).css( "font-weight", "bold" );
                }).mouseleave(function() {
                    $( this ).css( "color", "white" );
                    $( this ).css( "font-weight", "normal" );
                });
            }//end of loop
            
            //start timer
            startTimer();
            console.log("Step is ( after start timer): " + step);
            console.log("numQuestions is (after start timer): " + numQuestions);

            $(".answer[hint='RIGHT']").click(function(){        //code executed on right response
                rightAnswer();        
            });

            $(".answer[hint='WRONG']").click(function(){       //code executed on incorrect response
                wrongAnswers();
            }); 
            


        }

        function wrongAnswer(){
            stopTimer();
            wrongAnswers++;
            if(step === 5){
                alert("Game over");
            }
            else{
                //  stopTimer();
                wrongAnswers++;
                step++;
                setTimeout(function(){
                    drawQuestion(quizArray[step]);
                    },3000)
                                                    
                }
        }


        function rightAnswer(){
            stopTimer();
            rightAnswers++;
            if(step === 5){
                alert("Game over");
                
            }
            else{                                  
                //stopTimer();
                step++;
                console.log()
                setTimeout(function(){
                    drawQuestion(quizArray[step]);
                },3000)
                    
            }       

        }

        function gameOver(){
            $("#displayMe").empty();
            $(".question").text("Quiz Over.");
            $("#answer0").text("Right Answers: " + rightAnswers + " ");
            $("#answer1").text("Wrong Answers: " + wrongAnswers + " ");
            $("#answer2").empty();
            $("#answer3").empty();
            $("#timer").empty();

        }

        function countDown(){
            
            if((clock === 0) && (step === 5)){
                clearInterval(controller);
                $(".timer").text("Time's up!");
                gameOver();

            }else if((clock === 0) && (step != 5)){
                clearInterval(controller);
                step++;
                setTimeout(function(){
                    drawQuestion(quizArray[step])
                },3000);
            }
            
            else{
                $(".timer").text(clock);
                clock--;
                
            }
    
        }

        function startTimer(){
            clock = 10;
            controller = setInterval(countDown,1000);
        }

        function stopTimer(){
            clearInterval(controller);
        }


    //Game CONSTRUCTOR METHOD, randomizes answer location.
        function Game(ask, answer, choices){
            this.question = ask;
            this.correctAnswer = answer;
            this.allAnswers = choices;
            this.activeQuestion = true;
            this.rightNumber = Math.floor(Math.random() * 4) +1;
            this.allAnswers.splice(this.rightNumber - 1 , 1 ,this.correctAnswer);   //replace random element in array with correct answer.
           // console.log(this.rightNumber);
           // console.log(this.correctAnswer);
            //console.log(this.allAnswers);     
        }
    }
});

