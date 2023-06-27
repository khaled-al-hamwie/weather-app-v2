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
	const [errors, setErrors] = useState("");
	useEffect(() => {
		setErrors("");
		setIsLoading(true);
		getCoords()
			.then((coords: Coords) => getWheather(coords.lat, coords.lon))
			.then((data) => {
				setWeather(data);
				setIsLoading(false);
			})
			.catch((errors) => {
				console.log(errors);
				setErrors("geo code is not supported in you browser");
			});
	}, []);
	useEffect(() => {
		setErrors("");
		setIsLoading(true);
		getWheather(coords.lat, coords.lon)
			.then((data) => {
				setWeather(data);
				setIsLoading(false);
			})
			.catch(() => {
				setErrors("couldn't find your city");
			});
	}, [coords]);

	let content;
	if (errors) {
		content = <div>{errors}</div>;
	} else if (!isLoading && weather) {
		content = (
			<>
				{" "}
				<WeatherHeader {...weather} />
				<WeatherBrief {...weather} />
				<WeatherBox {...weather} />{" "}
			</>
		);
	} else {
		content = (
			<div className="w-full h-full grid place-content-center">
				<LoadingDots />
			</div>
		);
	}
	return (
		<div className="flex flex-col items-center h-screen pt-2 px-3 bg-gray-100">
			<Search
				setCoords={setCoords}
				setIsLoading={setIsLoading}
				setErrors={setErrors}
			/>
			{content}
		</div>
	);
}

export default App;
