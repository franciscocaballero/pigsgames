var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

// roll button selceted and event listenr 'click' is added
document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying){

    // 1. Generates Random number and also cahnges decimal to whole number
  var dice = Math.floor(Math.random() * 6) + 1;

  //2. Display result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'images/dice-' + dice + '.png';

   //3. update roundScore IF number was Not a 1
   if (dice === 6 && lastDice === 6) {
     // player loses score\
     scores[activePlayer] = 0;
     document.querySelector('#score-' + activePlayer).textContent = '0';
     nextPlayer();
   } else if (dice !== 1) {
  //add score
  roundScore += dice;
 document.querySelector('#current-' + activePlayer).textContent = roundScore;
} else {
  // next player
  nextPlayer();
  //document.querySelector('.player-0-panel').classList.remove('active')
  //document.querySelector('.player-1-panel').classList.add('active')
}
lastDice = dice;
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if(gamePlaying){

  // add current score to global score
scores[activePlayer] += roundScore;

  // update the UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

var input = documnet.querySelector('.final-score').value;
var winningScore;

if (input) {
   winningScore = input;
} else {
  winningScore = 100;
}
  //check if player has won game
if (scores[activePlayer] >= winningScore) {
  document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
 document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
gamePlaying = false;
} else {
//next Player
  nextPlayer();
}
 }
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  gamePlaying = true;
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  /// lets you a access the DOM and select a css element / gives you access to css text element
  //document.querySelector('#current-' + activePlayer).textContent = dice;
  // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

  //var x = document.querySelector('#score-0').textContent;
  /// DOM acess/css acess
  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}
