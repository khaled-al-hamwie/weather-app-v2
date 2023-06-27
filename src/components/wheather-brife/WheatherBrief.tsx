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
		<div className=" w-full grid grid-cols-3 gap-0 mb-8 px-2 ">
			<div className="flex justify-center items-center h-20 ">
				<div className="text-5xl ">{temp}&deg;</div>
			</div>
			<div className="flex justify-center">
				<div className="w-0.5 bg-gray-500"></div>
			</div>
			<div className="flex flex-col justify-evenly items-center text-center pl-1 ">
				<p className="capitalize font-bold text-lg">
					{weather[0].main}
				</p>
				<p className="text-gray-500">{formattedDate}</p>
			</div>
		</div>
	);
}
