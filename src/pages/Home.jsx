import "./Home.css";
import MainLayout from "../components/layouts/MainLayoutl";
import OverviewHeader from "../components/molecules/Overview/OverviewHeader";

export default function Home() {
	return (
		<div className="home">
			<MainLayout>
				<OverviewHeader />
			</MainLayout>
		</div>
	);
}
