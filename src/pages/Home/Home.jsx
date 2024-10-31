/* eslint-disable no-unused-vars */
import "./Home.css";
import MainLayout from "../../layouts/MainLayout/MainLayoutl";
import OverviewHeader from "../../features/Overview/OverviewHeader/OverviewHeader";
import NavigationLayout from "../../layouts/NavigationLayout/NavigationLayout";
import OverviewBalanceSection from "../../features/Overview/OverviewBalanceSection/OverviewBalanceSection";
import BalanceCard from "../../features/Overview/OverviewBalanceSection/BalanceCard";
import { useState } from "react";

export default function Home() {
	const [balances, setBalances] = useState({
		currentBalance: 4836.0,
		income: 3814.25,
		expenses: 1700.5,
	});

	return (
		<div className="home">
			<MainLayout>
				<OverviewHeader />
				<OverviewBalanceSection>
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
				</OverviewBalanceSection>
			</MainLayout>
			<NavigationLayout />
		</div>
	);
}
