import { useState } from "react";

function Player({ initialName, symbol, isActive, onNameChange }) {
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(initialName);

	const handleEditClick = () => {
		isEditing && onNameChange(symbol, name);
		setIsEditing((editing) => !editing);
	};
	return (
		<li className={isActive ? "active" : ""}>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						value={name}
						onChange={(event) => setName(event.target.value)}
						required
					/>
				) : (
					<span className="player-name">{name}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>
				{isEditing ? "Save" : "Edit"}
			</button>
		</li>
	);
}

export default Player;
