let scoreHome = document.getElementById("score-home");
let scoreAway = document.getElementById("score-away");

let homeSum = 0;
let awaySum = 0;

function addOneHome(){
    homeSum += 1
    scoreHome.textContent = homeSum
}

function addTwoHome(){
    homeSum += 2
    scoreHome.textContent = homeSum
}

function addThreeHome(){
    homeSum += 3
    scoreHome.textContent = homeSum
}

function addOneAway(){
    awaySum += 1
    scoreAway.textContent = awaySum
}

function addTwoAway(){
    awaySum += 2
    scoreAway.textContent = awaySum
}

function addThreeAway(){
    awaySum += 3
    scoreAway.textContent = awaySum
}