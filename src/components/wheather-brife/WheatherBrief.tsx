import React from "react";
import { WeatherResponse } from "../../helpers/interfaces/weatherRespone.interface";

export default function WheatherBrief({
	main: { temp },
	weather,
}: WeatherResponse) {
	const currentDate = new Date();
	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		day: "numeric",
		month: "long",
	};
	const formattedDate = currentDate.toLocaleDateString(undefined, options);
	return (
		<div className=" w-full flex justify-evenly mb-8">
			<div className="w-1/4 text-7xl h-20">{temp}&deg;</div>
			<div className="w-0.5 bg-gray-500"></div>
			<div className="flex flex-col justify-evenly pl-1">
				<p className="capitalize font-bold text-lg">
					{weather[0].main}
				</p>
				<p className="text-gray-500">{formattedDate}</p>
			</div>
		</div>
	);
}
