import "./Home.css";
import MainLayout from "../../layouts/MainLayout/MainLayoutl";
import OverviewHeader from "../../features/Overview/OverviewHeader";
import NavigationLayout from "../../layouts/NavigationLayout/NavigationLayout";

export default function Home() {
	return (
		<div className="home">
			<MainLayout>
				<OverviewHeader />
			</MainLayout>
			<NavigationLayout />
		</div>
	);
}
