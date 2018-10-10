$(document).ready(function() {

var timer = 30;
var intervalId; 
var correctResponses = 0;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

//this section sets up the timer
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

//start and reset buttons
$("#start").on('click', function() {
    run();
    })

$("#reset").on('click', function(){
    run();
})

//this is the array containing 5 objects; each object contains a question, four possible answers, and a correct answer
//position i in the array refers to each object; thus [0] is object 1, etc.
//each object contains an array for possible answers; position [j] refers to items in this array
var questionArray = [
    {
        question: "Who was the first known archaeologist?",
        possibleAnswers: ["Howard Carter", "Hiram Bingham", "Herodotus", "William Cunnington"],
        correctAnswer:"Herodotus"
    },
    {
        question: "Which of the following is NOT an archaeological field technique?",
        possibleAnswers: ["Survey", "Lab Analysis", "LIDAR imaging", "Ground Penetrating Radar"],
        correctAnswer: "Lab Analysis"
    },
    {
        question: "Which of the following is a famous archaeological site?",
        possibleAnswers: ["Eiffel Tower", "Vatican", "Berlin Opera House", "Petra"],
        correctAnswer: "Petra"
    }, 
    { 
        question: "To what college or degree program is archaeology most closely linked?",
        possibleAnswers: ["Anthropology", "Geology", "Statistics", "Biology"],
        correctAnswer: "Anthropology"
    },
    {
        question: "Which of the following movies DOES NOT contain archaeology references?",
        possibleAnswers: ["Indiana Jones and the Last Crusade", "Lara Croft: Tomb Raider", "The Mummy", "Mission Impossible"],
        correctAnswer: "Mission Impossible"
    }
]

function showMeQuestions() {
    for (var i = 0; i <5; i++) {
        $("#questions").text("Your question is: " + questionArray[i].question);
        $("#radioButton1").text(questionArray[i].possibleAnswers[0]);
        $("#radioButton2").text(questionArray[i].possibleAnswers[1]);
        $("#radioButton3").text(questionArray[i].possibleAnswers[2]);
        $("#radioButton4").text(questionArray[i].possibleAnswers[3]);
    }
    showMeQuestions();
}  
/*
    for (var j = 0; j<= 3; j++) {
        
        }  
*/   

    
for (var j = 0; j < 5; j++) {
    if $(input:radio [questionArray[i].possibleAnswers[j]].checked) === (questionArray[i].correctAnswer) {
        correctResponses++;
    $ ("#correctResponses").text(correctResponses);
    } else {
        alert("Sorry, try again!");
    }
    }
})

/*
$("#questions").text("Your question is: " + questionArray.question1);
    let option1 = questionArray.q1PossibleAnswers[0];
    $("#option1").text(questionArray.q1PossibleAnswers[0]);
    let option2 = questionArray.q1PossibleAnswers[1];
    $("#option2").text(questionArray.q1PossibleAnswers[1]);
    let option3 = questionArray.q1PossibleAnswers[2];
    $("#option3").text(questionArray.q1PossibleAnswers[2]);
    let option4 = questionArray.q1PossibleAnswers[3];
    $("#option4").text(questionArray.q1PossibleAnswers[3]);
    
    $("#option1").on("click", function () {
       if (option1 === questionArray.q1CorrectAnswer) {
            $("#questions").text("Your question is: " + questionArray.question2);
            console.log(option1);
            $("#option1").text(questionArray.q2PossibleAnswers[0]);
            let option1 = questionArray.q2PossibleAnswers[0];
            $("#option2").text(questionArray.q2PossibleAnswers[1]);
            let option2 = questionArray.q2PossibleAnswers[1];
            $("#option3").text(questionArray.q2PossibleAnswers[2]);
            let option3 = questionArray.q2PossibleAnswers[2];
            $("#option4").text(questionArray.q2PossibleAnswers[3]);
            let option4 = questionArray.q2PossibleAnswers[3];
            correctResponses++;
            $("#correctResponses").text(correctResponses);
        }
        else {
            alert("Try again!");
            console.log(this);
            }
        })

   $("#option2").on("click", function () {
       if (option2 === questionArray.q1CorrectAnswer) {
            $("#questions").text("Your question is: " + questionArray.question2);
            console.log(option1);
            $("#option1").text(questionArray.q2PossibleAnswers[0]);
            let option1 = questionArray.q2PossibleAnswers[0];
            $("#option2").text(questionArray.q2PossibleAnswers[1]);
            let option2 = questionArray.q2PossibleAnswers[1];
            $("#option3").text(questionArray.q2PossibleAnswers[2]);
            let option3 = questionArray.q2PossibleAnswers[2];
            $("#option4").text(questionArray.q2PossibleAnswers[3]);
            let option4 = questionArray.q2PossibleAnswers[3];
            correctResponses++;
            $("#correctResponses").text(correctResponses);
        }
        else {
            alert("Try again!");
            }
        })

    $("#option3").on("click", function () {
        if (option3 === questionArray.q3CorrectAnswer) {
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
*/


