/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TransactionSort from "./TransactionSort/TransactionSort";
import TransactionCardHeader from "./TransactionCardHeader/TransactionCardHeader";
import TransactionCard from "./TransactionCard/TransactionCard";
import TransactionPages from "./TransactionPages/TransactionPages";

import styles from "./TransactionMain.module.css";

export default function TransactionMain({ data }) {
	return (
		<div className={styles.container}>
			<TransactionSort />
			<TransactionCardHeader />
			<TransactionCard data={data} />
			<TransactionPages />
		</div>
	);
}
