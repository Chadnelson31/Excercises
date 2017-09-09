"use strict";
var $ = function(id) { return document.getElementById(id); };

var calculateDays = function() {  
    var event = $("event").value;
    var dt = $("date").value;  
    var message = $("message").firstChild;  
    var date, days;
    
    // clear previous message
    message.nodeValue = " ";
    
	if(Enteries(event, dt,message)) {
		date= enteredDate(dt, message)
	}

			if (message.nodeValue=== " ") {
			days=calculateDate(date); 
			
			displayDate(event,days,message);
			 
		}
	 
};

window.onload = function() {
    $("countdown").onclick = calculateDays;
    $("event").focus();
};