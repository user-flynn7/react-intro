function UserInput({ userInput, handleValueChange }) {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input
						type="number"
						name="initial-investment"
						value={userInput.initial}
						onChange={(event) =>
							handleValueChange("initial", event.target.value)
						}
						required
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type="number"
						name="annual-investment"
						value={userInput.annual}
						onChange={(event) =>
							handleValueChange("annual", event.target.value)
						}
						required
					/>
				</p>
				<p>
					<label>Expected Return</label>
					<input
						type="number"
						name="expected-return"
						value={userInput.expected}
						onChange={(event) =>
							handleValueChange("expected", event.target.value)
						}
						required
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type="number"
						name="duration"
						value={userInput.duration}
						onChange={(event) =>
							handleValueChange("duration", event.target.value)
						}
						required
					/>
				</p>
			</div>
		</section>
	);
}

export default UserInput;
