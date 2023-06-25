import React from "react";
import logo from "../../assets/location-icon.png";

export default function WheatherHeader() {
	return (
		<div className="flex w-full justify-end mb-8">
			<div className="font-bold capitalize text-xs pr-4">damascus</div>
			<img src={logo} alt="location-icon" className="w-5 " />
		</div>
	);
}
