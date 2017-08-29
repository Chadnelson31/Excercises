var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

var addScore = function () {
    var name = $("name").value;
    var score = parseInt($("score").value);

    if(name === "" || isNaN(score) || score < 0 || score > 100){
        alert("You must enter a valid name or score");
    }
    else {
        names[names.length] = name;
        scores[scores.length] = score;

    }

};
var displayScores = function () {
    var scoresDisplay = "<h2>Scores</h2>";
    scoresDisplay += "<tr><td>Name</td><td>Score</td></tr>";
    for(var i = 0; i<scores.length; i++){
        scoresDisplay += "<tr><td>"+scores[i]+"</td><td>" + names[i] + "</td></tr>";
    }
    $("scores_table").innerHTML = scoresDisplay;
};

var displayResults = function () {
    var scoreTotal = 0;
    var highScore = 0;
    var scoreAvg = 0;
    var results = "<h2>Results</h2>";
    var highName = "";
    for(var i=0; i<scores.length;i++){
        scoreTotal += scores[i];
        if(scores[i] > highScore){
            highScore = scores[i];
            highName = names[i];
        }
    }
    scoreAvg = scoreTotal / scores.length;
    results += "<p>Average score = " + scoreAvg + "</p>";
    results += "<p>High score = " + highName + " with a score of " + highScore;
    $("results").innerHTML = results;
};



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


