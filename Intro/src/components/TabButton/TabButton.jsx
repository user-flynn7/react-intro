import PropTypes from "prop-types";

export default function TabButton({ children, isSelected, ...props }) {
	return (
		<li>
			<button className={isSelected ? "active" : ""} {...props}>
				{children}
			</button>
		</li>
	);
}

// Prop type validation
TabButton.propTypes = {
	children: PropTypes.node.isRequired,
	isSelected: PropTypes.bool.isRequired
};
