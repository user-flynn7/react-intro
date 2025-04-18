import { clsx } from "clsx";

import styles from "./Input.module.css";

function CustomInput({ label, invalid, ...props }) {
	return (
		<p>
			<label
				className={clsx(
					styles.labelBase,
					invalid ? styles.labelInvalid : styles.labelValid
				)}
			>
				{label}
			</label>
			<input
				className={clsx(
					styles.inputBase,
					invalid ? styles.inputInvalid : styles.inputValid
				)}
				{...props}
			/>
		</p>
	);
}

export default CustomInput;
