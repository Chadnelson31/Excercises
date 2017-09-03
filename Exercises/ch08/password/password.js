"use strict";
var $ = function(id) { return document.getElementById(id); };

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};

var generatePassword = function() {
    $("password").value = ""; // clear previous entry
    var userInput= $("num").value;
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
    var output = $("password");

    if(isNaN(userInput)) {
        alert("Please enter a valid number, or suffer the consequences! \n(like not getting a random password)");
        $("password").value = "";
    } else {
        for (var i = 0; i < userInput; ++i) {
            output.value += chars.charAt(getRandomNumber(67));
        }
    }
    
};

var clearFields = function() {
    $("num").value = "";
    $("password").value = "";
    $("num").focus();
};

window.onload = function() {
    $("generate").onclick = generatePassword;
    $("clear").onclick = clearFields;
    $("num").focus();
};