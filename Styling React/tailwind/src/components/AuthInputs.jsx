import { useState } from "react";

import styles from "./AuthInputs.module.scss";

import CusotomInput from "./Input";

export default function AuthInputs() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function handleInputChange(identifier, value) {
		if (identifier === "email") {
			setEnteredEmail(value);
		} else {
			setEnteredPassword(value);
		}
	}

	function handleLogin() {
		setSubmitted(true);
	}

	const emailNotValid = submitted && !enteredEmail.includes("@");
	const passwordNotValid = submitted && enteredPassword.trim().length < 6;

	return (
		<div id="auth-inputs" className={styles.authInputs}>
			<div className={styles.inputs}>
				<CusotomInput
					label="Email"
					invalid={emailNotValid}
					type="email"
					onChange={(event) =>
						handleInputChange("email", event.target.value)
					}
				/>
				<CusotomInput
					label="Password"
					invalid={passwordNotValid}
					type="password"
					onChange={(event) =>
						handleInputChange("password", event.target.value)
					}
				/>
			</div>
			<div className={styles.submit}>
				<button type="button" className={styles.accountButton}>
					Create a new account
				</button>
				<button className={styles.submitButton} onClick={handleLogin}>
					Sign In
				</button>
			</div>
		</div>
	);
}
