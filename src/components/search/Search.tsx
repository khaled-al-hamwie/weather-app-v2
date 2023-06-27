import { useState } from "react";
import search from "./search";

const Search = (props: any) => {
	const [location, setLocation] = useState<string>("");
	return (
		<div className="flex items-center justify-center mb-12">
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
			<button
				type="button"
				className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
				onClick={(e) => {
					e.preventDefault();
					search(location, setLocation, props);
				}}>
				Search
			</button>
		</div>
	);
};

export default Search;
