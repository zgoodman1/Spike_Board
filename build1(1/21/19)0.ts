class Player {
    name: string = "";
    team: string = "";
    firstServesOn: number = 0;
    firstServeTotal: number = 0;
    firstServePercentage: number = 0;
    numberofAces: number = 0;
    numberOfFaults:number = 0;
    secondServeTotal: number = 0;
    secondServeMade: number = 0;
    secondServeAces: number = 0;
    secondServePercentage: number = 0;
    numberOfBreaksOnServe:number = 0;
    numberOfTimesAced: number = 0;
    numberOfBreaksWhenReturning: number = 0;
    dTOn1stServe: number = 0;
    dTon2ndServe: number = 0;
    numberOfDefensiveTouches: number = 0;
    numberOfDefensiveTouchesNotReturned: number = 0;
    downOn1: number = 0;
    downOn2: number = 0;
    hitsOn: number = 0;
    kills: number = 0;
    totalHits: number = 0;
    hittingPercentage: number = 0;
    killPercentage: number = 0;


    ace() {
        this.numberofAces += 1;
        this.numberOfBreaksOnServe += 1;
        this.firstServesOn += 1;
    }
    sace() {
        this.secondServeAces += 1;
        this.numberOfBreaksOnServe += 1;
        this.secondServeMade += 1;
    }
    calc() {
        this.firstServePercentage = (this.firstServesOn / this.firstServeTotal) * 100;
        this.hittingPercentage = (this.hitsOn / this.totalHits ) * 100;
        this.secondServePercentage = (this.secondServeMade / this. secondServeTotal) * 100;
        this.killPercentage = (this.kills / this.totalHits) * 100;
    }



}
class Team {
    name: string = "";
    score: number = 0;
    player1: Player;
    player2: Player;

}

class Point {
    score: string = "";
    server: string = "";
    returner: string = "";
    ace: boolean = false;
    pocket: boolean = false;
    miss: boolean = false;
    secondServe: boolean = false;
    secondAce: boolean = false;
    secondMiss: boolean = false;
    attacker: string = "";
    attackOnNet: boolean = false;
    defensiveTouch: boolean = false;
    whoDT: string = "";
    dTOn: boolean = false;
    winner: string = "";

}
let isServing: Player;
let servingOrder: Player[];
let returningOrder: Player[];
let isReturning: Player;
let teamServingOrder: Team[];
let teamServing: Team;
let pointWinner: Team;
let serve: number = 1;
let teamAttacking: Team;
let teamDefeding: Team;
let defendingPlayer: Player;
let attackingPlayer: Player;
let ballInPlay: boolean;
let numberOfShotsIP: number = 0;
let numberOfRallies: number = 0;
let tempPlayer1: Player;
let tempPlayer2: Player;
let tempPlayer3: Player;
let tempPlayer4: Player;
let resetInput = false;
let team1 = new Team();
let team2 = new Team();
let player1 = new Player();
let player2 = new Player();
let player3 = new Player();
let player4 = new Player();
//------------------------
let gameTo = 0;
let initialServer = new Player();
//document.getElementById("team1Names").style.display="block";

//OnClick Functions:
//Continue Button functionality (first 3 pages)
export let continueButton = (currID: string): void => {
  if(currID == "team1Names"){
    team1.name = (<HTMLInputElement>document.getElementById("t1name")).value;
    player1.name = (<HTMLInputElement>document.getElementById("p1name")).value;
    document.getElementById("p1button").innerHTML = player1.name;
    player2.name = (<HTMLInputElement>document.getElementById("p2name")).value;
    document.getElementById("p2button").innerHTML = player2.name;
    team1.player1 = player1;
    team1.player2 = player2;
    console.log(team1.name + player1.name + player2.name);
    document.getElementById("team2Names").style.display="block";
  }
  else if(currID == "team2Names"){
    team2.name = (<HTMLInputElement>document.getElementById("t2name")).value;
    player3.name = (<HTMLInputElement>document.getElementById("p3name")).value;
    document.getElementById("p3button").innerHTML = player3.name;
    player4.name = (<HTMLInputElement>document.getElementById("p4name")).value;
    document.getElementById("p4button").innerHTML = player4.name;
    console.log(team2.name + player3.name + player4.name);
    team2.player1 = player3;
    team2.player2 = player4;
    document.getElementById("gameTo").style.display="block";
  }
  else if(currID == "gameTo"){
    gameTo = +(<HTMLInputElement>document.getElementById("gameToInput")).value;
    document.getElementById("firstServer").style.display="block";
  }
  document.getElementById(currID).style.display="none";
};


