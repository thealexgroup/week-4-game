$( document ).ready(function(){ //my big fat function...

  var Random=Math.floor(Math.random()*101+19) //get random number between 19-120

  $("#randomNumber").text(Random);  //put the random number in the div with id randomNumber
  
  var number1 = Math.floor(Math.random()*11+1) // Setting up random numbers for each pic between 1 and 12
  var number2 = Math.floor(Math.random()*11+1) // these will correspond to images red, blue, yellow and green
  var number3 = Math.floor(Math.random()*11+1)
  var number4 = Math.floor(Math.random()*11+1)
  
  var totalPoints= 0; //this is the total points accumulated playing
  var wins= 0; //hold wins
  var losses = 0; //hold losses

  $("#numberWins").text("Wins: " + wins); //show wins, not in reset
  $("#numberLosses").text("Losses: " + losses); //show losses, not in reset
  $("#myTotal").text(totalPoints); //show final total as zero to start

//clear and reset all of the stuff we need later. I'd rather just reset the game, but somebody says that is cheating...
function reset(){
      Random=Math.floor(Math.random()*101+19); //get the new random total to hit
      $("#randomNumber").text(Random); //show new total on screen
      number1 = Math.floor(Math.random()*11+1); //get new numbers for each crystal pic 
      number2 = Math.floor(Math.random()*11+1);
      number3 = Math.floor(Math.random()*11+1);
      number4 = Math.floor(Math.random()*11+1);
      totalPoints = 0; //reset the player total points
      $("#myTotal").text(totalPoints); //reset the final total on screen
    }; //end of reset


  function winner(){ //winner stuff
      wins++; //add one to wins total
      $("#wonLost").text("You win!"); //show you won
      $("#numberWins").text("Wins: " + wins); //show running total of wins
      reset(); //reset the game
    }; //end of winner

  function loser(){ //loser stuff
      losses++; //add to losses
      $("#wonLost").text("You lost!"); //show you lost
      $("#numberLosses").text("Losses: " + losses); //show running total of losses
      reset();//reset the game
  }; //end of loser

  //sets up clicks for the pics

  $("#one").on("click", function(){ //pic 1, red, on.click function
    totalPoints = totalPoints + number1; //when click on this pic with id of one, add the 1st random value above to total points
    $("#myTotal").text(totalPoints); //update the total on screen

        if (totalPoints == Random){ //hey, if you are a winner, do the winner thing including reset
          winner();
        }
        else if ( totalPoints > Random){ //yep, the loser thing including reset
          loser();
        }   
  }); //end of pic1

  //pretty easy after the first one.  copy and paste and change 1 to 2 and one to two.  
  $("#two").on("click", function(){
    totalPoints = totalPoints + number2;
    $("#myTotal").text(totalPoints); 

        if (totalPoints == Random){
          winner();
        }
        else if ( totalPoints > Random){
          loser();
        } 
  }); //end of pic2

  //pretty easy after the first one.  copy and paste and change 1 to 3 and one to three.  
  $("#three").on ("click", function(){
    totalPoints = totalPoints + number3;
    $("#myTotal").text(totalPoints);

          if (totalPoints == Random){
          winner();
        }
        else if ( totalPoints > Random){
          loser();
        } 
  }); //end of pic3

  //pretty easy after the first one.  copy and paste and change 1 to 4 and one to four.  
  $("#four").on ("click", function(){
    totalPoints = totalPoints + number4;
    $("#myTotal").text(totalPoints); 
      
          if (totalPoints == Random){
          winner();
        }
        else if ( totalPoints > Random){
          loser();
        }
  }); //end of pic 4   

}); 