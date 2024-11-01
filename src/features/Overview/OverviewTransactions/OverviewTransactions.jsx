/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./OverviewTransactions.module.css";
import CardHeader from "../CardHeader/CardHeader";
import OverviewTransactionCard from "./OverviewTransactionCard";

export default function OverviewTransactions({ transactions }) {
	return (
		<div className={styles.container}>
			<CardHeader title="Transactions" buttonInfo="View All" />
			<div className={styles.transactions__container}>
				<OverviewTransactionCard />
				<OverviewTransactionCard />
			</div>
		</div>
	);
}
