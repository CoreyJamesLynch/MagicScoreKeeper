const player1AddLife = document.querySelector('#add1Player1');
const player1MinusLife = document.querySelector('#minus1Player1');
const player2AddLife = document.querySelector('#add1Player2');
const player2MinusLife = document.querySelector('#minus1Player2');
const player1Life = document.querySelector('#player1Score');
const player2Life = document.querySelector('#player2Score');
const resetButton = document.querySelector('#gameReset');

let player1LifeTotal = 20;
let player2LifeTotal = 20;

player1AddLife.addEventListener('click', function (event) {
  event.preventDefault();
  player1LifeTotal += 1;
  player1Life.innerText = parseInt(player1LifeTotal);
});

player1MinusLife.addEventListener('click', function (event) {
  event.preventDefault();
  player1LifeTotal -= 1;
  player1Life.innerText = parseInt(player1LifeTotal);
});

player2AddLife.addEventListener('click', function (event) {
  event.preventDefault();
  player2LifeTotal += 1;
  player2Life.innerText = parseInt(player2LifeTotal);
});

player2MinusLife.addEventListener('click', function (event) {
  event.preventDefault();
  player2LifeTotal -= 1;
  player2Life.innerText = parseInt(player2LifeTotal);
});

resetButton.addEventListener( 'click' ,function (event){
  event.preventDefault();
  player1LifeTotal = 20;
  player2LifeTotal = 20;
  player1Life.innerText = parseInt(player1LifeTotal);
  player2Life.innerText = parseInt(player2LifeTotal);
})
