import './style.css';
const methods = require('./additionalMethod.js');

var cells = Array.from(document.getElementsByTagName('td'));
var buttonRestart = document.getElementById('restart');
var currentGamerView = document.querySelector('#current-gamer');

methods.activationCell(buttonRestart, restartGame);
var currentGamer = 'X';
prepareield(cells);



//основные функции
//подгтовка игры
function prepareield(cells)
{
    for (let i = 0; i < cells.length; i++)
    {
        cells[i].innerHTML = '';
        methods.activationCell(cells[i],nextStep); 
    }
    methods.showCurrentGamer(currentGamerView, currentGamer);
}
//последующий ход
function nextStep()
{
    var cell = this;
    cell.innerHTML = currentGamer;
    currentGamer = methods.getNextGamer(currentGamer);
    methods.showCurrentGamer(currentGamerView, currentGamer);

    methods.deactivationCell(cell, nextStep);
    var winner = methods.checkWin(cells);
    if (winner !== false)
    {
        endGame(cells, winner);
    }
    else
    {
        if (methods.checkFieldFilled(cells))
        {
            endGame(cells, false);
        }
    }
}

function endGame(cells, evens)
{
    methods.stopGame(cells, nextStep);
    methods.showMessege(evens);
    methods.showCurrentGamer(currentGamerView, '-');
}

function restartGame()
{
    currentGamer = 'X';
    prepareield(cells);
}





