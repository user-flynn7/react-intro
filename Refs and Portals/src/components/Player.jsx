import { useState, useRef } from "react";

export default function Player() {
	const playerName = useRef();
	const [enteredPlayerName, setEnteredPlayerName] = useState(null);

	function hancleClick() {
		setEnteredPlayerName(playerName.current.value);
		playerName.current.value = "";
	}

	return (
		<section id="player">
			<h2>Welcome {enteredPlayerName ?? "Unknown User"}</h2>
			<p>
				<input ref={playerName} type="text" />
				<button onClick={hancleClick}>Set Name</button>
			</p>
		</section>
	);
}
