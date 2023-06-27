import getWheather from "./getWheather";
import { Coords } from "./interfaces/coords.interface";
import { WeatherResponse } from "./interfaces/weatherRespone.interface";

export default function onCoordsUpdate(
	setErrors: React.Dispatch<React.SetStateAction<string>>,
	setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>,
	setWeather: React.Dispatch<
		React.SetStateAction<WeatherResponse | undefined>
	>,
	coords: Coords
) {
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
}
