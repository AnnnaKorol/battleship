import GameBoard from "./gameboard";

export default class Player {
	constructor(isComputer = false) {
		this.isComputer = isComputer;
		this.gameboard = new GameBoard();
	}

	makeMove(coords, enemyGameBoard) {
		enemyGameBoard.receiveAttack(coords);
	}

	makeRandomMove(enemyGameboard) {
		let x, y;
		do {
			x = Math.floor(Math.random() * 10);
			y = Math.floor(Math.random() * 10);
		} while (
			enemyGameboard.grid[x][y] === "hit" ||
			enemyGameboard.missedAttacks.some(([mx, my]) => mx === x && my === y)
			);
		this.makeMove([x, y], enemyGameboard);
	}
}

/*https://thelinuxcode.com/mastering-javascript-2d-arrays-a-comprehensive-guide/*/
/*https://www.cs.cmu.edu/~mrmiller/15-110/Handouts/arrays2D.pdf*/
/*https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript*/
/*https://codesandbox.io/p/sandbox/learnteachcode-battleship-javascript-gd03h0?file=%2Fbattleship.js%3A23%2C3*/
/*https://www.w3docs.com/tools/editor/73166*/