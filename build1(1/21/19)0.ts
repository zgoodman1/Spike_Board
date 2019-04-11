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
let teamDefending: Team;
let defendingPlayer: Player;
let attackingPlayer: Player;
let ballInPlay: boolean;
let numberOfShotsIP: number = 0;
let numberOfRallies: number = 0;
let updatedPlayer1 = new Player();
let updatedPlayer2 = new Player();
let updatedPlayer3 = new Player();
let updatedPlayer4 = new Player();
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
let statsTable = new Array();
let statsView = false;
let table;
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
export let continueButton = (currID: string): void => {
  if(currID == "team1Names"){
    team1.name = (<HTMLInputElement>document.getElementById("t1name")).value;
    player1.name = (<HTMLInputElement>document.getElementById("p1name")).value;
    updatedPlayer1.name = (<HTMLInputElement>document.getElementById("p1name")).value;
    document.getElementById("p1button").innerHTML = player1.name;
    player2.name = (<HTMLInputElement>document.getElementById("p2name")).value;
    updatedPlayer2.name = (<HTMLInputElement>document.getElementById("p2name")).value;
    document.getElementById("p2button").innerHTML = player2.name;
    team1.player1 = player1;
    team1.player2 = player2;
    console.log(team1.name + player1.name + player2.name);
    //document.getElementById("team2Names").style.display="block";
  }
  else if(currID == "team2Names"){
    team2.name = (<HTMLInputElement>document.getElementById("t2name")).value;
    player3.name = (<HTMLInputElement>document.getElementById("p3name")).value;
    updatedPlayer3.name = (<HTMLInputElement>document.getElementById("p3name")).value;
    document.getElementById("p3button").innerHTML = player3.name;
    player4.name = (<HTMLInputElement>document.getElementById("p4name")).value;
    updatedPlayer4.name = (<HTMLInputElement>document.getElementById("p4name")).value;
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
  document.getElementById("teamNameWrapper").style.display="none";
};


//Player Click functionality (for screens 4 and 5 (first server))
export let playerClick = (currID: string, player: string): void =>{
  if(currID == "firstServer"){
    document.getElementById("firstReturner").style.display="block"; //ugly way to do this, but needs to be displayed to be edited
    if(player == "player1"){
      servingOrder = [player1, player3, player2, player4]
      document.getElementById("p3return").innerHTML = player3.name;
      document.getElementById("p4return").innerHTML = player4.name;
      document.getElementById("team1return").style.display = "none";
      teamServingOrder = [team1, team2];
      teamServing = team1;
    }
    else if(player == "player2"){
      servingOrder = [player2, player3, player1, player4]
      document.getElementById("p3return").innerHTML = player3.name;
      document.getElementById("p4return").innerHTML = player4.name;
      document.getElementById("team1return").style.display = "none";
      teamServingOrder = [team1, team2];
      teamServing = team1;
    }
    else if(player == "player3"){
      servingOrder = [player3, player1, player4, player2]
      document.getElementById("p1return").innerHTML = player1.name;
      document.getElementById("p2return").innerHTML = player2.name;
      document.getElementById("team2return").style.display = "none";
      teamServingOrder = [team2, team1];
      teamServing = team2;
    }
    else if(player == "player4"){
      servingOrder = [player4, player1, player3, player2]
      document.getElementById("p1return").innerHTML = player1.name;
      document.getElementById("p2return").innerHTML = player2.name;
      document.getElementById("team2return").style.display = "none";
      teamServingOrder = [team2, team1];
      teamServing = team2;
    }
    isServing = servingOrder[0];
    initialServer = isServing;

  }
  else if(currID == "firstReturner"){
      if(player == "player1"){
        if(initialServer == player3){
          returningOrder = [player1, player3, player2, player4];
        }
        else{
          returningOrder = [player1, player4, player2, player3];
        }
      }
      else if(player == "player2"){
        if(initialServer == player3){
          returningOrder = [player2, player4, player1, player3];
        }
        else{
          returningOrder = [player2, player3, player1, player4]
        }
      }
      else if(player == "player3"){
        if(initialServer == player1){
          returningOrder = [player3, player1, player4, player2];
        }
        else{
          returningOrder = [player3, player2, player4, player1];
        }
      }
      else if(player == "player4"){
        if(initialServer == player1){
          returningOrder = [player4, player2, player3, player1];
        }
        else{
          returningOrder = [player4, player1, player3, player2];
        }
      }
      isReturning = returningOrder[0];
      document.getElementById("point1serve1").style.display="block";
      /*tempPlayer1 = createPlayerCopy(player1);
      tempPlayer2 = createPlayerCopy(player2);
      tempPlayer3 = createPlayerCopy(player3);
      tempPlayer4 = createPlayerCopy(player4);
      console.log("created temp save");*/
      serve = 1;
      isServing.firstServeTotal += 1;
  }
  document.getElementById(currID).style.display="none";

}
export let p1Serve1Input = (input: string): void =>{
  if(input == "fault"){
    document.getElementById("point1serve2").style.display = "block";
    fault();
  }
  else if(input == "ace"){
    document.getElementById("point1continue").style.display = "block";
    ace();
  }
  else if(input == "inPlay"){
    document.getElementById("point1inPlay").style.display = "block";
    inPlay();
  }
  document.getElementById("point1serve1").style.display = "none";
}

export let p1Serve2Input = (input: string): void =>{
  if(input == "fault"){
    document.getElementById("point1continue").style.display = "block";
    fault();
  }
  else if(input == "ace"){
    document.getElementById("point1continue").style.display = "block";
    ace();
  }
  else if(input == "inPlay"){
    document.getElementById("point1inPlay").style.display = "block";
    inPlay();
  }
  document.getElementById("point1serve2").style.display="none";
}

export let p1InPlayInput = (input: string): void =>{
  if(input == "onOne"){
    downOn1();
    document.getElementById("point1hitResult").style.display = "block";
  }
  else if(input == "onTwo"){
    downOn2();
    document.getElementById("point1hitResult").style.display = "block";
  }
  else if(input == "onThree"){
    downOn3();
    document.getElementById("point1hitResult").style.display = "block";
  }
  else if(input == "noHit"){
    notReturned();

    document.getElementById("point1continue").style.display = "block";
  }
  document.getElementById("p1dt1button").innerHTML = "Defensive touch by " + teamDefending.player1.name;
  document.getElementById("p1dt2button").innerHTML = "Defensive touch by " + teamDefending.player2.name;
  document.getElementById("point1inPlay").style.display = "none";
}

export let p1HitInput = (input: string): void =>{
  if(input == "kill"){
    kill();
    document.getElementById("point1continue").style.display = "block";
  }
  else if(input == "miss"){
    missedHit();
    document.getElementById("point1continue").style.display = "block";
  }
  else if(input == "dTouch1"){
    player1DT();
    document.getElementById("point1inPlay").style.display = "block";
  }
  else if(input == "dTouch2"){
    player2DT();
    document.getElementById("point1inPlay").style.display = "block";
  }

  document.getElementById("point1hitResult").style.display = "none";

}

export let nextPoint = (pointOne: boolean):void =>{
  if(pointOne){
    if (pointWinner === teamServing) {
      teamServing.score += 1;
      isReturning = swapReturnerBreak(returningOrder);
      console.log(team1.name + ": " + team1.score + " " + team2.name + ": " + team2.score);
      console.log("Serving: " + isServing.name + "Returning: " + isReturning.name);
      document.getElementById("point1serve1").style.display = "block";
    }
    else if (teamServing == team1){
      team2.score += 1;
      console.log(team1.name + ": " + team1.score + " " + team2.name + ": " + team2.score);
      document.getElementById("secondServer").style.display = "block";
      document.getElementById("p1serve").style.display = "none";
      document.getElementById("p2serve").style.display = "none";
      document.getElementById("p3serve").innerHTML = player3.name;
      document.getElementById("p4serve").innerHTML = player4.name;
    }
    else if (teamServing == team2){
      team1.score +=1;
      console.log(team1.name + ": " + team1.score + " " + team2.name + ": " + team2.score);
      document.getElementById("secondServer").style.display = "block";
      document.getElementById("p3serve").style.display = "none";
      document.getElementById("p4serve").style.display = "none";
      document.getElementById("p1serve").innerHTML = player1.name;
      document.getElementById("p2serve").innerHTML = player2.name;
    }
    document.getElementById("point1continue").style.display = "none";
    if((team1.score >= gameTo || team2.score >= gameTo) && Math.abs(team1.score - team2.score) >= 2){
      document.getElementById("secondServer").style.display = "none";
      document.getElementById("point1serve1").style.display = "none";
      document.getElementById("gameOver").style.display = "block";
      /*statsTable.push(["Player Name", "First Serve Percentage", "Second Serve Percentage", "Kill Percentage"])
      for (let i = 0; i < 4; i++) {
          let currPlayer = servingOrder[i];
          currPlayer.calc();
          statsTable.push([currPlayer.name, currPlayer.firstServePercentage.toString(), currPlayer.secondServePercentage.toString(), currPlayer.killPercentage.toString()])
      }
      console.log("Number of Rallies " + numberOfRallies);
      console.log("Number of Aces " + getNumberOfAces(servingOrder));*/
    }
  }
  else{
    if(pointWinner == teamServing){
      teamServing.score += 1;
      isReturning = swapReturnerBreak(returningOrder);
      console.log(team1.name + ": " + team1.score + " " + team2.name + ": " + team2.score);
      console.log("Serving: " + isServing.name + "Returning: " + isReturning.name);
    }

    else if(teamServing == team1){
      team2.score += 1;
      isServing = swapServer(servingOrder);
      if (isServing === isReturning) {
        isReturning = swapReturner(returningOrder);
        console.log(team1.name + " " + team1.score + " " + team2.name + " " + team2.score);
        console.log("Serving: " + isServing.name + " Returning:" + isReturning.name);
        teamServing = swapServingTeam(teamServingOrder);
      }
      else {
        isReturning = swapReturner(returningOrder);
        console.log(team1.name + " " + team1.score + " " + team2.name + " " + team2.score);
        console.log("Serving: " + isServing.name + " Returning:" + isReturning.name);
        teamServing = swapServingTeam(teamServingOrder);
      }
    }
    else if (teamServing == team2){
      team1.score += 1;
      isServing = swapServer(servingOrder);
      if (isServing === isReturning) {
        isReturning = swapReturner(returningOrder);
        console.log(team1.name + " " + team1.score + " " + team2.name + " " + team2.score);
        console.log("Serving: " + isServing.name + " Returning:" + isReturning.name);
        teamServing = swapServingTeam(teamServingOrder);
      } else {
        isReturning = swapReturner(returningOrder);
        console.log(team1.name + " " + team1.score + " " + team2.name + " " + team2.score);
        console.log("Serving: " + isServing.name + " Returning:" + isReturning.name);
        teamServing = swapServingTeam(teamServingOrder);
      }
    }
    document.getElementById("genServe1").style.display = "block";
    document.getElementById("genContinue").style.display = "none";
    serve = 1;
    isServing.firstServeTotal += 1;
  }
  /*tempPlayer1 = createPlayerCopy(player1);
  tempPlayer2 = createPlayerCopy(player2);
  tempPlayer3 = createPlayerCopy(player3);
  tempPlayer4 = createPlayerCopy(player4);
  console.log("created temp save");*/

  if (numberOfShotsIP > 2) {
      numberOfRallies += 1;
  }
  if((team1.score >= gameTo || team2.score >= gameTo) && Math.abs(team1.score - team2.score) >= 2){
    isServing.firstServeTotal -= 1;
    document.getElementById("genServe1").style.display = "none";
    document.getElementById("gameOver").style.display = "block";

    statsTable.push(["Player Name", "First Serve Percentage", "Second Serve Percentage", "Kill Percentage", "Defensive Touches", "Breaks Given Up"]);
    for (let i = 0; i < 4; i++) {
        let currPlayer = servingOrder[i];
        currPlayer.calc();
        statsTable.push([currPlayer.name, currPlayer.firstServePercentage.toString(), currPlayer.secondServePercentage.toString(), currPlayer.killPercentage.toString(), currPlayer.numberOfDefensiveTouches.toString(), currPlayer.numberOfBreaksWhenReturning.toString()]);
    }
    console.log("Number of Rallies " + numberOfRallies);
    console.log("Number of Aces " + getNumberOfAces(servingOrder));
  }
  updatedPlayer1 = copyPlayer(player1);
  updatedPlayer2 = copyPlayer(player2);
  updatedPlayer3 = copyPlayer(player3);
  updatedPlayer4 = copyPlayer(player4);
}

export let secondServeSet = (player: string): void =>{
  if (player == player4.name) {
      establishServingOrder(servingOrder);
      establishReturningOrder(returningOrder);
  }
  else if (player == player2.name){
      establishServingOrder(servingOrder);
      establishReturningOrder(returningOrder);
  }
  isServing = swapServer(servingOrder);
  isReturning = swapReturner(returningOrder);
  teamServing = swapServingTeam(teamServingOrder);
  console.log("Serving: " + isServing.name + "Returning: " + isReturning.name);
  /*tempPlayer1 = createPlayerCopy(player1);
  tempPlayer2 = createPlayerCopy(player2);
  tempPlayer3 = createPlayerCopy(player3);
  tempPlayer4 = createPlayerCopy(player4);
  console.log("created temp save");*/
  serve = 1;
  isServing.firstServeTotal += 1;
  document.getElementById("genServe1").style.display = "block";
  document.getElementById("secondServer").style.display = "none";
}

export let genServeResult = (serveNum: number, input: string): void =>{
  /*tempPlayer1 = player1;
  tempPlayer2 = player2;
  tempPlayer3 = player3;
  tempPlayer4 = player4;
  serve = 1;
  numberOfShotsIP = 0;
  isServing.firstServeTotal += 1;*/
  if(serveNum == 1){
    if(input == "fault"){
      document.getElementById("genServe2").style.display = "block";
      fault();
    }
    else if(input == "ace"){
      document.getElementById("genContinue").style.display = "block";
      ace();
    }
    else if(input == "inPlay"){
      document.getElementById("genInPlay").style.display = "block";
      inPlay();
    }
    document.getElementById("genServe1").style.display = "none";
  }
  else{
    if(input == "fault"){
      document.getElementById("genContinue").style.display = "block";
      fault();
    }
    else if(input == "ace"){
      document.getElementById("genContinue").style.display = "block";
      ace();
    }
    else if(input == "inPlay"){
      document.getElementById("genInPlay").style.display = "block";
      inPlay();
    }
    document.getElementById("genServe2").style.display = "none";
  }
}

export let genInPlayResult = (input: string):void => {
  if (input == "onOne"){
    downOn1();
    document.getElementById("genHitResult").style.display = "block";
  }
  else if(input == "onTwo"){
    downOn2();
    document.getElementById("genHitResult").style.display = "block";
  }
  else if(input == "onThree"){
    downOn3();
    document.getElementById("genHitResult").style.display = "block";
  }
  else if(input == "noHit"){
    notReturned();
    document.getElementById("genContinue").style.display = "block";
  }
  document.getElementById("dt1button").innerHTML = "Defensive touch by " + teamDefending.player1.name;
  document.getElementById("dt2button").innerHTML = "Defensive touch by " + teamDefending.player2.name;
  document.getElementById("genInPlay").style.display = "none";
}

export let genHitResult = (input: string): void =>{
  if(input == "kill"){
    kill();
    document.getElementById("genContinue").style.display = "block";
  }
  else if(input == "miss"){
    missedHit();
    document.getElementById("genContinue").style.display = "block";
  }
  else if(input == "dTouch1"){
    player1DT();
    document.getElementById("genInPlay").style.display = "block";
  }
  else if(input == "dTouch2"){
    player2DT();
    document.getElementById("genInPlay").style.display = "block";
  }
  document.getElementById("genHitResult").style.display = "none";
}

export let showStats = (): void =>{
  if(statsView == true){
    return;
  }
  else{
    statsView = true;
    table = <HTMLTableElement>document.createElement("TABLE");
    table.border = "1";

    let numColumns = statsTable[0].length;

    let currRow = table.insertRow(-1);
    for(let i = 0; i<numColumns; i++){
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = statsTable[0][i];
      currRow.appendChild(headerCell);
    }

    for(let i = 1; i< statsTable.length; i++){
      let row = table.insertRow(-1);
      for(let j = 0; j<numColumns; j++){
        let cell = row.insertCell(-1);
        cell.innerHTML = statsTable[i][j];
      }
    }
  }

  var statsDiv = document.getElementById("statsDiv");
  statsDiv.appendChild(table);
  statsDiv.style.display = "block";
}

export let resetCurrentPoint = (pointOne: boolean): void =>{


    player1 = null;
    player2 = null;
    player3 = null;
    player4 = null;

    player1 = copyPlayer(updatedPlayer1);
    player2 = copyPlayer(updatedPlayer2);
    player3 = copyPlayer(updatedPlayer3);
    player4 = copyPlayer(updatedPlayer4);



    console.log("reverted to Temp");
  if(pointOne){
    document.getElementById("point1continue").style.display = "none";
    document.getElementById("point1serve1").style.display = "block";
    serve = 1;
  }
  else{
    document.getElementById("genContinue").style.display = "none";
    document.getElementById("genServe1").style.display = "block";
    serve = 1;
  }
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
    console.log("aced");
};

// Start ball in play
export let inPlay = (): void => {
    if (serve === 1) {
        isServing.firstServesOn += 1;
    } else {
        isServing.secondServeMade += 1;
    }
    teamAttacking = teamServingOrder[1];
    teamDefending = teamServing;
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
    if (teamDefending === teamServing) {
        isServing.numberOfBreaksOnServe += 1;
        isReturning.numberOfBreaksWhenReturning += 1;
    }
    pointWinner = teamDefending;
    ballInPlay = false;
};
export let player1DT = ():void => {
    attackingPlayer.hitsOn += 1;
    numberOfShotsIP += 1;
    let temp: Team;
    temp = teamAttacking;
    teamAttacking = teamDefending;
    teamDefending = temp;
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
    teamAttacking = teamDefending;
    teamDefending = temp;
    defendingPlayer = teamAttacking.player2;
    defendingPlayer.numberOfDefensiveTouches += 1;
    if (serve === 1 && teamAttacking === teamServing && numberOfShotsIP === 1) {
        isServing.dTOn1stServe += 1;
    } else  if (serve === 2 && teamAttacking === teamServing && numberOfShotsIP === 1) {
        isServing.dTon2ndServe += 1;
    }
};

export let swapAttacker = (rp: Player): Player => {
    if (rp === teamAttacking.player1) {
        return teamAttacking.player2;
    } else if (rp === teamAttacking.player2) {
        return teamAttacking.player1;
    } else {
        return teamAttacking.player1;
    }
};

export let notReturned = ():void => {
    if (teamAttacking !== teamServing) {
        isServing.numberOfBreaksOnServe += 1;
        isReturning.numberOfBreaksWhenReturning += 1;
    }
    pointWinner = teamDefending;
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

/*export let resetPoint = ():void => {
    player1 = tempPlayer1;
    player2 = tempPlayer2;
    player3 = tempPlayer3;
    player4 = tempPlayer4;
}*/

export let copyPlayer = (player: Player): Player => {
  let updatedPlayer = new Player();
  //let updatedPlayer = Object.assign({},player);
  updatedPlayer.name = player.name;
  updatedPlayer.team= player.team;
  updatedPlayer.firstServesOn = player.firstServesOn;
  updatedPlayer.firstServeTotal = player.firstServeTotal;
  updatedPlayer.firstServePercentage = player.firstServePercentage;
  updatedPlayer.numberofAces = player.numberofAces;
  updatedPlayer.numberOfFaults = player.numberOfFaults;
  updatedPlayer.secondServeTotal = player.secondServeTotal;
  updatedPlayer.secondServeMade = player.secondServeMade;
  updatedPlayer.secondServeAces = player.secondServeAces;
  updatedPlayer.secondServePercentage = player.secondServePercentage;
  updatedPlayer.numberOfBreaksOnServe = player.numberOfBreaksOnServe;
  updatedPlayer.numberOfTimesAced = player.numberOfTimesAced;
  updatedPlayer.numberOfBreaksWhenReturning = player.numberOfBreaksWhenReturning;
  updatedPlayer.dTOn1stServe = player.dTOn1stServe;
  updatedPlayer.dTon2ndServe = player.dTon2ndServe;
  updatedPlayer.numberOfDefensiveTouches = player.numberOfDefensiveTouches;
  updatedPlayer.numberOfDefensiveTouchesNotReturned = player.numberOfDefensiveTouchesNotReturned;
  updatedPlayer.downOn1 = player.downOn1;
  updatedPlayer.downOn2 = player.downOn2;
  updatedPlayer.hitsOn = player.hitsOn;
  updatedPlayer.kills = player.kills;
  updatedPlayer.totalHits = player.totalHits;
  updatedPlayer.hittingPercentage = player.hittingPercentage;
  updatedPlayer.killPercentage = player.killPercentage;

  return updatedPlayer;
}
