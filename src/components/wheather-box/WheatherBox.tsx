import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { WeatherResponse } from "../../helpers/interfaces/weatherRespone.interface";

export default function WheatherBox({
	weather,
	wind: { speed },
	cod,
}: WeatherResponse) {
	return (
		<div className="w-full h-1/2 flex flex-col items-center justify-evenly">
			<img
				src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
				alt="weather"
				className="rounded bg-slate-200 w-44"
			/>
			<div className="flex flex-col rounded w-2/3 bg-white h-32 justify-evenly items-center">
				<div className=" w-3/4  grid grid-cols-4 gap-4 text-gray-400">
					<FontAwesomeIcon
						icon={icon({
							name: "wind",
						})}
					/>
					<p className="capitalize ">wind</p>
					<div className="w-0.5 bg-gray-400"></div>
					<div>{speed}km/h</div>
				</div>
				<div className="w-3/4  grid grid-cols-4 gap-4 text-gray-400">
					<FontAwesomeIcon
						icon={icon({
							name: "sun",
						})}
					/>
					<p className="capitalize">sun</p>
					<div className="w-0.5 bg-gray-400"></div>
					<div>{cod}</div>
				</div>
			</div>
		</div>
	);
}
