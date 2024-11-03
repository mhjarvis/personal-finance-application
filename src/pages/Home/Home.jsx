/* eslint-disable no-unused-vars */
import "./Home.css";
import MainLayout from "../../layouts/MainLayout/MainLayoutl";
import OverviewHeader from "../../features/Overview/OverviewHeader/OverviewHeader";
import NavigationLayout from "../../layouts/NavigationLayout/NavigationLayout";
import OverviewBalanceSection from "../../features/Overview/OverviewBalanceSection/OverviewBalanceSection";
import { useState } from "react";
import OverviewPots from "../../features/Overview/OverviewPotsSection/OverviewPots";
import OverviewTransactions from "../../features/Overview/OverviewTransactions/OverviewTransactions";
import { transactionData } from "../../assets/data/transactionData";
import OverviewBudgets from "../../features/Overview/OverviewBudgets/OverviewBudgets";
import OverviewBills from "../../features/Overview/OverviewBills/OverviewBills";
import { budgetData } from "../../assets/data/budgetData";
import { recurringBillsData } from "../../assets/data/recurringBillsData";

export default function Home() {
	const [balances, setBalances] = useState({
		currentBalance: 4836.0,
		income: 3814.25,
		expenses: 1700.5,
	});

	const [pots, setPots] = useState({
		savings: 159.0,
		gift: 40.0,
		concertTicket: 110.0,
		newLaptop: 10.0,
	});

	const [transactions, setTransactions] = useState(transactionData);
	const [budget, setBudget] = useState(budgetData);
	const [recurringBills, setRecurringBills] = useState(recurringBillsData);

	return (
		<div className="home">
			<MainLayout>
				<OverviewHeader />
				<OverviewBalanceSection balances={balances} />
				<OverviewPots pots={pots} />
				<OverviewTransactions data={transactions} />
				<OverviewBudgets budget={budget}></OverviewBudgets>
				<OverviewBills recurringBills={recurringBills} />
			</MainLayout>
			<NavigationLayout />
		</div>
	);
}
