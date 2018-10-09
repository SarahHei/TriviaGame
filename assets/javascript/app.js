$(document).ready(function() {

var timer = 30;
var intervalId; 
var correctResponses = 0; 

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    timer--;
    $(".countdown").html("<p>" + timer + "<p>");
    if (timer=== 0) {
      stop();
      alert("Time Up!");
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

var questionArray = {
        "question1": "Who was the first known archaeologist?",
        "q1PossibleAnswers": ["Howard Carter", "Hiram Bingham", "Herodotus", "William Cunnington"],
        "q1CorrectAnswer":"Herodotus",
        "question2": "Which of the following is NOT an archaeological field technique?",
        "q2PossibleAnswers": ["Survey", "Lab Analysis", "LIDAR imaging", "Ground Penetrating Radar"],
        "q2CorrectAnswer": "Lab Analysis",
        "question3": "Which of the following is a famous archaeological site?",
        "q3PossibleAnswers": ["Eiffel Tower", "Vatican", "Berlin Opera House", "Petra"],
        "q3CorrectAnswer": "Petra",
        "question4": "To what college or degree program is archaeology most closely linked?",
        "q4PossibleAnswers": ["Anthropology", "Geology", "Statistics", "Biology"],
        "q4CorrectAnswer": "Anthropology",
        "question5": "Which of the following movies DOES NOT contain archaeology references?",
        "q5PossibleAnswers": ["Indiana Jones and the Last Crusade", "Lara Croft: Tomb Raider", "The Mummy", "Mission Impossible"],
        "q5CorrectAnswer": "Mission Impossible"
    }

$("#start").on('click', function() {
    run();
    })

$("#reset").on('click', function(){
    reset();
});

    $("#questions").text("Your question is: " + questionArray.question1);
    $("#option1").append(questionArray.q1PossibleAnswers[0]);
    $("#option2").append(questionArray.q1PossibleAnswers[1]);
    $("#option3").append(questionArray.q1PossibleAnswers[2]);
    $("#option4").append(questionArray.q1PossibleAnswers[3]);

    $("#option1").on("click", function () {
        if (questionArray.q1PossibleAnswers === questionArray.q1CorrectAnswer) {
            $("#questions").text("Your question is: " + questionArray.question2);
            $("#option1").append(questionArray.q2PossibleAnswers[0]);
            $("#option2").append(questionArray.q2PossibleAnswers[1]);
            $("#option3").append(questionArray.q2PossibleAnswers[2]);
            $("#option4").append(questionArray.q2PossibleAnswers[3]);
            correctResponses++;
            $("#correctResponses").text(correctResponses);
        }
        else {
            alert("Try again!");
            }
    })

    $("#option2").on("click", function () {
        if (questionArray.q2PossibleAnswers === questionArray.q2CorrectAnswer) {
            $("#questions").text("Your question is: " + questionArray.question3);
            $("#option1").append(questionArray.q3PossibleAnswers[0]);
            $("#option2").append(questionArray.q3PossibleAnswers[1]);
            $("#option3").append(questionArray.q3PossibleAnswers[2]);
            $("#option4").append(questionArray.q3PossibleAnswers[3]);
            correctResponses++;
        } else {
            alert("Try again!");
                }
    })

    $("#option3").on("click", function () {
        if (questionArray.q3PossibleAnswers === questionArray.q3CorrectAnswer) {
            $("#questions").text("Your question is: " + questionArray.question4);
            $("#option1").append(questionArray.q4PossibleAnswers[0]);
            $("#option2").append(questionArray.q4PossibleAnswers[1]);
            $("#option3").append(questionArray.q4PossibleAnswers[2]);
            $("#option4").append(questionArray.q4PossibleAnswers[3]);
            correctResponses++;
        } else {
            alert("Try again!");
                }
    })

    $("#option4").on("click", function () {
        if (questionArray.q4PossibleAnswers === questionArray.q4CorrectAnswer) {
            $("#questions").text("Your question is: " + questionArray.question5);
            $("#option1").append(questionArray.q5PossibleAnswers[0]);
            $("#option2").append(questionArray.q5PossibleAnswers[1]);
            $("#option3").append(questionArray.q5PossibleAnswers[2]);
            $("#option4").append(questionArray.q5PossibleAnswers[3]);
            correctResponses++;
        } else {
            alert("Try again!");
                }
    })

    if (questionArray.q5PossibleAnswers === questionArray.q5CorrectAnswer) {
        correctResponses++;
    }
        else {
            alert("Try again!");
        }

})