import React, { useEffect, useState } from "react";
import "./App.css";
import WheatherBox from "./components/wheather-box/WheatherBox";
import WheatherBrief from "./components/wheather-brife/WheatherBrief";
import WheatherHeader from "./components/wheather-header/WheatherHeader";
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
					<WheatherHeader {...weather} />
					<WheatherBrief {...weather} />
					<WheatherBox {...weather} />{" "}
				</>
			) : (
				<div className="w-full h-full grid place-content-center">
					<div className="flex">
						<div className="h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce"></div>
						<div className="h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce"></div>
						<div className="h-2.5 w-2.5 bg-current rounded-full animate-bounce"></div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
