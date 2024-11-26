const players = [
    { name: 'Lionel Messi', stat: 700, image: 'img/lionelmessi.jpg' },
    { name: 'Cristiano Ronaldo', stat: 800, image: 'img/cristianoronaldo.jpg' },
    { name: 'Neymar Jr.', stat: 400, image: 'img/neymarjr.jpg' },
    { name: 'Kylian Mbappé', stat: 300, image: 'img/kylianmbappe.jpg' },
    { name: 'Robert Lewandowski', stat: 500, image: 'img/lewandoski.jpg' },
    { name: 'Kevin De Bruyne', stat: 150, image: 'img/kevindebruyne.jpg' },
    { name: 'Erling Haaland', stat: 120, image: 'img/erlinghaaland.jpg' },
    { name: 'Sergio Ramos', stat: 400, image: 'img/sergioramos.jpg' },
];

let currentPlayerIndex = Math.floor(Math.random() * players.length);
let nextPlayerIndex;
let score = 0;
let gameOver = false;

function updatePlayer() {
    const player = players[currentPlayerIndex];
    document.getElementById('player-name').textContent = player.name;
    document.getElementById('player-stat').textContent = 'Doelpunten: ' + player.stat;
    document.getElementById('player-image').src = player.image;  // De afbeelding bijwerken
    document.getElementById('player-image').alt = player.name;  // Alt-tekst voor de afbeelding
}

function getNextPlayer() {
    do {
        nextPlayerIndex = Math.floor(Math.random() * players.length);
    } while (nextPlayerIndex === currentPlayerIndex);
}

function guess(userGuess) {
    if (gameOver) {
        return;
    }

    const currentPlayer = players[currentPlayerIndex];
    getNextPlayer();
    const nextPlayer = players[nextPlayerIndex];

    let resultMessage = '';
    if (
        (userGuess === 'higher' && nextPlayer.stat > currentPlayer.stat) ||
        (userGuess === 'lower' && nextPlayer.stat < currentPlayer.stat)
    ) {
        score++;
        resultMessage = 'Goed zo! Je hebt gelijk!';
    } else {
        resultMessage = 'Helaas, je hebt het fout! Het spel is afgelopen.';
        gameOver = true;
        resultMessage += ` Je eindscore is: ${score}`;
    }

    document.getElementById('result').textContent = resultMessage;
    currentPlayerIndex = nextPlayerIndex;

    updatePlayer();

    // Bij game over: blokkeer de knoppen
    if (gameOver) {
        document.getElementById('higher').disabled = true;
        document.getElementById('lower').disabled = true;
    }
}

// Initial player update
updatePlayer();