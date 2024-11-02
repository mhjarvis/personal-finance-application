import styles from "./OverviewBills.module.css";
import CardHeader from "../CardHeader/CardHeader";

export default function OverviewTransactions() {
	return (
		<div className={styles.container}>
			<CardHeader title="Recurring Bills" buttonInfo="View All" />
		</div>
	);
}
