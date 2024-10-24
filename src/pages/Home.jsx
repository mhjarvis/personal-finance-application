import PrimaryButton from "../components/atoms/Buttons/PrimaryButton";
import PageTitle from "../components/atoms/PageTitle/PageTitle";
import MainLayout from "../components/layouts/MainLayoutl";

export default function Home() {
	return (
		<MainLayout>
			<PageTitle title="Overview" />
			<PrimaryButton text="+ Add New Budget" />
		</MainLayout>
	);
}
