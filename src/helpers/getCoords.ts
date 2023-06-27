import { Coords } from "./interfaces/coords.interface";

export default async function getCoords(): Promise<Coords> {
	return new Promise((resolve, rejects) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(posistion) => {
					resolve({
						lat: posistion.coords.latitude,
						lon: posistion.coords.longitude,
					});
				},
				() => {
					rejects(
						new Error("your browser don't support geolocation")
					);
				}
			);
		} else rejects(new Error("your browser don't support geolocation"));
	});
}
