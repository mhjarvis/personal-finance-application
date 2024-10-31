/* eslint-disable react/prop-types */
import "./SmallPot.css";

export default function SmallPot({ title, amount, borderColor }) {
	const displayAmount = updateAmount(amount);

	function updateAmount(num) {
		return new Intl.NumberFormat("en-US", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(num);
	}

	return (
		<div className="small-pot">
			<div
				className="vertical-line"
				style={{ backgroundColor: `var(${borderColor})` }}
			></div>
			<div className="info-container">
				<p className="title">{title}</p>
				<p className="amount">${displayAmount}</p>
			</div>
		</div>
	);
}
