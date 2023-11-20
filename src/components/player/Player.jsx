import { useState } from "react";

const Play = () => {
	return (
		<button className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
			<svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
				<path className="fill-black" d="M8 5.14v14l11-7-11-7z"></path>
			</svg>
		</button>
	);
};

const Slider = ({ value, handleChange }) => {
	const [hover, setHover] = useState(false);

	const handleHover = () => {
		setHover(!hover);
	};

	return (
		<input
			className="slider-player"
			style={{
				background: hover
					? "linear-gradient(to right, #16a34a 0%, #16a34a " +
					  value +
					  "%, #4d4d4d " +
					  value +
					  "%, #4d4d4d"
					: "linear-gradient(to right, #fff 0%, #fff " +
					  value +
					  "%, #4d4d4d " +
					  value +
					  "%, #4d4d4d",
			}}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			type="range"
			value={value}
			min={0}
			max={100}
			step="1"
			onChange={handleChange}
		/>
	);
};

const CardSong = ({ cover, title, astistsString }) => {
	return (
		<div class="playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-black-500">
			<picture class="h-12 w-12 flex-none">
				<img
					src={cover}
					alt={`Cover of ${title} by ${artistsString}`}
					class="object-cover w-full h-full rounded-md"
				/>
			</picture>
			<div class="flex flex-auto flex-col truncate">
				<h4 class="font-medium text-sm">{title}</h4>
				<span class="text-xs text-zinc-400">{artistsString}</span>
			</div>
		</div>
	);
};

const Volume = () => {
	const [volume, setVolume] = useState(100);
	const handleVolume = (e) => {
		setVolume(e.target.value);
	};
	return (
		<div className="flex gap-2 justify-center items-center">
			<button>
				<svg
					height="16"
					width="16"
					viewBox="0 0 16 16"
					className="fill-white"
				>
					<path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
					<path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
				</svg>
			</button>
			<Slider value={volume} handleChange={handleVolume} />
		</div>
	);
};

export const Player = () => {
	const [value, setValue] = useState(0);
	return (
		<div className="w-full grid grid-cols-[350px_1fr_350px]  px-3 items-center h-20">
			<div></div>
			<div className="w-full flex flex-col items-center gap-2">
				<div>
					<Play />
				</div>
				<div className="flex w-full justify-between items-center gap-2">
					<span className="text-text font-normal text-xs">0:00</span>
					<Slider
						value={value}
						handleChange={(e) => setValue(e.target.value)}
					/>
					<span className="text-text font-normal text-xs">0:00</span>
				</div>
			</div>
			<div className="flex justify-end">
				<Volume />
			</div>
		</div>
	);
};
