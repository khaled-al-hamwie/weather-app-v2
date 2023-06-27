import getCoords from "./getCoords";
import getWheather from "./getWheather";
import { Coords } from "./interfaces/coords.interface";
import { WeatherResponse } from "./interfaces/weatherRespone.interface";

export default function geoUpdate(
	setErrors: React.Dispatch<React.SetStateAction<string>>,
	setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>,
	setWeather: React.Dispatch<
		React.SetStateAction<WeatherResponse | undefined>
	>
) {
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
}
