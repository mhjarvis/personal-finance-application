/* eslint-disable react/prop-types */
import "./BalanceCard.css";

export default function BalanceCard({
	title,
	amount,
	background = "white",
	text = "black",
}) {
	return (
		<div
			className="balance-card"
			style={{ backgroundColor: background, color: text }}
		>
			<p className="balance-card__title">{title}</p>
			<p className="balance-card__amount">${amount}</p>
		</div>
	);
}
