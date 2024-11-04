/* eslint-disable react/prop-types */
import styles from "./TransactionCard.module.css";

export default function TransactionCard({ data }) {
	function updateAmount(num) {
		return new Intl.NumberFormat("en-US", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(num);
	}

	return (
		<div className={styles.card}>
			{data.map((item, i) => (
				<div className={styles.card__container} key={i}>
					<img
						src={item.url}
						alt="Avatar Icon"
						className={styles.card__image}
					/>
					<div className={styles["card__stack--1"]}>
						<p className={styles.card__name}>{item.name}</p>
						<p className={styles.card__category}>{item.category}</p>
					</div>
					<div className={styles["card__stack--2"]}>
						<p className={styles.card__amount}>${updateAmount(item.amount)}</p>
						<p className={styles.card__date}>{item.date}</p>
					</div>
				</div>
			))}
		</div>
	);
}