//Player Click functionality (for screens 4 and 5 (first server))
export let playerClick = (currID: string, player: string): void =>{
  if(currID == "firstServer"){
    document.getElementById("firstReturner").style.display="block"; //ugly way to do this, but needs to be displayed to be edited
    if(player == "player1"){
      servingOrder = [player1, player3, player2, player4]
      document.getElementById("p1return").innerHTML = player1.name;
      document.getElementById("p2return").innerHTML = player2.name;
      document.getElementById("team2return").style.display = "none";
      teamServingOrder = [team1, team2];
      teamServing = team1;
    }
    else if(player == "player2"){
      servingOrder = [player2, player3, player1, player4]
      document.getElementById("p1return").innerHTML = player1.name;
      document.getElementById("p2return").innerHTML = player2.name;
      document.getElementById("team2return").style.display = "none";
      teamServingOrder = [team1, team2];
      teamServing = team1;
    }
    else if(player == "player3"){
      servingOrder = [player3, player1, player4, player2]
      document.getElementById("p3return").innerHTML = player3.name;
      document.getElementById("p4return").innerHTML = player4.name;
      document.getElementById("team1return").style.display = "none";
      teamServingOrder = [team2, team1];
      teamServing = team2;
    }
    else if(player == "player4"){
      servingOrder = [player4, player1, player3, player2]
      document.getElementById("p3return").innerHTML = player3.name;
      document.getElementById("p4return").innerHTML = player4.name;
      document.getElementById("team1return").style.display = "none";
      teamServingOrder = [team2, team1];
      teamServing = team2;
    }
    isServing = servingOrder[0];
    initialServer = isServing;

  }
  else if(currID == "firstReturner"){
      if(player == "player1"){
        if(initialServer == player3){
          returningOrder = [player1, player3, player2, player4]
        }
        else{
          returningOrder = [player1, player4, player2, player3]
        }
      }
      else if(player == "player2"){
        if(initialServer == player3){
          returningOrder = [player2, player4, player1, player3]
        }
        else{
          returningOrder = [player2, player3, player1, player4]
        }
      }
      else if(player == "player3"){
        if(initialServer == player1){
          returningOrder = [player3, player1, player4, player2]
        }
        else{
          returningOrder = [player3, player1, player4, player2]
        }
      }
      else if(player == "player4"){
        if(initialServer == player1){
          returningOrder = [player4, player2, player3, player1]
        }
        else{
          returningOrder = [player4, player2, player3, player1]
        }
      }
      isReturning = returningOrder[0];
      document.getElementById("point1serve1").style.display="none";
  }
  document.getElementById(currID).style.display="none";

}

export let establishServingOrder = (sO: Player[]): void => {
    let temp = sO[1];
    sO[1] = sO[3];
    sO[3] = temp;
};
export let establishReturningOrder = (rO: Player[]): void => {
    let temp = rO[1];
    rO[1] = rO[3];
    rO[3] = temp;
};

export let swapReturnerBreak = (rO: Player[]):Player => {
    let temp = rO[0];
    rO[0] = rO[2];
    rO[2] = temp;
    temp = rO[1];
    rO[1] = rO[3];
    rO[3] = temp;

    return rO[0];
};

export let swapServingTeam = (sO: Team[]):Team => {
    let temp = sO[0];
    sO[0] = sO[1];
    sO[1] = temp;
    return sO[0];
};

export let swapReturner = (rO: Player[]):Player => {
    let temp: Player[] = [];
    for (let i = 0; i < 4; i++) {
        temp[i] = rO[i];
    }
    rO[3] = temp[0];
    for (let i = 0; i < 3; i++) {
        rO[i] = temp[i + 1];
    }
    return rO[0];
};

export let swapServer = (sO: Player[]): Player => {
    let temp: Player[] = [];
    for (let i = 0; i < 4; i++) {
        temp[i] = sO[i];
    }
    sO[3] = temp[0];
    for (let i = 0; i < 3; i++) {
        sO[i] = temp[i + 1];
    }
    return sO[0];
};
// Called on pocket serve
export let fault = ():void => {
    if (serve === 1) {
    isServing.secondServeTotal += 1;
    isServing.numberOfFaults += 1;
    serve += 1;
    } else {
        pointWinner = teamServingOrder[1];
    }
};

