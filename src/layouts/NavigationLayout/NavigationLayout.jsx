import "./NavigationLayout.css";
import homeIcon from "../../assets/images/icon-nav-overview.svg";
import arrowsIcon from "../../assets/images/icon-nav-transactions.svg";
import budgetIcon from "../../assets/images/icon-nav-budgets.svg";
import potsIcon from "../../assets/images/icon-nav-pots.svg";
import recurringBillsIcon from "../../assets/images/icon-nav-recurring-bills.svg";

export default function NavigationLayout() {
	return (
		<div className="navigation-layout">
			<img src={homeIcon} alt="Home icon" />
			<img src={arrowsIcon} alt="Transactions icon" />
			<img src={budgetIcon} alt="Budget icon" />
			<img src={potsIcon} alt="Pots icon" />
			<img src={recurringBillsIcon} alt="Recurring Bills icon" />
		</div>
	);
}
