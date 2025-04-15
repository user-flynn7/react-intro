import { useState } from "react";

import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import Player from "./components/Player";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const PLAYERS = {
	X: "P1",
	O: "P2"
};

const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

const deriveActivePlayer = (gameTurns) => {
	return gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
};

const deriveWinner = (gameBoard, players) => {
	let winner = null;
	for (const combination of WINNING_COMBINATIONS) {
		const firstSquare =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquare =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquare =
			gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquare &&
			firstSquare === secondSquare &&
			firstSquare === thirdSquare
		) {
			winner = players[firstSquare];
		}
	}
	return winner;
};

const deriveGameBoard = (gameTurns) => {
	const gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])];
	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}
	return gameBoard;
};

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [players, setPlayers] = useState({
		X: "Player 1",
		O: "Player 2"
	});

	const currentPlayer = deriveActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);
	const draw = gameTurns.length === 9 && !winner;

	const handleSquareSelect = (rowIndex, colIndex) => {
		setGameTurns((prevTurns) => {
			const lastPlayer = deriveActivePlayer(prevTurns);
			const updatedTurns = [
				{
					square: {
						row: rowIndex,
						col: colIndex
					},
					player: lastPlayer
				},
				...prevTurns
			];
			return updatedTurns;
		});
	};

	const handleRestart = () => {
		setGameTurns([]);
	};

	const handlePlayerChange = (symbol, newName) => {
		setPlayers((prevPlayers) => {
			return { ...prevPlayers, [symbol]: newName };
		});
	};

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName={PLAYERS.X}
						symbol="X"
						isActive={currentPlayer === "X"}
						onNameChange={(symbol, newName) =>
							handlePlayerChange(symbol, newName)
						}
					/>
					<Player
						initialName={PLAYERS.O}
						symbol="O"
						isActive={currentPlayer === "O"}
						onNameChange={(symbol, newName) =>
							handlePlayerChange(symbol, newName)
						}
					/>
				</ol>
				{(winner || draw) && (
					<GameOver winner={winner} onRestart={handleRestart} />
				)}
				<GameBoard
					onSquareSelect={handleSquareSelect}
					board={gameBoard}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
