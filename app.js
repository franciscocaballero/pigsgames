

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// gives random Whole number for 'dice'
dice = Math.floor(Math.random()* 6) + 1;

/// lets you a access the DOM and select a css element / gives you access to css text element
document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

var x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none';
