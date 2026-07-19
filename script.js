// ----------------------
// Start the quiz
// ----------------------

function startQuiz() {
    window.location.href = "question1.html";
}


// ----------------------
// Hidden score system
// ----------------------

let scores = {

    perfectMan: 0,
    turtleBeach: 0,
    coffeeShop: 0,
    lavender: 0,
    shellSeeker: 0,
    oatmealMilkHoney: 0,
    bourbonVanilla: 0,
    crazyForCoconut: 0

};


// ----------------------
// Question 1
// ----------------------

function answerGender(gender) {

    if (gender === "male") {

        scores.perfectMan++;
        scores.turtleBeach++;
        scores.coffeeShop++;
        scores.bourbonVanilla++;

    }

    else if (gender === "female") {

        scores.lavender++;
        scores.shellSeeker++;
        scores.oatmealMilkHoney++;
        scores.crazyForCoconut++;

    }

    console.log(scores);

    alert("Question 1 Complete!");

}
