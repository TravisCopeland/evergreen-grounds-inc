"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
	display: "block",
	margin: "2px auto",
};

const Spinner = ({ loading }) => {
	return (
		<ClipLoader
			color="#FFFFFF"
			loading={loading}
			cssOverride={override}
			size={20}
			aria-label="Loading Spinner"
		/>
	);
};

export default Spinner;
