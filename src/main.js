import Player from "./player";
import GameBoard from "./gameboard.js";
import Ship from "./ship.js";

const player = new Player();
const computer = new Player(true);

const playerBoardElement = document.getElementById("player-board");
const computerBoardElement = document.getElementById("computer-board");


/* https://www.w3docs.com/tools/editor/73166*/