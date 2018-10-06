$(document).ready(function() {

var questions;
var timer = 30;
var interval; 
var correctResponses = 0; 
var clickCounter = 0; 

var questions = [
    {
        question1: "Who was the first known archaeologist?",
        q1PossibleAnswers: ["Howard Carter", "Hiram Bingham", "Herodotus", "William Cunnington"],
        q1CorrectAnswer:"Herodotus"
    },
    
    {
        question2: "Which of the following is NOT an archaeological field technique?",
        q2PossibleAnswers: ["Survey", "Lab Analysis", "LIDAR imaging", "Ground Penetrating Radar"],
        q2CorrectAnswer: "Lab Analysis"
    },
    
    {
        question3: "Which of the following is a famous archaeological site?",
        q3PossibleAnswers: ["Eiffel Tower", "Vatican", "Berlin Opera House", "Petra"],
        q3CorrectAnswer: "Petra"
    },
    
    {
        question4: "To what college or degree program is archaeology most closely linked?",
        q4PossibleAnswers: ["Anthropology", "Geology", "Statistics", "Biology"],
        q4CorrectAnswer: "Anthropology"
    },
    
    {
        question5: "Which of the following movies DOES NOT contain archaeology references?",
        q5PossibleAnswers: ["Indiana Jones and the Last Crusade", "Lara Croft: Tomb Raider", "The Mummy", "Mission Impossible"],
        q5CorrectAnswer: "Mission Impossible"
    },
    
];

$("#start").on('click', function() {
        timer--;
        $("#timer").text(timer);
        if(timer === 0){
            timeOut();
        };
        $("#questions").append("questions");
        console.log("questions");
    })

function displayChoices(arr){
    for (var i = 0; i < arr.length; i++){
      var possibleAnswersDiv = $("<div id='questionChoices'>");
      possibleAnswersDiv.text(arr[i]);
      $("#questionChoices").append(possibleAnswersDiv);
    }
} 

function stop() {
        clearInterval(interval);
        questionProgress++;
        setTimeout(nextQuestion, 4000);
    }

}