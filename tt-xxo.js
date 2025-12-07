class tabletop_xxo extends ttGame {
    constructor() {
        super();
        this.name = "tt-xxo";
        this.label = "Tic Tac Oh!";
        this.wuerfel = new TableTop_Die(2)
    }
    initialize() {
        console.log("Tic Tac Oh! module initialized.");
        // Additional initialization code here
        this.name = "Tic Tac Oh!";
        this.maxPlayers = 2;
        this.board = {
            width: 3,
            height: 3,
            layers: 1,
            grid: []
        };
        
    }

    prepare() {
        console.log("Preparing Tic Tac Oh! game.");
        console.log(`Current players: ${this.maxPlayers}`);

        // Preapare the game: create players and reset board
        if (Object.keys(this.players).length === 0) {
            for (let i = 0; i < this.maxPlayers; i++) {
                console.log(`Current players: ${i+1} of ${this.maxPlayers} ${this.players}`);
                this.addPlayer(`Player ${i + 1}`);
            } 

        }
        this.prepareBoard();
        console.log(this);
    }
    
    checkWinCondition() {
        const grid = this.board.grid; // 3x3 array
        // Check rows and columns
        for (let i = 0; i < 3; i++) {
            if (grid[i][0] && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
                return grid[i][0]; // Row win
            }   
            if (grid[0][i] && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
                return grid[0][i]; // Column win
            }   
        }
        // Check diagonals
        if (grid[0][0] && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
            return grid[0][0]; // Diagonal win
        }   
        if (grid[0][2] && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
            return grid[0][2]; // Diagonal win
        }   
        // No win
        return null;
    }
}

var tt_xxo_module = new tabletop_xxo();
myTableTop.registerModule(tt_xxo_module);
