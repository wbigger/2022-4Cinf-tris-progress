console.log('Gioco del tris');

let board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
];

let play = function (r, c) {
    console.log(`Hai premuto sulla casella: ${r} ${c}`);
    if (board[r][c] === '-') {
        board[r][c] = 'X';
    }
}

