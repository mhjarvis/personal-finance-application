/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./OverviewTransactionCard.module.css";

export default function OverviewTransactionCard({ name, url, date, amount }) {
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
				<p className={styles.info__amount}>{amount}</p>
				<p className={styles.info__date}>{date}</p>
			</div>
		</div>
	);
}
