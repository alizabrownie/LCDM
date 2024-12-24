/*

  _    ___ ___  __  __    ___         _     
 | |  / __|   \|  \/  |  / __|___  __| |___ 
 | |_| (__| |) | |\/| | | (__/ _ \/ _` / -_)
 |____\___|___/|_|  |_|  \___\___/\__,_\___|
                                             © AlizaBrown aka Messier
Font creds: KnackpackStudio

X number of options algorithm 

*/

// This is for the IDs (choiceX) within the .decisions where X is replaced with the INT value
// It starts a 3 because there will ALWAYS be a minimum of 2 choices
var fieldCounter = 3;

// This function is called by the addOptionButton
// It adds a new form field to the html page when user wants to input a new choice
function addChoiceField() {
    var decisionsContainer = document.querySelector('.decisions');
    var nextChoiceLabel = String.fromCharCode('A'.charCodeAt(0) + decisionsContainer.children.length / 2);

    var newChoiceLabel = document.createTextNode('Choice ' + nextChoiceLabel + ': ');

    if (decisionsContainer.children.length / 3 >= 10) { // limit 15
        alert('You can only add up to 15 choices.');
        return;
    }

    var newChoiceInput = document.createElement('input');
    newChoiceInput.type = 'text';
    newChoiceInput.placeholder = 'Enter Another Choice ';
    newChoiceInput.id = 'choice' + fieldCounter;

    fieldCounter++;

    decisionsContainer.appendChild(newChoiceLabel); // letters
    decisionsContainer.appendChild(newChoiceInput); // form field
    decisionsContainer.appendChild(document.createElement('br')); // break
}

// This checks if even or odd # of options
// Returns 0 is even 1 is odd
function checkEvenOdd() {
    var choices = document.querySelectorAll('.decisions input[type="text"]');
    var result = (choices.length % 2 === 0) ? "Even" : "Odd";
    var result = (result == "Even") ? 0 : 1;
    return result;
}

// This returns ALL user input options into an array for easier usage
function getAllOptions() {
    var options = [];
    var decisionInputs = document.querySelectorAll('.decisions input[type="text"]');

    decisionInputs.forEach(function (input) {
        options.push(input.value);
    });
    return options;
}
// Basic random number function
function rand(min, max) {
    var rnum = Math.floor(Math.random() * (max - min)) + min;
    return rnum;
}

// This is the 3 way randomizing function that was original to the LCDM
// It takes two values (any type), asigns E or O to them randomly, then selects a random number to choose one value to move forward
// RETURNS the actual value
function assignPairs([x, y]) {
    rnum = rand(0, 1000000);
    original = [x,y];
    // do not edit the values of a and b! These are tied to the user inputs
    var a = original[0];
    var b = original[1];
    // c and d hold the even and odd associations
    var c; // associate to a
    var d; // associate to b

    // START MAIN IF STATEMENT for rnum
    if (rnum % 2 == 0) {
        var rnum2 = rand(1, 100000000);
        if (rnum2 % 2 == 0) {
            if (rnum3 % 2 == 0) {
            }
            else if (rnum3 % 2 != 0) {
            }
        }
        else if (rnum2 % 2 != 0) {
            var rnum2 = rand(1, 100000000);
            if (rnum2 % 2 == 0) {
                var rnum3 = rand(1, 100000000);
                if (rnum3 % 2 == 0) {
                    c = "even";
                    d = "odd";
                }
                else if (rnum3 % 2 != 0) {
                    c = "odd";
                    d = "even";
                }
            }
            else if (rnum2 % 2 != 0) {
                var rnum3 = rand(1, 100000000);
                if (rnum3 % 2 == 0) {
                    c = "even";
                    d = "odd";
                }
                else if (rnum3 % 2 != 0) {
                    c = "odd";
                    d = "even";
                }
            }
        }
        // MAIN ELSE STATEMENT for rnum
    }
    else {
        var rnum2 = rand(1, 100000000);
        if (rnum2 % 2 == 0) {
            var rnum3 = rand(1, 100000000);
            if (rnum3 % 2 == 0) {
                c = "even";
                d = "odd";
            }
            else if (rnum3 % 2 != 0) {
                c = "odd";
                d = "even";
            }
        }
        else if (rnum2 % 2 != 0) {
            var rnum3 = rand(1, 100000000);
            if (rnum3 % 2 == 0) {
                c = "even";
                d = "odd";
            }
            else if (rnum3 % 2 != 0) {
                c = "odd";
                d = "even";
            }
        }
    }
    var finalResult;
    finalNum = rand(0, 100000);
    if (finalNum % 2 == 0) {
        if (c == "even") {
            finalResult = a;
        }
        else if (d == "even") {
            finalResult = b;
        }
    }
    else {
        if (c == "odd") {
            finalResult = a;
        }
        else if (d == "odd") {
            finalResult = b;
        }
    }
    console.log(finalResult);
    return finalResult;
}

// This is the even algorithm
function evenAlgorithm() {
    console.log("entering even alg");
    var allOptions = getAllOptions();
    console.log(allOptions);

    // while (allOptions.length != 1) {
    //     // CODE HERE OR BREAKs!
    // }
}

// This is the odd algorithm
function oddAlgorithm() {
    console.log("entering odd alg");
    var allOptions = getAllOptions();
    console.log(allOptions);
}

