import React from "react";
import "./App.css";
import WheatherBrief from "./components/wheater-brife/WheatherBrief";
import WheatherHeader from "./components/wheater-header/wheather-header";
import WheatherBox from "./components/wheather-box/WheatherBox";

function App() {
	return (
		<div className="flex flex-col items-center h-screen pt-2 px-3">
			<WheatherHeader />
			<WheatherBrief />
			<WheatherBox />
			<div className="weather-row bg-orange-400">nowW</div>
		</div>
	);
}

export default App;
