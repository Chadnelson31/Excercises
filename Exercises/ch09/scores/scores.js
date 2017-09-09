//standard get element function
var $ = function (id) { return document.getElementById(id); };

//global arrays for storing data
var score_value = [];
var output = [];


//
var displayScores = function () {
    var total = 0;
    for (i=0;i < score_value.length; i++) {
        total += score_value[i];
    }
    total /= score_value.length;
    $("average_score").value = total;
    $("scores").value = output.join("\n");

};

var addScore = function () {
    var scorenum = parseInt($("score").value);
    var name = $("last_name").value + ", " +
        $("first_name").value + ": " +
        scorenum;

    output.push(name);
    score_value.push(scorenum);

    displayScores();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("score").value = "";
    $("first_name").focus();
};

var clearScores = function () {
    score_value = [];
    output = [];
    
    // remove the score data from the web page
    $("average_score").value = "";
    $("scores").value = "";
    
    $("first_name").focus();
};

var sortScores = function () {
    output.sort();

    displayScores();
};

window.onload = function () {
    $("add_button").onclick = addScore;
    $("clear_button").onclick = clearScores;    
    $("sort_button").onclick = sortScores;    
    $("first_name").focus();
};