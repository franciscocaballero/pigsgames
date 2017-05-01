

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

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

// roll button selceted and event listenr 'click' is added
document.querySelector('.btn-roll').addEventListener('click', function() {

  // 1. Generates Random number and also cahnges decimal to whole number
var dice = Math.floor(Math.random()* 6) + 1;

//2. Display result
var diceDOM = document.querySelector('.dice')
diceDOM.style.display = 'block';
diceDOM.src = 'images/dice-' + dice + '.png';

//3. update roundScore IF number was Not a 1
if (dice !== 1) {
  //add score
  roundScore += dice;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
} else {
  // next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.dice').style.display = 'none';

  //document.querySelector('.player-0-panel').classList.remove('active')
  //document.querySelector('.player-1-panel').classList.add('active')
}

});
