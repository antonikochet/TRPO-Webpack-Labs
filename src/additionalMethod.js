
function stopGame(cells, funcOnClick)
{
    for(var i=0; i < cells.length; i++)
    {
        deactivationCell(cells[i], funcOnClick);
    }
} 

function deactivationCell(cell, funcOnClick)
{
    //console.log(typeof(cell))
    cell.removeEventListener('click', funcOnClick);
} 
function activationCell(cell,funcOnClick)
{
    cell.addEventListener('click', funcOnClick);
}

function checkWin(cells)
{
    var winneringCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (var i=0; i < winneringCombination.length; i++)
    {
        var wc = winneringCombination[i];
        if (
            cells[wc[0]].innerHTML == cells[wc[1]].innerHTML &&
            cells[wc[1]].innerHTML == cells[wc[2]].innerHTML &&
            cells[wc[0]].innerHTML != '')
        {
            return cells[wc[0]].innerHTML;
        }    
    }
    return false;
}

function getNextGamer(content) {
    if (content == 'X') {
        return 'O';
    }
    else {
        return 'X';
    }
}

function showMessege(name)
{
    if (name != false)
    {
        alert('Winner:' + name);
    }
    else
    {
        alert('Draw game');
    }
}

function showCurrentGamer(elem, name)
{
    elem.innerHTML = name;
}
function checkFieldFilled(cells)
{
    for (let i = 0; i < cells.length; i++)
    {
        if (cells[i].innerHTML == '')
        {
            return false;
        }
    }
    return true;
}
module.exports = {
    checkWin, stopGame, deactivationCell,
    activationCell, getNextGamer, showMessege,
    showCurrentGamer, checkFieldFilled
}