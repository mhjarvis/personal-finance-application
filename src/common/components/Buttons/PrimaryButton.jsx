/* eslint-disable react/prop-types */
import "./PrimaryButton.css";

export default function PrimaryButton({ text, id }) {
	return (
		<div>
			<button className="primary-button" id={id}>
				{text}
			</button>
		</div>
	);
}
