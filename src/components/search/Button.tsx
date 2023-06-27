import React from "react";
import search from "./search";

export default function Button({ location, setLocation, props }: any) {
	return (
		<button
			type="button"
			className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
			onClick={(e) => {
				e.preventDefault();
				search(location, setLocation, props);
			}}>
			Search
		</button>
	);
}
