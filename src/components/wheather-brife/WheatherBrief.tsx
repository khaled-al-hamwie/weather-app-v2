import React from "react";

export default function WheatherBrief() {
	const currentDate = new Date();
	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		day: "numeric",
		month: "long",
	};
	const formattedDate = currentDate.toLocaleDateString(undefined, options);
	return (
		<div className=" w-full flex justify-evenly mb-8">
			<div className="w-1/4 text-7xl h-20">20&deg;</div>
			<div className="w-0.5 bg-gray-500"></div>
			<div className="flex flex-col justify-evenly pl-1">
				<p className="capitalize font-bold text-lg">cloudy</p>
				<p className="text-gray-500">{formattedDate}</p>
			</div>
		</div>
	);
}
