import Ship from "./ship.js";

/*Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.*/

export default class GameBoard {
	constructor() {
		this.ships = [];
		this.missedAttacks = [];
		this.grid = []; // Create an empty array that will represent the playing field

		// loop for row
		for (let row = 0; row < 9; row++) {
			this.grid[row] = []; //new empty row (array) for each field row

			//loop for columns
			for (let col = 0; col < 9; col++) {
				this.grid[row][col] = null; // Each cell at position [row][col] is initialized with the value null
			}
		}

	}

	/* Two-Dimensional Arrays - https://www.cs.cmu.edu/~mrmiller/15-110/Handouts/arrays2D.pdf*/

	placeShip(coords, ship) {
		for (let i = 0; i < coords.length; i++) {
			const [x, y] = coords[i]; //coords of every cell
			this.grid[x][y] = ship;   //place ship on this coords
		}
		this.ships.push(ship);
	}

	receiveAttack([x, y]) {
		const target = this.grid[x][y];
		if (target) {
			target.hit();
		} else {
			this.missedAttacks.push([x, y]);
		}
	}

	/*https://thelinuxcode.com/mastering-javascript-2d-arrays-a-comprehensive-guide/*/

	allShipsSunk() {
		return this.ships.every((ship) => ship.isSunk());
	}
} /*) {

/*receiveAttack(/*takes a pair of coordinates*/
/* determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
} */

/*missingAttachs(){} */
/*Gameboards should keep track of missed attacks so they can display them properly.*/

/*allShipsSunk(){}*/
/*Gameboards should be able to report whether or not all of their ships have been sunk.*/