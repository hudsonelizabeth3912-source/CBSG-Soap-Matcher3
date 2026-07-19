// Coastal Bend Soap Gallery Quiz Script

// Creates the starting score system
function createScores() {

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

    sessionStorage.setItem(
        "soapScores",
        JSON.stringify(scores)
    );

}


// Runs when the website loads
window.onload = function() {

    // Only create scores if they don't already exist
    if (!sessionStorage.getItem("soapScores")) {

        createScores();

    }

};
