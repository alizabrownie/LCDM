/*

  _    ___ ___  __  __    ___         _     
 | |  / __|   \|  \/  |  / __|___  __| |___ 
 | |_| (__| |) | |\/| | | (__/ _ \/ _` / -_)
 |____\___|___/|_|  |_|  \___\___/\__,_\___|
                                             © AlizaBrown aka Messier
Font creds: KnackpackStudio

X number of options algorithm 

*/

function submit() {
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