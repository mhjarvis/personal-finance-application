/* eslint-disable react/prop-types */
import styles from "./TransactionCard.module.css";

export default function TransactionCard({ data }) {
	return (
		<div className={styles.card}>
			{data.map((item, i) => (
				<div className={styles.card__container} key={i}>
					<img
						src={item.url}
						alt="Avatar Icon"
						className={styles.card__image}
					/>
					<p className={styles.card__name}>{item.name}</p>
					<p className={styles.card__category}>{item.category}</p>
					<p className={styles.card__date}>{item.date}</p>
					<p className={styles.card__amount}>{item.amount}</p>
				</div>
			))}
		</div>
	);
}
