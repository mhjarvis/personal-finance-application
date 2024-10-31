/* eslint-disable react/prop-types */
import "./OverviewPots.css";
import chevron from "../../../assets/images/icon-caret-right.svg";
import money from "../../../assets/images/icon-pot.svg";
import SmallPot from "../../../common/components/SmallPot/SmallPot.jsx";

// eslint-disable-next-line no-unused-vars
export default function OverviewPots({ pots }) {
	const total = 850;
	return (
		<div className="overview-pots__container">
			<div className="overview-pots__header">
				<p className="overview-pots__title">Pots</p>
				<div className="overview-pots__button-container">
					<button className="overview-pots__button">See Details</button>
					<img src={chevron} alt="Right caret icon" className="chevron" />
				</div>
			</div>
			<div className="overview-pots__card-container">
				<img src={money} alt="Money pot icon" className="money-pot-icon" />
				<div className="overview-pots__saved-container">
					<p className="overview-pots__saved-text">Total Saved</p>
					<p className="overview-pots__saved-amount">${total}</p>
				</div>
			</div>
			<div className="small-pots-container">
				<SmallPot title="Savings" amount={pots.savings} borderColor="--green" />
				<SmallPot title="Gift" amount={pots.gift} borderColor="--cyan" />{" "}
				<SmallPot
					title="Concert Ticket"
					amount={pots.concertTicket}
					borderColor="--navy"
				/>{" "}
				<SmallPot
					title="New Laptop"
					amount={pots.newLaptop}
					borderColor="--yellow"
				/>
			</div>
		</div>
	);
}
