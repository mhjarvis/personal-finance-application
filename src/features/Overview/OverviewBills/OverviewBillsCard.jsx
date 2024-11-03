/* eslint-disable react/prop-types */
import styles from "./OverviewBillsCard.module.css";

export default function OverviewBillsCard({ name, amount, bColor }) {
	return (
		<div className={styles.container} style={{ borderColor: `var(${bColor})` }}>
			<p className={styles.name}>{name}</p>
			<p className={styles.amount}>${amount}</p>
		</div>
	);
}
