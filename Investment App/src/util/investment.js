// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults(
	initial,
	annual,
	expected,
	duration
) {
	const annualData = [];
	let investmentValue = initial;
	let investedCapital = initial;
	let totalInterest = 0;
	for (let i = 0; i < duration; i++) {
		const interestEarnedInYear = investmentValue * (expected / 100);
		totalInterest += interestEarnedInYear;
		investedCapital += annual;
		investmentValue += interestEarnedInYear + annual;
		annualData.push({
			year: i + 1, // year identifier
			investmentValue: investmentValue, // investment value at end of year
			interest: interestEarnedInYear, // the amount of interest earned in this year
			totalInterest: totalInterest,
			investedCapital: investedCapital // investment added in this year
		});
	}
	return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 0,
	maximumFractionDigits: 0
});
