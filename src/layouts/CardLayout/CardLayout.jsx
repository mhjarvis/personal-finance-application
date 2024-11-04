/* eslint-disable react/prop-types */

import styles from "./CardLayout.module.css";

export default function CardLayout({ children }) {
	return (
		<div className={styles.container}>
			{children}
			<p>test</p>
		</div>
	);
}
