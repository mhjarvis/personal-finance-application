/* eslint-disable react/prop-types */

import styles from "./TransactionMain.module.css";

export default function TransactionMain({ data }) {
	return <div className={styles.container}>{data[0].name}</div>;
}
