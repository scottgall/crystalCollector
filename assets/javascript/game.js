$(document).ready(function() {

    var randomNum;
    var userNum;
    var crystals = [];
    var wins = 0;
    var losses = 0;

function newRound() {
    // set score to 0, clear crystal values
    userNum = 0;
    crystals = [];
    // set random target score
    randomNum = Math.floor((Math.random() * 120) + 19);
    $("#randomNum").text(randomNum);
    // for loop to set random values to crystals array
    for (i = 0; i < 6; i++) {
        number = Math.floor((Math.random() * 12) + 1)
        crystals.push(number);
    }
    console.log("wins - " + wins);
    console.log("losses - " + losses);
    console.log("target score: " + randomNum);
    console.log("crystal values " + crystals);    
}

// crystal click function
$(".crystal").on('click', function () {
   
    // clear notification if present
    $("#notification").empty();
   
    // add value of clicked crystal to userNum
    userNum += crystals[$(this).val()];
    console.log("your score - " + userNum)
    // check for win
    if (userNum === randomNum) {
        wins++
        $("#notification").text("*YOU WIN*");
        newRound();
    } else if (userNum > randomNum) {
        losses++
        $("#notification").text("*YOU LOSE*");
        newRound();
    }
    $("#userNum").text(userNum);
    $("#wins").text(wins);
    $("#losses").text(losses);
})

$(".instructions").on('click', function () {
    $("#notification").html("*click on the crystals to increase your score*<br>*try to reach the target score without going over!!!*")
})
  
newRound();

});