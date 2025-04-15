import PropTypes from "prop-types";

function Tabs({ children, buttons, ButtonsContainer = "div" }) {
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}

Tabs.propTypes = {
	buttons: PropTypes.node,
	ButtonsContainer: PropTypes.string,
	children: PropTypes.node
};

export default Tabs;
