/* eslint-disable react/prop-types */
import "./BalanceCard.css";

export default function BalanceCard({
	title,
	amount,
	background = "white",
	text = "black",
}) {
	const displayAmount = updateAmount(amount);

	function updateAmount(num) {
		return new Intl.NumberFormat("en-US", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(num);
	}

	return (
		<div
			className="balance-card"
			style={{ backgroundColor: background, color: text }}
		>
			<p className="balance-card__title">{title}</p>
			<p className="balance-card__amount">${displayAmount}</p>
		</div>
	);
}
