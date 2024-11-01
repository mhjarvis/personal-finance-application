import styles from "./CardHeader.module.css";
import chevron from "../../../assets/images/icon-caret-right.svg";

/* eslint-disable react/prop-types */

export default function CardHeader({ title, buttonInfo }) {
	return (
		<div className={styles["card-container"]}>
			<p className={styles.title}>{title}</p>
			<div className={styles["details-container"]}>
				<button className={styles["details__button"]}>{buttonInfo}</button>
				<img
					src={chevron}
					alt="Right caret icon"
					className={styles.details__image}
				/>
			</div>
		</div>
	);
}
