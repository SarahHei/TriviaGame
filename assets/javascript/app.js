$(document).ready(function() {

var questions;



var timer = 30;
var interval; 
var correctResponses = 0; 
var clickCounter = 0; 

var questions = [
    let question1 = "Who was the first known archaeologist?";
    let q1PossibleAnswers = ["Howard Carter", "Hiram Bingham", "Herodotus", "William Cunnington"];
    let q1CorrectAnswer = "Herodotus";
    
    let question2 = "Which of the following is NOT an archaeological field technique?"
    let q2PossibleAnswers = ["Survey", "Lab Analysis", "LIDAR imaging", "Ground Penetrating Radar"];
    let q2CorrectAnswer = "Lab Analysis";

    let question3 = "Which of the following is a famous archaeological site?";
    let q3PossibleAnswers = ["Eiffel Tower", "Vatican", "Berlin Opera House", "Petra"];
    let q3CorrectAnswer = "Petra";
    

    let question4: "To what college or degree program is archaeology most closely linked?";
    let q4PossibleAnswer = ["Anthropology", "Geology", "Statistics", "Biology"];
    let q4CorrectAnswer = "Anthropology";

    let question5: "Which of the following movies DOES NOT contain archaeology references?";
    let q5PossibleAnswer = ["Indiana Jones and the Last Crusade", "Lara Croft: Tomb Raider", "The Mummy", "Mission Impossible"];
    let q5CorrectAnswerr = "Mission Impossible";
];

$("#start").on('click', function() {
        timer--;
        $("#timer").text(timer);
        if(timer === 0){
            timeOut();
        };
        $("#questions").append("question1");
        console.log("questions");
    })

function displayChoices(arr){
    for (var i = 0; i < arr.length; i++){
      var answerDiv = $("<div class='choices'>");
      answerDiv.text(arr[i]);
      $("#questionChoices").append(answerDiv);
    }
} 

function stop() {
        clearInterval(interval);
        questionProgress++;
        setTimeout(nextQuestion, 4000);
    }


}