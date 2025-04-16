import { useState } from "react";

import Header from "@components/Header";
import Result from "@components/Result";
import UserInput from "@components/UserInput";

function App() {
	const [userInput, setUserInput] = useState({
		initial: 10000,
		annual: 1200,
		expected: 6,
		duration: 10
	});

	const isInputValid = userInput.duration >= 1;

	const handleInputChange = (input, newValue) => {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[input]: newValue
			};
		});
	};
	return (
		<>
			<Header />
			<main>
				<UserInput
					userInput={userInput}
					handleValueChange={(input, value) =>
						handleInputChange(input, +value)
					}
				/>
				{!isInputValid && <p className="center">Invalid Input</p>}
				{isInputValid && <Result userInput={userInput} />}
			</main>
		</>
	);
}

export default App;
