import "./Home.css";
import MainLayout from "../../layouts/MainLayout/MainLayoutl";
import OverviewHeader from "../../features/Overview/OverviewHeader/OverviewHeader";
import NavigationLayout from "../../layouts/NavigationLayout/NavigationLayout";
import OverviewBalanceSection from "../../features/Overview/OverviewBalanceSection/OverviewBalanceSection";
import BalanceCard from "../../features/Overview/OverviewBalanceSection/BalanceCard";

export default function Home() {
	return (
		<div className="home">
			<MainLayout>
				<OverviewHeader />
				<OverviewBalanceSection>
					<BalanceCard
						title="Current Balance"
						amount="4836.00"
						background="black"
						text="white"
					/>
					<BalanceCard
						title="Income"
						amount="4815.25"
						background="white"
						text="black"
					/>{" "}
					<BalanceCard
						title="Expenses"
						amount="1234.12"
						background="white"
						text="black"
					/>
				</OverviewBalanceSection>
			</MainLayout>
			<NavigationLayout />
		</div>
	);
}
