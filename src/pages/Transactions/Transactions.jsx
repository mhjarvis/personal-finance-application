import styles from "./Transactions.module.css";
import MainLayout from "../../layouts/MainLayout/MainLayoutl";
import NavigationLayout from "../../layouts/NavigationLayout/NavigationLayout";
import TransactionHeader from "../../features/Transactions/Header/TransactionHeader";
import CardLayout from "../../layouts/CardLayout/CardLayout";

export default function Transactions() {
	return (
		<div className={styles.transactions}>
			<MainLayout>
				<TransactionHeader />
				<CardLayout />
			</MainLayout>
			<NavigationLayout />
		</div>
	);
}
