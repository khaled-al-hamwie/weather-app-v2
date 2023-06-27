import { useEffect, useState } from "react";
import LoadingDots from "./components/loading-dots/LoadingDots";
import Search from "./components/search/Search";
import WeatherBox from "./components/weather-box/WeatherBox";
import WeatherBrief from "./components/weather-brife/WeatherBrief";
import WeatherHeader from "./components/weather-header/WeatherHeader";
import geoUpdate from "./helpers/geoUpdate";
import { Coords } from "./helpers/interfaces/coords.interface";
import { WeatherResponse } from "./helpers/interfaces/weatherRespone.interface";
import onCoordsUpdate from "./helpers/onCoordsUpdate";

function App() {
	const [weather, setWeather] = useState<WeatherResponse>();
	const [isLoading, setIsLoading] = useState<Boolean>(true);
	const [coords, setCoords] = useState<Coords>({ lat: 0, lon: 0 });
	const [errors, setErrors] = useState("");
	useEffect(() => {
		geoUpdate(setErrors, setIsLoading, setWeather);
	}, []);
	useEffect(() => {
		onCoordsUpdate(setErrors, setIsLoading, setWeather, coords);
	}, [coords]);

	let content;
	if (errors) {
		content = <div>{errors}</div>;
	} else if (!isLoading && weather) {
		content = (
			<>
				<WeatherHeader {...weather} />
				<WeatherBrief {...weather} />
				<WeatherBox {...weather} />
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
