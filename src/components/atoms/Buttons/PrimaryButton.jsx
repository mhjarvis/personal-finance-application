/* eslint-disable react/prop-types */
import "./PrimaryButton.css";

export default function PrimaryButton({ text }) {
	return (
		<div>
			<button className="primary-button">{text}</button>
		</div>
	);
}
