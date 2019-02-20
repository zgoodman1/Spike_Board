"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player() {
        this.name = "";
        this.team = "";
        this.firstServesOn = 0;
        this.firstServeTotal = 0;
        this.firstServePercentage = 0;
        this.numberofAces = 0;
        this.numberOfFaults = 0;
        this.secondServeTotal = 0;
        this.secondServeMade = 0;
        this.secondServeAces = 0;
        this.secondServePercentage = 0;
        this.numberOfBreaksOnServe = 0;
        this.numberOfTimesAced = 0;
        this.numberOfBreaksWhenReturning = 0;
        this.dTOn1stServe = 0;
        this.dTon2ndServe = 0;
        this.numberOfDefensiveTouches = 0;
        this.numberOfDefensiveTouchesNotReturned = 0;
        this.downOn1 = 0;
        this.downOn2 = 0;
        this.hitsOn = 0;
        this.kills = 0;
        this.totalHits = 0;
        this.hittingPercentage = 0;
        this.killPercentage = 0;
    }
    Player.prototype.ace = function () {
        this.numberofAces += 1;
        this.numberOfBreaksOnServe += 1;
        this.firstServesOn += 1;
    };
    Player.prototype.sace = function () {
        this.secondServeAces += 1;
        this.numberOfBreaksOnServe += 1;
        this.secondServeMade += 1;
    };
    Player.prototype.calc = function () {
        this.firstServePercentage = (this.firstServesOn / this.firstServeTotal) * 100;
        this.hittingPercentage = (this.hitsOn / this.totalHits) * 100;
        this.secondServePercentage = (this.secondServeMade / this.secondServeTotal) * 100;
        this.killPercentage = (this.kills / this.totalHits) * 100;
    };
    return Player;
}());
var Team = /** @class */ (function () {
    function Team() {
        this.name = "";
        this.score = 0;
    }
    return Team;
}());
var Point = /** @class */ (function () {
    function Point() {
        this.score = "";
        this.server = "";
        this.returner = "";
        this.ace = false;
        this.pocket = false;
        this.miss = false;
        this.secondServe = false;
        this.secondAce = false;
        this.secondMiss = false;
        this.attacker = "";
        this.attackOnNet = false;
        this.defensiveTouch = false;
        this.whoDT = "";
        this.dTOn = false;
        this.winner = "";
    }
    return Point;
}());
var isServing;
var servingOrder;
var returningOrder;
var isReturning;
var teamServingOrder;
var teamServing;
var pointWinner;
var serve = 1;
var teamAttacking;
var teamDefending;
var defendingPlayer;
var attackingPlayer;
var ballInPlay;
var numberOfShotsIP = 0;
var numberOfRallies = 0;
var tempPlayer1;
var tempPlayer2;
var tempPlayer3;
var tempPlayer4;
var resetInput = false;
var team1 = new Team();
var team2 = new Team();
var player1 = new Player();
var player2 = new Player();
var player3 = new Player();
var player4 = new Player();
//------------------------
var gameTo = 0;
var initialServer = new Player();
//document.getElementById("team1Names").style.display="block";
/*tempPlayer1 = player1;
tempPlayer2 = player2;
tempPlayer3 = player3;
tempPlayer4 = player4;
serve = 1;
isServing.firstServeTotal += 1;
let firstServeResult = await promptString("F, A, IP?");
if ( firstServeResult === "F") {
    fault();
    let secondServeResult = await promptString("F, A, IP?");
    if (secondServeResult === "F") {
        fault();
    } else if ( secondServeResult === "A") {
        ace();
    } else {
        inPlay();
    }
} else if ( firstServeResult === "A") {
    ace();
} else {
    inPlay();
    while (ballInPlay === true) {
        let returnResult = await promptString("D1, D2, D3, NH?");
        if (returnResult === "D1") {
            downOn1();
            let hitResult = await promptString("K, M, DT?");
            if (hitResult === "K") {kill(); } else
            if (hitResult === "M") {missedHit(); } else
            if (hitResult === "DT1" || "1" || teamDefending.player1.denotation) {  player1DT();
                } else {player2DT(); }
        } else if (returnResult === "D2") {
            downOn2();
            let hitResult = await promptString("K, M, DT?");
            if (hitResult === "K") {kill(); } else
            if (hitResult === "M") {missedHit(); } else {
            if (hitResult === "DT1" || "1" || teamDefending.player1.denotation) {  player1DT();
                } else {player2DT(); }
                    }
        } else if (returnResult === "D3") {
            downOn3();
            let hitResult = await promptString("K, M, DT1 0r DT2 ?");
            if (hitResult === "K") {kill(); } else
            if (hitResult === "M") {missedHit(); } else {
            if (hitResult === "DT1" || "1" || teamDefending.player1.denotation) {  player1DT();
            } else {
                player2DT();
            }
            }
        } else { notReturned(); }
    }

}
let resetPromt = await promptString("Reset point Yes or no")
if(resetPromt === "yes"){resetInput = false; }
if(resetInput = true){
    resetPoint();
}
if (pointWinner === teamServing) {
    teamServing.score += 1;
    isReturning = swapReturnerBreak(returningOrder);
    //score and serving/returning print
} else if(teamServing == team1) {
    team2.score += 1;
    whoIsServing = await promptNumber("Who is serving player 3 or 4?");

    if (whoIsServing == player3.name) {
        isServing = swapServer(servingOrder);
    } else {
        establishServingOrder(servingOrder);
        isServing = swapServer(servingOrder);
    }
    isReturning = swapReturner(returningOrder);
    //score and serving/returning print
    teamServing = swapServingTeam(teamServingOrder);
}else if(teamServing == team2){
  team2.score += 1;
  whoIsServing = await promptNumber("Who is serving player 3 or 4?");

  if (whoIsServing === 3) {
      isServing = swapServer(servingOrder);
  } else {
      establishServingOrder(servingOrder);
      isServing = swapServer(servingOrder);
  }
  isReturning = swapReturner(returningOrder);
  //score and serving/returning print
  teamServing = swapServingTeam(teamServingOrder);
}
if(resetInput = true){
    resetPoint();
}*/
//OnClick Functions:
//Continue Button functionality (first 3 pages)
exports.continueButton = function (currID) {
    if (currID == "team1Names") {
        team1.name = document.getElementById("t1name").value;
        player1.name = document.getElementById("p1name").value;
        document.getElementById("p1button").innerHTML = player1.name;
        player2.name = document.getElementById("p2name").value;
        document.getElementById("p2button").innerHTML = player2.name;
        team1.player1 = player1;
        team1.player2 = player2;
        console.log(team1.name + player1.name + player2.name);
        document.getElementById("team2Names").style.display = "block";
    }
    else if (currID == "team2Names") {
        team2.name = document.getElementById("t2name").value;
        player3.name = document.getElementById("p3name").value;
        document.getElementById("p3button").innerHTML = player3.name;
        player4.name = document.getElementById("p4name").value;
        document.getElementById("p4button").innerHTML = player4.name;
        console.log(team2.name + player3.name + player4.name);
        team2.player1 = player3;
        team2.player2 = player4;
        document.getElementById("gameTo").style.display = "block";
    }
    else if (currID == "gameTo") {
        gameTo = +document.getElementById("gameToInput").value;
        document.getElementById("firstServer").style.display = "block";
    }
    document.getElementById(currID).style.display = "none";
};
//Player Click functionality (for screens 4 and 5 (first server))
exports.playerClick = function (currID, player) {
    if (currID == "firstServer") {
        document.getElementById("firstReturner").style.display = "block"; //ugly way to do this, but needs to be displayed to be edited
        if (player == "player1") {
            servingOrder = [player1, player3, player2, player4];
            document.getElementById("p3return").innerHTML = player3.name;
            document.getElementById("p4return").innerHTML = player4.name;
            document.getElementById("team1return").style.display = "none";
            teamServingOrder = [team1, team2];
            teamServing = team1;
        }
        else if (player == "player2") {
            servingOrder = [player2, player3, player1, player4];
            document.getElementById("p3return").innerHTML = player3.name;
            document.getElementById("p4return").innerHTML = player4.name;
            document.getElementById("team1return").style.display = "none";
            teamServingOrder = [team1, team2];
            teamServing = team1;
        }
        else if (player == "player3") {
            servingOrder = [player3, player1, player4, player2];
            document.getElementById("p1return").innerHTML = player1.name;
            document.getElementById("p2return").innerHTML = player2.name;
            document.getElementById("team2return").style.display = "none";
            teamServingOrder = [team2, team1];
            teamServing = team2;
        }
        else if (player == "player4") {
            servingOrder = [player4, player1, player3, player2];
            document.getElementById("p1return").innerHTML = player1.name;
            document.getElementById("p2return").innerHTML = player2.name;
            document.getElementById("team2return").style.display = "none";
            teamServingOrder = [team2, team1];
            teamServing = team2;
        }
        isServing = servingOrder[0];
        initialServer = isServing;
    }
    else if (currID == "firstReturner") {
        if (player == "player1") {
            if (initialServer == player3) {
                returningOrder = [player1, player3, player2, player4];
            }
            else {
                returningOrder = [player1, player4, player2, player3];
            }
        }
        else if (player == "player2") {
            if (initialServer == player3) {
                returningOrder = [player2, player4, player1, player3];
            }
            else {
                returningOrder = [player2, player3, player1, player4];
            }
        }
        else if (player == "player3") {
            if (initialServer == player1) {
                returningOrder = [player3, player1, player4, player2];
            }
            else {
                returningOrder = [player3, player1, player4, player2];
            }
        }
        else if (player == "player4") {
            if (initialServer == player1) {
                returningOrder = [player4, player2, player3, player1];
            }
            else {
                returningOrder = [player4, player2, player3, player1];
            }
        }
        isReturning = returningOrder[0];
        document.getElementById("point1serve1").style.display = "block";
        tempPlayer1 = player1;
        tempPlayer2 = player2;
        tempPlayer3 = player3;
        tempPlayer4 = player4;
        serve = 1;
        isServing.firstServeTotal += 1;
    }
    document.getElementById(currID).style.display = "none";
};
exports.p1Serve1Input = function (input) {
    if (input == "fault") {
        document.getElementById("point1serve2").style.display = "block";
        exports.fault();
    }
    else if (input == "ace") {
        document.getElementById("point1continue").style.display = "block";
        exports.ace();
    }
    else if (input == "inPlay") {
        document.getElementById("point1inPlay").style.display = "block";
        exports.inPlay();
    }
    document.getElementById("point1serve1").style.display = "none";
};
exports.p1Serve2Input = function (input) {
    if (input == "fault") {
        document.getElementById("point1continue").style.display = "block";
        exports.fault();
    }
    else if (input == "ace") {
        document.getElementById("point1continue").style.display = "block";
        exports.ace();
    }
    else if (input == "inPlay") {
        document.getElementById("point1inPlay").style.display = "block";
        exports.inPlay();
    }
    document.getElementById("point1serve2").style.display = "none";
};
exports.p1InPlayInput = function (input) {
    if (input == "onOne") {
        exports.downOn1();
        document.getElementById("point1hitResult").style.display = "block";
    }
    else if (input == "onTwo") {
        exports.downOn2();
        document.getElementById("point1hitResult").style.display = "block";
    }
    else if (input == "onThree") {
        exports.downOn3();
        document.getElementById("point1hitResult").style.display = "block";
    }
    else if (input == "noHit") {
        exports.notReturned();
        document.getElementById("point1continue").style.display = "block";
    }
    document.getElementById("point1inPlay").style.display = "none";
};
exports.p1HitInput = function (input) {
    if (input == "kill") {
        exports.kill();
        document.getElementById("point1continue").style.display = "block";
    }
    else if (input == "miss") {
        exports.missedHit();
        document.getElementById("point1continue").style.display = "block";
    }
    else if (input == "dTouch1") {
        exports.player1DT();
        document.getElementById("point1inPlay").style.display = "block";
    }
    else if (input == "dTouch2") {
        exports.player2DT();
        document.getElementById("point1inPlay").style.display = "block";
    }
    document.getElementById("point1hitResult").style.display = "none";
};
exports.nextPoint = function (pointOne) {
    if (pointOne) {
        if (pointWinner === teamServing) {
            teamServing.score += 1;
            isReturning = exports.swapReturnerBreak(returningOrder);
            console.log(team1.name + ": " + team1.score + " " + team2.name + ": " + team2.score);
            console.log("Serving: " + isServing.name + "Returning: " + isReturning.name);
            document.getElementById("point1serve1").style.display = "block";
        }
        else if (teamServing == team1) {
            team2.score += 1;
            console.log(team1.name + ": " + team1.score + " " + team2.name + ": " + team2.score);
            document.getElementById("secondServer").style.display = "block";
            document.getElementById("p1serve").style.display = "none";
            document.getElementById("p2serve").style.display = "none";
            document.getElementById("p3serve").innerHTML = player3.name;
            document.getElementById("p4serve").innerHTML = player4.name;
        }
        else if (teamServing == team2) {
            team1.score += 1;
            console.log(team1.name + ": " + team1.score + " " + team2.name + ": " + team2.score);
            document.getElementById("secondServer").style.display = "block";
            document.getElementById("p3serve").style.display = "none";
            document.getElementById("p4serve").style.display = "none";
            document.getElementById("p1serve").innerHTML = player1.name;
            document.getElementById("p2serve").innerHTML = player2.name;
        }
        document.getElementById("point1continue").style.display = "none";
        if ((team1.score >= gameTo || team2.score >= gameTo) && Math.abs(team1.score - team2.score) >= 2) {
            document.getElementById("secondServer").style.display = "none";
            document.getElementById("point1serve1").style.display = "none";
            document.getElementById("gameOver").style.display = "block";
            for (var i = 0; i < 4; i++) {
                servingOrder[i].calc();
                console.log(servingOrder[i]);
            }
            console.log("Number of Rallies " + numberOfRallies);
            console.log("Number of Aces " + exports.getNumberOfAces(servingOrder));
        }
    }
    else {
        if (pointWinner == teamServing) {
            teamServing.score += 1;
            isReturning = exports.swapReturnerBreak(returningOrder);
            console.log(team1.name + ": " + team1.score + " " + team2.name + ": " + team2.score);
            console.log("Serving: " + isServing.name + "Returning: " + isReturning.name);
        }
        else if (teamServing == team1) {
            team2.score += 1;
            isServing = exports.swapServer(servingOrder);
            if (isServing === isReturning) {
                isReturning = exports.swapReturner(returningOrder);
                console.log(team1.name + " " + team1.score + " " + team2.name + " " + team2.score);
                console.log("Serving: " + isServing.name + " Returning:" + isReturning.name);
                teamServing = exports.swapServingTeam(teamServingOrder);
            }
            else {
                isReturning = exports.swapReturner(returningOrder);
                console.log(team1.name + " " + team1.score + " " + team2.name + " " + team2.score);
                console.log("Serving: " + isServing.name + " Returning:" + isReturning.name);
                teamServing = exports.swapServingTeam(teamServingOrder);
            }
        }
        else if (teamServing == team2) {
            team1.score += 1;
            isServing = exports.swapServer(servingOrder);
            if (isServing === isReturning) {
                isReturning = exports.swapReturner(returningOrder);
                console.log(team1.name + " " + team1.score + " " + team2.name + " " + team2.score);
                console.log("Serving: " + isServing.name + " Returning:" + isReturning.name);
                teamServing = exports.swapServingTeam(teamServingOrder);
            }
            else {
                isReturning = exports.swapReturner(returningOrder);
                console.log(team1.name + " " + team1.score + " " + team2.name + " " + team2.score);
                console.log("Serving: " + isServing.name + " Returning:" + isReturning.name);
                teamServing = exports.swapServingTeam(teamServingOrder);
            }
        }
        document.getElementById("genServe1").style.display = "block";
        document.getElementById("genContinue").style.display = "none";
    }
    tempPlayer1 = player1;
    tempPlayer2 = player2;
    tempPlayer3 = player3;
    tempPlayer4 = player4;
    serve = 1;
    isServing.firstServeTotal += 1;
    if (numberOfShotsIP > 2) {
        numberOfRallies += 1;
    }
    if ((team1.score >= gameTo || team2.score >= gameTo) && Math.abs(team1.score - team2.score) >= 2) {
        isServing.firstServeTotal -= 1;
        document.getElementById("genServe1").style.display = "none";
        document.getElementById("gameOver").style.display = "block";
        for (var i = 0; i < 4; i++) {
            servingOrder[i].calc();
            console.log(servingOrder[i]);
        }
        console.log("Number of Rallies " + numberOfRallies);
        console.log("Number of Aces " + exports.getNumberOfAces(servingOrder));
    }
};
exports.secondServeSet = function (player) {
    if (player == player4.name) {
        exports.establishServingOrder(servingOrder);
        exports.establishReturningOrder(returningOrder);
    }
    else if (player == player2.name) {
        exports.establishServingOrder(servingOrder);
        exports.establishReturningOrder(returningOrder);
    }
    isServing = exports.swapServer(servingOrder);
    isReturning = exports.swapReturner(returningOrder);
    teamServing = exports.swapServingTeam(teamServingOrder);
    console.log("Serving: " + isServing.name + "Returning: " + isReturning.name);
    tempPlayer1 = player1;
    tempPlayer2 = player2;
    tempPlayer3 = player3;
    tempPlayer4 = player4;
    serve = 1;
    isServing.firstServeTotal += 1;
    document.getElementById("genServe1").style.display = "block";
    document.getElementById("secondServer").style.display = "none";
};
exports.genServeResult = function (serveNum, input) {
    /*tempPlayer1 = player1;
    tempPlayer2 = player2;
    tempPlayer3 = player3;
    tempPlayer4 = player4;
    serve = 1;
    numberOfShotsIP = 0;
    isServing.firstServeTotal += 1;*/
    if (serveNum == 1) {
        if (input == "fault") {
            document.getElementById("genServe2").style.display = "block";
            exports.fault();
        }
        else if (input == "ace") {
            document.getElementById("genContinue").style.display = "block";
            exports.ace();
        }
        else if (input == "inPlay") {
            document.getElementById("genInPlay").style.display = "block";
            exports.inPlay();
        }
        document.getElementById("genServe1").style.display = "none";
    }
    else {
        if (input == "fault") {
            document.getElementById("genContinue").style.display = "block";
            exports.fault();
        }
        else if (input == "ace") {
            document.getElementById("genContinue").style.display = "block";
            exports.ace();
        }
        else if (input == "inPlay") {
            document.getElementById("genInPlay").style.display = "block";
            exports.inPlay();
        }
        document.getElementById("genServe2").style.display = "none";
    }
};
exports.genInPlayResult = function (input) {
    if (input == "onOne") {
        exports.downOn1();
        document.getElementById("genHitResult").style.display = "block";
    }
    else if (input == "onTwo") {
        exports.downOn2();
        document.getElementById("genHitResult").style.display = "block";
    }
    else if (input == "onThree") {
        exports.downOn3();
        document.getElementById("genHitResult").style.display = "block";
    }
    else if (input == "noHit") {
        exports.notReturned();
        document.getElementById("genContinue").style.display = "block";
    }
    document.getElementById("genInPlay").style.display = "none";
};
exports.genHitResult = function (input) {
    if (input == "kill") {
        exports.kill();
        document.getElementById("genContinue").style.display = "block";
    }
    else if (input == "miss") {
        exports.missedHit();
        document.getElementById("genContinue").style.display = "block";
    }
    else if (input == "dTouch1") {
        exports.player1DT();
        document.getElementById("genInPlay").style.display = "block";
    }
    else if (input == "dTouch2") {
        exports.player2DT();
        document.getElementById("genInPlay").style.display = "block";
    }
    document.getElementById("genHitResult").style.display = "none";
};
exports.establishServingOrder = function (sO) {
    var temp = sO[1];
    sO[1] = sO[3];
    sO[3] = temp;
};
exports.establishReturningOrder = function (rO) {
    var temp = rO[1];
    rO[1] = rO[3];
    rO[3] = temp;
};
exports.swapReturnerBreak = function (rO) {
    var temp = rO[0];
    rO[0] = rO[2];
    rO[2] = temp;
    temp = rO[1];
    rO[1] = rO[3];
    rO[3] = temp;
    return rO[0];
};
exports.swapServingTeam = function (sO) {
    var temp = sO[0];
    sO[0] = sO[1];
    sO[1] = temp;
    return sO[0];
};
exports.swapReturner = function (rO) {
    var temp = [];
    for (var i = 0; i < 4; i++) {
        temp[i] = rO[i];
    }
    rO[3] = temp[0];
    for (var i = 0; i < 3; i++) {
        rO[i] = temp[i + 1];
    }
    return rO[0];
};
exports.swapServer = function (sO) {
    var temp = [];
    for (var i = 0; i < 4; i++) {
        temp[i] = sO[i];
    }
    sO[3] = temp[0];
    for (var i = 0; i < 3; i++) {
        sO[i] = temp[i + 1];
    }
    return sO[0];
};
// Called on pocket serve
exports.fault = function () {
    if (serve === 1) {
        isServing.secondServeTotal += 1;
        isServing.numberOfFaults += 1;
        serve += 1;
    }
    else {
        pointWinner = teamServingOrder[1];
    }
};
// Called on Ace
exports.ace = function () {
    if (serve === 1) {
        isServing.ace();
    }
    else {
        isServing.sace();
    }
    isReturning.numberOfTimesAced += 1;
    isReturning.numberOfBreaksWhenReturning += 1;
    pointWinner = teamServing;
};
// Start ball in play
exports.inPlay = function () {
    if (serve === 1) {
        isServing.firstServesOn += 1;
    }
    else {
        isServing.secondServeMade += 1;
    }
    teamAttacking = teamServingOrder[1];
    teamDefending = teamServing;
    defendingPlayer = isReturning;
    ballInPlay = true;
};
exports.downOn1 = function () {
    attackingPlayer = defendingPlayer;
    attackingPlayer.downOn1 += 1;
    attackingPlayer.totalHits += 1;
};
exports.downOn2 = function () {
    attackingPlayer = exports.swapAttacker(defendingPlayer);
    attackingPlayer.downOn2 += 1;
    attackingPlayer.totalHits += 1;
};
exports.downOn3 = function () {
    attackingPlayer = defendingPlayer;
    attackingPlayer.totalHits += 1;
};
exports.kill = function () {
    attackingPlayer.hitsOn += 1;
    attackingPlayer.kills += 1;
    if (teamAttacking === teamServing) {
        isServing.numberOfBreaksOnServe += 1;
        isReturning.numberOfBreaksWhenReturning += 1;
    }
    pointWinner = teamAttacking;
    ballInPlay = false;
};
exports.missedHit = function () {
    if (teamDefending === teamServing) {
        isServing.numberOfBreaksOnServe += 1;
        isReturning.numberOfBreaksWhenReturning += 1;
    }
    pointWinner = teamDefending;
    ballInPlay = false;
};
exports.player1DT = function () {
    attackingPlayer.hitsOn += 1;
    numberOfShotsIP += 1;
    var temp;
    temp = teamAttacking;
    teamAttacking = teamDefending;
    teamDefending = temp;
    defendingPlayer = teamAttacking.player1;
    defendingPlayer.numberOfDefensiveTouches += 1;
    if (serve === 1 && teamAttacking === teamServing && numberOfShotsIP === 1) {
        isServing.dTOn1stServe += 1;
    }
    else if (serve === 2 && teamAttacking === teamServing && numberOfShotsIP === 1) {
        isServing.dTon2ndServe += 1;
    }
};
exports.player2DT = function () {
    attackingPlayer.hitsOn += 1;
    numberOfShotsIP += 1;
    var temp;
    temp = teamAttacking;
    teamAttacking = teamDefending;
    teamDefending = temp;
    defendingPlayer = teamAttacking.player2;
    defendingPlayer.numberOfDefensiveTouches += 1;
    if (serve === 1 && teamAttacking === teamServing && numberOfShotsIP === 1) {
        isServing.dTOn1stServe += 1;
    }
    else if (serve === 2 && teamAttacking === teamServing && numberOfShotsIP === 1) {
        isServing.dTon2ndServe += 1;
    }
};
exports.swapAttacker = function (rp) {
    if (defendingPlayer === teamDefending.player1) {
        return teamDefending.player2;
    }
    else if (defendingPlayer === teamDefending.player2) {
        return teamDefending.player1;
    }
    else {
        return teamAttacking.player1;
    }
};
exports.notReturned = function () {
    if (teamAttacking !== teamServing) {
        isServing.numberOfBreaksOnServe += 1;
        isReturning.numberOfBreaksWhenReturning += 1;
    }
    pointWinner = teamDefending;
    ballInPlay = false;
};
exports.getNumberOfAces = function (data) {
    var result = 0;
    for (var i = 0; i < 4; i++) {
        result += data[i].numberofAces;
        result += data[i].secondServeAces;
    }
    return result;
};
exports.resetPoint = function () {
    player1 = tempPlayer1;
    player2 = tempPlayer2;
    player3 = tempPlayer3;
    player4 = tempPlayer4;
};
