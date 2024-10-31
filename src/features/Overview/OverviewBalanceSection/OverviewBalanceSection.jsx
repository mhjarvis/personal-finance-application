/* eslint-disable react/prop-types */
import BalanceCard from "./BalanceCard";
import "./OverviewBalanceSection.css";

export default function OverviewBalanceSection({ balances }) {
	return (
		<div className="balance-section">
			{" "}
			<BalanceCard
				title="Current Balance"
				amount={balances.currentBalance}
				background="black"
				text="white"
			/>
			<BalanceCard
				title="Income"
				amount={balances.income}
				background="white"
				text="black"
			/>{" "}
			<BalanceCard
				title="Expenses"
				amount={balances.expenses}
				background="white"
				text="black"
			/>
		</div>
	);
}
