/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./OverviewBills.module.css";
import CardHeader from "../CardHeader/CardHeader";
import OverviewBillsCard from "../OverviewBills/OverviewBillsCard";

export default function OverviewTransactions({ recurringBills }) {
	return (
		<div className={styles.container}>
			<CardHeader title="Recurring Bills" buttonInfo="View All" />
			<br />
			{recurringBills.map((bill) => (
				<OverviewBillsCard
					name={bill.name}
					amount={bill.amount}
					bColor={bill.borderColor}
					key={bill.name}
				/>
			))}
			{/* 			<OverviewBillsCard
				name={recurringBills[0].name}
				amount={recurringBills[0].amount}
				borderColor={recurringBills[0].borderColor}
			/> */}
		</div>
	);
}
