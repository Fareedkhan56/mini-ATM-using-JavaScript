var userValue = prompt("Enter Your Money");
 
if (userValue >= 5000){

    var fiveThousand = userValue/5000;
    console.log("5000 = "+ Math.floor(fiveThousand));

    var leftAmountAfter5000 = userValue % 5000;

    var oneThousand = leftAmountAfter5000/1000;
    console.log("1000 = "+ Math.floor(oneThousand));

    var leftAmountAfter1000 = leftAmountAfter5000 % 1000;

    var fiveHundred = leftAmountAfter1000 / 500;
    console.log("500 = "+Math.floor(fiveHundred));

    var leftAmountAfter500 = leftAmountAfter1000 % 500;

    var oneHundred = leftAmountAfter500 / 100;
    console.log("100 = " + Math.floor(oneHundred));

    var leftAmountAfter100 = leftAmountAfter500 % 100;
    
    console.log(leftAmountAfter100)
}

else if (userValue >= 100){
    var oneThousand = userValue/1000;
    console.log("1000 = "+ Math.floor(oneThousand));

    var leftAmountAfter1000 = userValue % 1000;

    var fiveHundred = leftAmountAfter1000 / 500;
    console.log("500 = "+Math.floor(fiveHundred));

    var leftAmountAfter500 = leftAmountAfter1000  % 500;

    var oneHundred = leftAmountAfter500 / 100;
    console.log("100 = " + Math.floor(oneHundred));

    var leftAmountAfter100 = leftAmountAfter500 % 100;
    
    console.log(leftAmountAfter100);
}