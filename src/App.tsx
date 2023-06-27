import React, { useEffect, useState } from "react";
import LoadingDots from "./components/loading-dots/LoadingDots";
import WeatherBox from "./components/weather-box/WeatherBox";
import WeatherBrief from "./components/weather-brife/WeatherBrief";
import Search from "./components/weather-header/Search";
import WeatherHeader from "./components/weather-header/WeatherHeader";
import getCoords from "./helpers/getCoords";
import getWheather from "./helpers/getWheather";
import { Coords } from "./helpers/interfaces/coords.interface";
import { WeatherResponse } from "./helpers/interfaces/weatherRespone.interface";

function App() {
	const [weather, setWeather] = useState<WeatherResponse>();
	const [isLoading, setIsLoading] = useState<Boolean>(true);
	const [coords, setCoords] = useState<Coords>({ lat: 0, lon: 0 });
	useEffect(() => {
		setIsLoading(true);
		getCoords()
			.then((coords: Coords) => getWheather(coords.lat, coords.lon))
			.then((data) => {
				setWeather(data);
				setIsLoading(false);
			})
			.catch(console.log);
	}, []);
	useEffect(() => {
		setIsLoading(true);
		getWheather(coords.lat, coords.lon)
			.then((data) => {
				setWeather(data);
				setIsLoading(false);
			})
			.catch(console.log);
	}, [coords]);
	return (
		<div className="flex flex-col items-center h-screen pt-2 px-3 bg-gray-100">
			<Search setCoords={setCoords} setIsLoading={setIsLoading} />
			{!isLoading && weather ? (
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
