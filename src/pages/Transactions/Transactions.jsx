import styles from "./Transactions.module.css";
import MainLayout from "../../layouts/MainLayout/MainLayoutl";
import NavigationLayout from "../../layouts/NavigationLayout/NavigationLayout";
import TransactionHeader from "../../features/Transactions/Header/TransactionHeader";

export default function Transactions() {
	return (
		<div className={styles.transactions}>
			<MainLayout>
				<TransactionHeader />
			</MainLayout>
			<NavigationLayout />
		</div>
	);
}
