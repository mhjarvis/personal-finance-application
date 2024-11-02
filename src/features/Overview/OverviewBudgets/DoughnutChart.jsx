/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./DoughnutChart.module.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ budget }) {
	const data = {
		labels: "",
		datasets: [
			{
				label: "",
				data: [
					budget[0].budgetUsed,
					budget[1].budgetUsed,
					budget[2].budgetUsed,
					budget[3].budgetUsed,
				],
				backgroundColor: ["#277c78", "#82c9d7", "#f2cdac", "#626070"],
				hoverOffset: 4,
			},
		],
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			tooltip: {
				enabled: true,
			},
		},
	};

	return (
		<div className={styles.container}>
			<Doughnut data={data} options={options} />
		</div>
	);
}
