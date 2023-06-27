import React from "react";
import logo from "../../assets/location-icon.png";
import { WeatherResponse } from "../../helpers/interfaces/weatherRespone.interface";

export default function WheatherHeader({ name }: WeatherResponse) {
	return (
		<div className="flex w-full justify-end mb-8">
			<div className="font-bold capitalize text-xs pr-4">{name}</div>
			<img src={logo} alt="location-icon" className="w-5 " />
		</div>
	);
}
