//standard get element function
var $ = function (id) { return document.getElementById(id); };

//global arrays for storing data
var score_value = [];
var output = [];

var total = 0;

//
var displayScores = function () {
    for (i=0;i < score_value.length; i++) {
        total += score_value[i];
    }
    total /= score_value.length;
};

var addScore = function () {
    
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("score").value = "";
    $("first_name").focus();
};

var clearScores = function () {   

    
    // remove the score data from the web page
    $("average_score").value = "";
    $("scores").value = "";
    
    $("first_name").focus();
};

var sortScores = function () {   
     
};

window.onload = function () {
    $("add_button").onclick = addScore;
    $("clear_button").onclick = clearScores;    
    $("sort_button").onclick = sortScores;    
    $("first_name").focus();
};