import axios, { AxiosResponse } from "axios";
import { WeatherResponse } from "./interfaces/weatherRespone.interface";

export default async function getWheather(lat: number, lon: number) {
	const key = process.env.REACT_APP_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
	return axios.get<WeatherResponse>(url).then((res) => res.data);
}