// WIP, this function favors the last value in array so no use yet
function randomChoiceReduce(array) {

    while (array.length > 1) {
        let newArray = [];
        
        // Pair adjacent elements and choose randomly
        for (let i = 0; i < array.length - 1; i += 2) {
            let choice = Math.random() < 0.5 ? array[i] : array[i + 1];
            newArray.push(choice);
        }
        
        // If the array has an odd number of elements, keep the last one
        if (array.length % 2 === 1) {
            newArray.push(array[array.length - 1]);
        }

        array = newArray; // Update the array with the reduced array
    }
    
    const finalChoice = array[0]; // The single remaining element

    return finalChoice;
}

function simpleRandChoice(array) {
    const randomIndex = rand(0, array.length);
    const randomChoice = array[randomIndex];
    const probablity = 100 / array.length;
    console.log(randomIndex);
    return { randomChoice, probablity };
}

// ---------------------------------------------- MAIN CODE FIRES ----------------------------------------------

// This is the multiple choice algorithm and called when #button is pressed
function submitMultiple() {

    var allOptions = getAllOptions();
    var final = simpleRandChoice(allOptions);

// Show user numbers in html
    var getid = document.getElementById("eochoice");
    getid.innerHTML = final.randomChoice;
    var getid2 = document.getElementById("prob");
    getid2.innerHTML = Math.round(final.probablity) + '%';
    document.getElementById("button").innerHTML = "Rediscover Your Doom (Try Again)";

// lucky numbers
    document.getElementById("rplace").innerHTML = rand(1, 100000000);;
    document.getElementById("rplace2").innerHTML = rand(1, 100000000);;
    document.getElementById("rplace3").innerHTML = rand(1, 100000000);;

}







// old code below for reference

/*

// This is the multiple choice algorithm and called when #button is pressed
function submitMultiple() {
    //getid vars are for replacing HTML with the puedo var values
    var getid = document.getElementById("eochoice");
    var getid2 = document.getElementById("checkeo");
    //puedo vars are for getting values from random inputs
    var puedo1 = document.getElementById("choice1").value;
    var puedo2 = document.getElementById("choice2").value;
    var check;
    var rnum = rand(1, 100000000);
    function rand(min, max) {
        var rnum = Math.floor(Math.random() * (max - min)) + min;
        return rnum;
    }
    document.getElementById("rplace").innerHTML = rnum;
    // Structure: if rnum (e/o) generate new rnum1-3, if new rnum is e/o, do 
    // START MAIN IF STATEMENT for rnum
    //even is choice 1 odd is 2
    if (rnum % 2 == 0) {
        var rnum2 = rand(1, 100000000);
        document.getElementById("rplace2").innerHTML = rnum2;
        if (rnum2 % 2 == 0) {
            var rnum3 = rand(1, 100000000); document.getElementById("rplace3").innerHTML = "[ " + rnum3 + " ]";
            if (rnum3 % 2 == 0) {
                getid.innerHTML = puedo1;
                getid2.innerHTML = "E 1 <br/> O 2";
            }
            else if (rnum3 % 2 != 0) {
                getid.innerHTML = puedo2;
                getid2.innerHTML = "E 2 <br/> O 1";
            }

        }
        else if (rnum2 % 2 != 0) {
            var rnum2 = rand(1, 100000000);
            document.getElementById("rplace2").innerHTML = rnum2;
            if (rnum2 % 2 == 0) {
                var rnum3 = rand(1, 100000000);
                document.getElementById("rplace3").innerHTML = "[ " + rnum3 + " ]";
                if (rnum3 % 2 == 0) {
                    getid.innerHTML = puedo1;
                    getid2.innerHTML = "E 1 <br/> O 2";
                }
                else if (rnum3 % 2 != 0) {
                    getid.innerHTML = puedo2;
                    getid2.innerHTML = "E 2 <br/> O 1";
                }
            }
            else if (rnum2 % 2 != 0) {
                var rnum3 = rand(1, 100000000);
                document.getElementById("rplace3").innerHTML = "[ " + rnum3 + " ]";
                if (rnum3 % 2 == 0) {
                    getid.innerHTML = puedo1;
                    getid2.innerHTML = "E 1 <br/> O 2";
                }
                else if (rnum3 % 2 != 0) {
                    getid.innerHTML = puedo2;
                    getid2.innerHTML = "E 2 <br/> O 1";
                }
            }
        }
        // MAIN ELSE STATEMENT for rnum
    }
    else {
        var rnum2 = rand(1, 100000000);
        document.getElementById("rplace2").innerHTML = rnum2;
        if (rnum2 % 2 == 0) {
            var rnum3 = rand(1, 100000000);
            document.getElementById("rplace3").innerHTML = "{ " + rnum3 + " }";
            if (rnum3 % 2 == 0) {
                getid.innerHTML = puedo1;
                getid2.innerHTML = "E 1 <br/> O 2";
            }
            else if (rnum3 % 2 != 0) {
                getid.innerHTML = puedo2;
                getid2.innerHTML = "E 2 <br/> O 1";
            }
        }
        else if (rnum2 % 2 != 0) {
            var rnum3 = rand(1, 100000000);
            document.getElementById("rplace3").innerHTML = "{ " + rnum3 + " }";
            if (rnum3 % 2 == 0) {
                getid.innerHTML = puedo1;
                getid2.innerHTML = "E 1 <br/> O 2";
            }
            else if (rnum3 % 2 != 0) {
                getid.innerHTML = puedo2;
                getid2.innerHTML = "E 2 <br/> O 1";
            }
        }
    }
    document.getElementById("button").innerHTML = "Rediscover Your Doom (Try Again)";
}
//HELPFUL TIP -- [else] & {if}
//O -> e2 & E -> e1

*/