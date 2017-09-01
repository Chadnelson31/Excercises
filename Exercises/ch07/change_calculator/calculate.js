var $ = function (id) { return document.getElementById(id); };

var calculateChange = function() {
    var cents = parseInt($("cents").value);

    if(cents < 0 || cents > 99){
        alert("Enter a number between 0 and 99");
    }
    else {
        var quarters = 25;
        var dimes = 10;
        var nickels = 5;
        var pennies = 1;

        quarters = Math.floor(cents/quarters);
        dimes = Math.floor((cents-(quarters*25))/dimes);
        nickels = Math.floor((cents-((quarters * 25) + (dimes*10)))/nickels);
        pennies = Math.floor((cents-(((quarters * 25) + (dimes*10) + (nickels*5))))/pennies);

        $("quarters").value = quarters;
        $("dimes").value = dimes;
        $("nickels").value = nickels;
        $("pennies").value = pennies;
    }


};
    window.onload = function () {
    $("calculate").onclick = calculateChange;
};