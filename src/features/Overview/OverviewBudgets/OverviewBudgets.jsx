/* eslint-disable react/prop-types */
import SmallPot from "../../../common/components/SmallPot/SmallPot";
import CardHeader from "../CardHeader/CardHeader";
import DoughnutChart from "./DoughnutChart";
import styles from "./OverviewBudgets.module.css";

export default function OverviewBudgets({ budget }) {
	return (
		<div className={styles.budget__container}>
			<CardHeader title="Budgets" buttonInfo="See Details" />
			<DoughnutChart budget={budget} />
			<div className={styles.budget__items}>
				{budget.map((item, i) => (
					<SmallPot
						title={item.name}
						amount={item.budget}
						color={item.color}
						key={i}
					/>
				))}
				{/* 				<SmallPot title="Entertainment" amount="32" borderColor="--green" />
				<SmallPot title="Bills" amount="567" borderColor="--cyan" />{" "}
				<SmallPot title="Dinning Out" amount="34" borderColor="--navy" />{" "}
				<SmallPot title="Personal Care" amount="100" borderColor="--yellow" /> */}
			</div>
		</div>
	);
}
