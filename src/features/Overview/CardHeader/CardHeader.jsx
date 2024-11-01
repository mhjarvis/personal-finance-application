import styles from "./CardHeader.module.css";
/* eslint-disable react/prop-types */

export default function CardHeader({ title, buttonInfo, link }) {
	return (
		<div className={styles["card-container"]}>
			<p className={styles.title}>{title}</p>
			<div className={styles["details-container"]}>
				<button className={styles["details__button"]}>{buttonInfo}</button>
				<img
					src={link}
					alt="Right caret icon"
					className={styles.details__image}
				/>
			</div>
		</div>
	);
}
