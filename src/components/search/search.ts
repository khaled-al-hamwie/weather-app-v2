import getLocationCoords from "../../helpers/getLocationCoords";

export default function search(
	location: string,
	setLocation: any,
	setIsLoading: any,
	setCoords: any,
	setErrors: any
) {
	setIsLoading(true);
	getLocationCoords(location)
		.then((location) =>
			setCoords({
				lat: location[0].lat,
				lon: location[0].lon,
			})
		)
		.catch(() => setErrors("location does'nt exists"));
	setLocation("");
}
