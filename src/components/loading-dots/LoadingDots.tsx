import React from "react";

export default function LoadingDots() {
	return (
		<div className="flex">
			<div className="h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce"></div>
			<div className="h-2.5 w-2.5 bg-current rounded-full mr-1 animate-bounce"></div>
			<div className="h-2.5 w-2.5 bg-current rounded-full animate-bounce"></div>
		</div>
	);
}
