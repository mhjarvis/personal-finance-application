import styles from "./Transactions.module.css";
import MainLayout from "../../layouts/MainLayout/MainLayoutl";
import NavigationLayout from "../../layouts/NavigationLayout/NavigationLayout";
import TransactionHeader from "../../features/Transactions/Header/TransactionHeader";
import CardLayout from "../../layouts/CardLayout/CardLayout";
import TransactionMain from "../../features/Transactions/Main/TransactionMain";

export default function Transactions() {
	return (
		<div className={styles.transactions}>
			<MainLayout>
				<TransactionHeader />
				<CardLayout>
					<TransactionMain />
				</CardLayout>
			</MainLayout>
			<NavigationLayout />
		</div>
	);
}
