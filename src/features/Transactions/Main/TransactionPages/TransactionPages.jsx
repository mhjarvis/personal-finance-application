/* eslint-disable no-unused-vars */
import TransactionPageButton from "./TransactionPageButton";
import styles from "./TransactionPages.module.css";
import LeftCaret from "/src/assets/images/icon-caret-left.svg";
import RightCaret from "/src/assets/images/icon-caret-right.svg";

export default function TransactionPages() {
	return (
		<div className={styles.container}>
			<div className={styles.pages__container}>
				<TransactionPageButton content={LeftCaret} />
				{}
				<TransactionPageButton content={RightCaret} />
			</div>
		</div>
	);
}
