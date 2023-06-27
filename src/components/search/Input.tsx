import React from "react";
import search from "./search";

export default function Input({ location, setLocation, props }: any) {
	return (
		<input
			type="text"
			value={location}
			placeholder="Search for a location"
			className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
			onChange={(e) => {
				setLocation(e.target.value);
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					search(location, setLocation, props);
				}
			}}
		/>
	);
}
