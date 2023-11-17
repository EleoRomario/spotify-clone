import { useState, useEffect } from "react";
import { playlists } from "@/lib/data";
import { playlistStore } from "@/lib/store/store";
import BackgroundColor from "./BackgroundColor";

export const ButtonPlay = ({ className = "w-8 h-8" }) => (
	<button
		className={`${className} bg-green-600 rounded-full text-black shadow-side shadow-black/50 hover:scale-105 flex justify-center items-center`}
	>
		<svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
			<path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
		</svg>
	</button>
);

const ItemCard = ({ item }) => {
	const { cover, title, color } = item;

	const { setCurrentColor } = playlistStore();

	const handleHover = () => {
		setCurrentColor(color);
	};

	return (
		<div
			className="relative rounded-md h-12 group bg-black-400/60 hover:bg-black-400 transition-all duration-300 overflow-hidden"
			onMouseEnter={handleHover}
		>
			<button className="w-full h-full flex items-center gap-2 ">
				<img src={cover} alt={title} className="h-full w-12" />
				<p className="font-bold text-sm">{title}</p>
			</button>
			<div className="absolute right-2 top-0 bottom-0 hidden items-center group-hover:flex translate-y-1 group-hover:translate-y-0 transition-all duration-300">
				<ButtonPlay />
			</div>
		</div>
	);
};

const ItemCardLikes = () => {
	const { setCurrentColor } = playlistStore();

	const color = {
		accent: "#5d27da",
		dark: "#471d7f",
	};
	return (
		<div
			className="relative rounded-md h-12 group bg-black-400/60 hover:bg-black-400 transition-all duration-300 overflow-hidden"
			onMouseEnter={() => setCurrentColor(color)}
			onMouseLeave={() => setCurrentColor(null)}
		>
			<button className="w-full h-full flex items-center gap-2 ">
				<img
					src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
					alt="Likes"
					className="h-full w-12"
				/>
				<p className="font-bold text-sm">Tus me gusta</p>
			</button>
			<div className="absolute right-2 top-0 bottom-0 hidden items-center group-hover:flex translate-y-1 group-hover:translate-y-0 transition-all duration-300">
				<ButtonPlay />
			</div>
		</div>
	);
};

export const Greeting = () => {
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		const date = new Date();
		const hours = date.getHours();
		if (hours < 12) {
			setGreeting("Buenos días");
		} else if (hours < 18) {
			setGreeting("Buenas tardes");
		} else {
			setGreeting("Buenas noches");
		}
	}, []);

	return (
		<div className="flex flex-col gap-7 relative z-10">
			<h2 className="text-3xl font-bold">{greeting}</h2>
			<div>
				<div className="grid grid-cols-3 gap-2">
					<ItemCardLikes />
					{playlists.slice(0, 5).map((playlist) => (
						<ItemCard key={playlist.id} item={playlist} />
					))}
				</div>
			</div>
		</div>
	);
};
