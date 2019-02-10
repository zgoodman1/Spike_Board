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
var teamDefeding;
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
var gameTo = 0;
//document.getElementById("team1Names").style.display="block";
//OnClick Functions
exports.continueButton = function (currID) {
    if (currID == "team1Names") {
        team1.name = document.getElementById("t1name").value;
        player1.name = document.getElementById("p1name").value;
        player2.name = document.getElementById("p2name").value;
        console.log(team1.name + player1.name + player2.name);
        document.getElementById("team2Names").style.display = "block";
    }
    else if (currID == "team2Names") {
        team2.name = document.getElementById("t2name").value;
        player3.name = document.getElementById("p3name").value;
        player4.name = document.getElementById("p4name").value;
        console.log(team2.name + player3.name + player4.name);
        document.getElementById("gameTo").style.display = "block";
    }
    else if (currID == "gameTo") {
        gameTo = +document.getElementById("gameToInput").value;
        document.getElementById("firstServer").style.display = "block";
    }
    document.getElementById(currID).style.display = "none";
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
    teamDefeding = teamServing;
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
    if (teamDefeding === teamServing) {
        isServing.numberOfBreaksOnServe += 1;
        isReturning.numberOfBreaksWhenReturning += 1;
    }
    pointWinner = teamDefeding;
    ballInPlay = false;
};
exports.player1DT = function () {
    attackingPlayer.hitsOn += 1;
    numberOfShotsIP += 1;
    var temp;
    temp = teamAttacking;
    teamAttacking = teamDefeding;
    teamDefeding = temp;
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
    teamAttacking = teamDefeding;
    teamDefeding = temp;
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
    if (defendingPlayer === teamDefeding.player1) {
        return teamDefeding.player2;
    }
    else if (defendingPlayer === teamDefeding.player2) {
        return teamDefeding.player1;
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
    pointWinner = teamDefeding;
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
