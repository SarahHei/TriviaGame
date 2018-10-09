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
        if (q1PossibleAnswers === q1CorrectAnswer) {
            $("#questions").text("Your question is: " + questionArray.question2);
            $("#option1").append(questionArray.q2PossibleAnswers);
            $("#option2").append(questionArray.q2PossibleAnswers);
            $("#option3").append(questionArray.q2PossibleAnswers);
            $("#option4").append(questionArray.q2PossibleAnswers);
            correctResponses++;
        }
        else {
            alert("Try again!");
            }
    }

    $("#option2").on("click", function () {
        if (q2PossibleAnswers === q2CorrectAnswer) {
            $("#questions").text("Your question is: " + questionArray.question3);
            $("#option1").append(questionArray.q3PossibleAnswers);
            $("#option2").append(questionArray.q3PossibleAnswers);
            $("#option3").append(questionArray.q3PossibleAnswers);
            $("#option4").append(questionArray.q3PossibleAnswers);
            correctResponses++;
        } else {
            alert("Try again!");
                }
    }

    $("#option3").on("click", function () {
        if (q3PossibleAnswers === q3CorrectAnswer) {
            $("#questions").text("Your question is: " + questionArray.question4);
            $("#option1").append(questionArray.q4PossibleAnswers);
            $("#option2").append(questionArray.q4PossibleAnswers);
            $("#option3").append(questionArray.q4PossibleAnswers);
            $("#option4").append(questionArray.q4PossibleAnswers);
            correctResponses++;
        } else {
            alert("Try again!");
                }
    }

    $("#option4").on("click", function () {
        if (q4PossibleAnswers === q4CorrectAnswer) {
            $("#questions").text("Your question is: " + questionArray.question5);
            $("#option1").append(questionArray.q5PossibleAnswers);
            $("#option2").append(questionArray.q5PossibleAnswers);
            $("#option3").append(questionArray.q5PossibleAnswers);
            $("#option4").append(questionArray.q5PossibleAnswers);
            correctResponses++;
        } else {
            alert("Try again!");
                }
    }

    if (q5PossibleAnswers === q5CorrectAnswer) {
        correctResponses++;
    }
        else {
            alert("Try again!");
        }

})