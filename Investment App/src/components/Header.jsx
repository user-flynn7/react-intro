import img from "../assets/investment-calculator-logo.png";
function Header() {
	return (
		<header id="header">
			<img src={img} alt="Investment Calculator App" />
			<h1>Investment Calculator</h1>
		</header>
	);
}

export default Header;
