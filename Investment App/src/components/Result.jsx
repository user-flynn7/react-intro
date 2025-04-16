import { calculateInvestmentResults, formatter } from "../util/investment";
function Result({ userInput }) {
	const results = calculateInvestmentResults(
		userInput.initial,
		userInput.annual,
		userInput.expected,
		userInput.duration
	);

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest(Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{results.map((result, index) => (
					<tr key={index}>
						<td>{result.year}</td>
						<td>{formatter.format(result.investmentValue)}</td>
						<td>{formatter.format(result.interest)}</td>
						<td>{formatter.format(result.totalInterest)}</td>
						<td>{formatter.format(result.investedCapital)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Result;
