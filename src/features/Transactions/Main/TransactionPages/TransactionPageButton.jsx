/* eslint-disable react/prop-types */
import styles from "./TransactionPageButton.module.css";

export default function TransactionPageButton({ content }) {
	return (
		<button className={styles.page__button}>
			<img src={content} alt="Caret" />
		</button>
	);
}
