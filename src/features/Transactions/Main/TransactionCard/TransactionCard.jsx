/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./TransactionCard.module.css";

export default function TransactionCard({ data }) {
	const [pageNumber, setPageNumber] = useState(0);

	function updateAmount(num) {
		let val = new Intl.NumberFormat("en-US", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(num);
		return val;
	}

	return (
		<div className={styles.card}>
			{data.slice(0, 10).map((item, i) => (
				<div className={styles.card__container} key={i}>
					<img
						src={item.avatar}
						alt="Avatar Icon"
						className={styles.card__image}
					/>
					<div className={styles["card__stack--1"]}>
						<p className={styles.card__name}>{item.name}</p>
						<p className={styles.card__category}>{item.category}</p>
					</div>
					<div className={styles["card__stack--2"]}>
						<p
							className={styles.card__amount}
							//update color based on pos/neg value
							style={{ color: `${item.amount > 0 ? "var(--green)" : "black"}` }}
						>
							${updateAmount(item.amount)}
						</p>
						<p className={styles.card__date}>{item.date}</p>
					</div>
				</div>
			))}
		</div>
	);
}
