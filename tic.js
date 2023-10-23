let currentPlayer = 'X';
let gameOver = false;

function makeMove(cell) {
    if (!cell.textContent && !gameOver) {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            document.getElementById('result-message').textContent = currentPlayer === 'X' ? 'O wins!' : 'X wins!';
            gameOver = true;
            showResultScreen();
            return;
        }
    }

    if ([...cells].every(cell => cell.textContent !== '')) {
        document.getElementById('result-message').textContent = 'It\'s a draw!';
        showResultScreen();
    }
}

function showResultScreen() {
    document.getElementById('result-screen').style.display = 'block';
}

function resetBoard() {
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        cell.textContent = '';
    }
    document.getElementById('result-message').textContent = '';
    document.getElementById('result-screen').style.display = 'none';
    currentPlayer = 'X';
    gameOver = false;
}

resetBoard();
