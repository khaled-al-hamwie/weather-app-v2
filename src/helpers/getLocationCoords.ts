import axios from "axios";

export default async function getLocationCoords(location: string) {
	const key = process.env.REACT_APP_KEY;
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key}`;
	return axios.get(url).then((res) => res.data);
}
