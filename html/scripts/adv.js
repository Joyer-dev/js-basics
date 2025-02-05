const score = {
    wins: 0,
    losses: 0,
    ties: 0
};
let isAutoPlaying=false;
let intervalId;

function startAutoplay() {
    if (isAutoPlaying) {
        clearInterval(intervalId);
        isAutoPlaying = false;
        document.querySelector('.auto-play').textContent = 'Autoplay';
    } else {
        intervalId = setInterval(() => {
            const playerMove = getRandomMove();
            play(playerMove);
        }, 1000);
        isAutoPlaying = true;
        document.querySelector('.auto-play').textContent = 'Stop Autoplay';
    }
}

    

function getRandomMove() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}

function jojo() {
    document.querySelector('.js-score').innerHTML = `Score - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

document.querySelector('.pop').addEventListener('click',()=>{
    play('rock');
});
document.querySelector('.pap').addEventListener('click',()=>{
    play('paper'); 
});

document.querySelector('.pup').addEventListener('click',()=>{
    play('scissors');
});
document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
        play('rock');
    }else if(event.key==='p'){
        play('paper');
    }else if(event.key==='s'){
        play('scissors');
    }
});

function play(playerMove) {
    const moves = ['rock', 'paper', 'scissors'];
    const computerMove = moves[Math.floor(Math.random() * moves.length)];
    
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
    console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
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
    Computer picked <img src="images/${computerMove}-emoji.png" class="roc">`;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    jojo();
}