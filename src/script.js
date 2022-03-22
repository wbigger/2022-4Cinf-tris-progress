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
        console.log("Prima di inviare al server...");
        console.log(board);
        // send the board to the server
        // update the web board on the client after receiving the response
        // ...
        console.log("Dopo la risposta del server...");
        console.log(board);

    }
}

// VEDI /Users/claudio/Documents/notes/prjs/scuola-classi/4Cinf/tris
