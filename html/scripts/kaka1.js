const score = {
    wins: 0,
    losses: 0,
    ties: 0
};
function jojo() {
    document.querySelector('.js-score').innerHTML = `Score - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function play(playerMove) {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    console.log(computerMove);

    let result = '';
    if (playerMove === computerMove) {
        result = 'Tie';
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win';
    } else {
        result = 'You lose';
    }

    updateScore(result, playerMove, computerMove);
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Score - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}
function updateScore(result, playerMove, computerMove) {
    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }
    jojo();
    document.querySelector('.js-clas').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You picked <img src="images/${playerMove}-emoji.png" class="roc">
   Computer picked <img src="images/${computerMove}-emoji.png" class="roc">  `;
}


function resetScore() {
    score.wins = 0;
    score.losses = 0;  
    score.ties = 0;
    jojo();
}