// Called on Ace
export let ace = (): void => {
    if (serve === 1) {
        isServing.ace();
    } else {
        isServing.sace();
    }
    isReturning.numberOfTimesAced += 1;
    isReturning.numberOfBreaksWhenReturning += 1;
    pointWinner = teamServing;
};

// Start ball in play
export let inPlay = (): void => {
    if (serve === 1) {
        isServing.firstServesOn += 1;
    } else {
        isServing.secondServeMade += 1;
    }
    teamAttacking = teamServingOrder[1];
    teamDefeding = teamServing;
    defendingPlayer = isReturning;
    ballInPlay = true;
};

export let downOn1 = ():void => {
    attackingPlayer = defendingPlayer;
    attackingPlayer.downOn1 += 1;
    attackingPlayer.totalHits += 1;
};
export let downOn2 = ():void => {
    attackingPlayer = swapAttacker(defendingPlayer);
    attackingPlayer.downOn2 += 1;
    attackingPlayer.totalHits += 1;
};
export let downOn3 = ():void => {
    attackingPlayer = defendingPlayer;
    attackingPlayer.totalHits += 1;
};
export let kill = (): void => {
    attackingPlayer.hitsOn += 1;
    attackingPlayer.kills += 1;
    if (teamAttacking === teamServing) {
        isServing.numberOfBreaksOnServe += 1;
        isReturning.numberOfBreaksWhenReturning += 1;
    }
    pointWinner = teamAttacking;
    ballInPlay = false;
};

export let missedHit = (): void => {
    if (teamDefeding === teamServing) {
        isServing.numberOfBreaksOnServe += 1;
        isReturning.numberOfBreaksWhenReturning += 1;
    }
    pointWinner = teamDefeding;
    ballInPlay = false;
};
export let player1DT = ():void => {
    attackingPlayer.hitsOn += 1;
    numberOfShotsIP += 1;
    let temp: Team;
    temp = teamAttacking;
    teamAttacking = teamDefeding;
    teamDefeding = temp;
    defendingPlayer = teamAttacking.player1;
    defendingPlayer.numberOfDefensiveTouches += 1;
    if (serve === 1 && teamAttacking === teamServing && numberOfShotsIP === 1) {
        isServing.dTOn1stServe += 1;
    } else  if (serve === 2 && teamAttacking === teamServing && numberOfShotsIP === 1) {
        isServing.dTon2ndServe += 1;
    }
};

export let player2DT = ():void => {
    attackingPlayer.hitsOn += 1;
    numberOfShotsIP += 1;
    let temp: Team;
    temp = teamAttacking;
    teamAttacking = teamDefeding;
    teamDefeding = temp;
    defendingPlayer = teamAttacking.player2;
    defendingPlayer.numberOfDefensiveTouches += 1;
    if (serve === 1 && teamAttacking === teamServing && numberOfShotsIP === 1) {
        isServing.dTOn1stServe += 1;
    } else  if (serve === 2 && teamAttacking === teamServing && numberOfShotsIP === 1) {
        isServing.dTon2ndServe += 1;
    }
};

export let swapAttacker = (rp: Player): Player => {
    if (defendingPlayer === teamDefeding.player1) {
        return teamDefeding.player2;
    } else if (defendingPlayer === teamDefeding.player2) {
        return teamDefeding.player1;
    } else {
        return teamAttacking.player1;
    }
};

export let notReturned = ():void => {
    if (teamAttacking !== teamServing) {
        isServing.numberOfBreaksOnServe += 1;
        isReturning.numberOfBreaksWhenReturning += 1;
    }
    pointWinner = teamDefeding;
    ballInPlay = false;
};

export let getNumberOfAces = (data: Player[]): number => {
    let result = 0;
    for (let i = 0; i < 4; i++) {
       result += data[i].numberofAces;
       result += data[i].secondServeAces;
    }
    return result;
};

export let resetPoint = ():void => {
    player1 = tempPlayer1;
    player2 = tempPlayer2;
    player3 = tempPlayer3;
    player4 = tempPlayer4;
}
