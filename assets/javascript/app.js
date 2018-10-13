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
    timer =30;
    questionProgress =0;
    correctResponses =0;
    showMeQuestions();
    run();
})

//this is the array containing 5 objects; each object contains a question, four possible answers, and a correct answer
//position i in the array refers to each object; thus [0] is object 1, etc.
//each object contains an array for possible answers; position [j] refers to items in this array

var questionProgress = 0;

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
        $("#questions").text("Your question is: " + questionArray[questionProgress].question);
        $("#button1").text(questionArray[questionProgress].possibleAnswers[0]);
        $("#radioButton1").attr("data-name", questionArray[questionProgress].possibleAnswers[0]);
        $("#button2").text(questionArray[questionProgress].possibleAnswers[1]);
        $("#radioButton2").attr("data-name", questionArray[questionProgress].possibleAnswers[1]);
        $("#button3").text(questionArray[questionProgress].possibleAnswers[2]);
        $("#radioButton3").attr("data-name", questionArray[questionProgress].possibleAnswers[2]);
        $("#button4").text(questionArray[questionProgress].possibleAnswers[3]);
        $("#radioButton4").attr("data-name", questionArray[questionProgress].possibleAnswers[3]);
}  
//this has to be outside the function
showMeQuestions();

// for (var j = 0; j < 5; j++) {
    $(".questionButtons").on("click", function() {
        let userGuess = $(this).data("name");
        console.log(event);
        if (userGuess === (questionArray[questionProgress].correctAnswer)) {
            correctResponses++;
        alert("Good job!");
        $("#correctResponses").text("Your correct responses are " + correctResponses);
        questionProgress++;
        showMeQuestions();
        $(this).prop("checked", false);
        } 
        else {
            alert("Sorry, try again!");
        }
    })
    // }
})

