import getLocationCoords from "../../helpers/getLocationCoords";

export default function search(location: string, setLocation: any, props: any) {
	props.setIsLoading(true);
	getLocationCoords(location)
		.then((location) =>
			props.setCoords({
				lat: location[0].lat,
				lon: location[0].lon,
			})
		)
		.catch(() => props.setErrors("location does'nt exists"));
	setLocation("");
}
