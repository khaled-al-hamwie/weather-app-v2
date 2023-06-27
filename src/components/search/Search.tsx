import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Search = (props: any) => {
	const [location, setLocation] = useState<string>("");
	return (
		<div className="flex items-center justify-center mb-12">
			<Input {...{ location, setLocation, props }} />
			<Button {...{ location, setLocation, props }} />
		</div>
	);
};

export default Search;
