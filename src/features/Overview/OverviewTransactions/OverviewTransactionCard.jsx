/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./OverviewTransactionCard.module.css";

export default function OverviewTransactionCard({
	name,
	url,
	date,
	amount,
	type,
}) {
	let transactionColor = "--green";
	const displayAmount = updateAmount(amount, type);

	function updateAmount(num, type) {
		let val = new Intl.NumberFormat("en-US", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(num);

		// Add appropriate '+' or '-' symbol and update color of output
		if (type === "add") {
			val = "+" + val;
		} else {
			val = "-" + val;
			transactionColor = "--grey-900";
		}

		return val;
	}

	return (
		<div className={styles.transaction}>
			<div className={styles.name__container}>
				<img
					src={url}
					alt="Avatar Image"
					className={styles.transaction__image}
				/>
				<p className={styles.transaction__name}>{name}</p>
			</div>
			<div className={styles.info__container}>
				<p
					className={styles.info__amount}
					style={{ color: `var(${transactionColor})` }}
				>
					{displayAmount}
				</p>
				<p className={styles.info__date}>{date}</p>
			</div>
		</div>
	);
}
