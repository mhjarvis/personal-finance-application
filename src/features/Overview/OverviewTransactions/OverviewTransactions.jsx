/* eslint-disable react/prop-types */
import styles from "./OverviewTransactions.module.css";
import CardHeader from "../CardHeader/CardHeader";
import OverviewTransactionCard from "./OverviewTransactionCard";

export default function OverviewTransactions({ data }) {
	return (
		<div className={styles.container}>
			<CardHeader title="Transactions" buttonInfo="View All" />
			<div className={styles.transactions__container}>
				{data.map((charge, i) => (
					<OverviewTransactionCard
						key={i}
						name={charge.name}
						url={charge.url}
						date={charge.date}
						amount={charge.amount}
						type={charge.type}
					/>
				))}
			</div>
		</div>
	);
}
