import PropTypes from "prop-types";

export default function Section({ title, children, ...sectionProps }) {
	return (
		<section {...sectionProps}>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

// Prop type validation
Section.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired
};
