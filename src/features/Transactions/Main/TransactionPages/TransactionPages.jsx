/* eslint-disable no-unused-vars */
import TransactionPageButton from "./TransactionPageButton";
import styles from "./TransactionPages.module.css";
import leftCaret from "../assets/images/icon-caret-left.svg";
import rightCaret from "../assets/images/icon-caret-right.svg";

export default function TransactionPages() {
	return (
		<div className={styles.container}>
			<button>{leftCaret}</button>
			<div className={styles.pages__container}>
				<TransactionPageButton content={leftCaret} />
				{}
				<TransactionPageButton content={rightCaret} />
			</div>
		</div>
	);
}
