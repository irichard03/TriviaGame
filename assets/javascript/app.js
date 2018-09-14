/**
 * 
 *  Trivia Game by Ian Richard 
 * 
 */

 //Java script will execute this functionafter the page has loaded, launching the program.
$(document).ready(function(){
    var x = "shazbot";
    
    debugMe(x);


    
    //override for debug me taking a variable parameter.
    function debugMe(shazBot){
        console.log("This " + shazBot + " happened!");
    }

});

