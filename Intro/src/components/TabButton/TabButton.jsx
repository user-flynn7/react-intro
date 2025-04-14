import PropTypes from "prop-types";

export default function TabButton({ children, onClick, isSelected }) {
	return (
		<li>
			<button className={isSelected ? "active" : ""} onClick={onClick}>
				{children}
			</button>
		</li>
	);
}

// Prop type validation
TabButton.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	isSelected: PropTypes.bool.isRequired
};
