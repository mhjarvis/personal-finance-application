/* eslint-disable no-unused-vars */
import styles from "./Transactions.module.css";
import { useState } from "react";
import { transactionData } from "../../assets/data/transactionData";
import MainLayout from "../../layouts/MainLayout/MainLayoutl";
import NavigationLayout from "../../layouts/NavigationLayout/NavigationLayout";
import TransactionHeader from "../../features/Transactions/Header/TransactionHeader";
import CardLayout from "../../layouts/CardLayout/CardLayout";
import TransactionMain from "../../features/Transactions/Main/TransactionMain";

export default function Transactions() {
	const [transactions, setTransactions] = useState(transactionData);

	return (
		<div className={styles.transactions}>
			<MainLayout>
				<TransactionHeader />
				<CardLayout>
					<TransactionMain data={transactions} />
				</CardLayout>
			</MainLayout>
			<NavigationLayout />
		</div>
	);
}
