import React, { useEffect, useState } from "react";
import "./App.css";
import LoadingDots from "./components/loading-dots/LoadingDots";
import WeatherBox from "./components/weather-box/WeatherBox";
import WeatherBrief from "./components/weather-brife/WeatherBrief";
import WeatherHeader from "./components/weather-header/WeatherHeader";
import getCoords from "./helpers/getCoords";
import getWheather from "./helpers/getWheather";
import { Coords } from "./helpers/interfaces/coords.interface";
import { WeatherResponse } from "./helpers/interfaces/weatherRespone.interface";

//render it
function App() {
	const [weather, setWheather] = useState<WeatherResponse>();
	useEffect(() => {
		getCoords()
			.then((coords: Coords) => getWheather(coords.lat, coords.lon))
			.then((data) => setWheather(data))
			.catch(console.log);
	}, []);

	return (
		<div className="flex flex-col items-center h-screen pt-2 px-3 bg-gray-100">
			{weather ? (
				<>
					{" "}
					<WeatherHeader {...weather} />
					<WeatherBrief {...weather} />
					<WeatherBox {...weather} />{" "}
				</>
			) : (
				<div className="w-full h-full grid place-content-center">
					<LoadingDots />
				</div>
			)}
		</div>
	);
}

export default App;
