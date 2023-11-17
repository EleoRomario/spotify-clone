import { useEffect, useState } from "react";
import { playlistStore } from "@/lib/store/store";

const MainButtonHeader = ({ link, children }) => {
	return (
		<a
			href={link}
			className="flex justify-center items-center h-8 w-8 rounded-full text-text hover:text-white bg-black-500 hover:scale-105 transition-all duration-300"
		>
			{children}
		</a>
	);
};

const ButtonBack = () => {
	return (
		<MainButtonHeader link="/">
			<svg height="16" width="16" viewBox="0 0 16 16">
				<path
					fill="currentColor"
					d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"
				></path>
			</svg>
		</MainButtonHeader>
	);
};

const ButtonForward = () => {
	return (
		<MainButtonHeader link="/">
			<svg height="16" width="16" viewBox="0 0 16 16">
				<path
					fill="currentColor"
					d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"
				></path>
			</svg>
		</MainButtonHeader>
	);
};

const ButtonNotification = () => {
	return (
		<MainButtonHeader link="/">
			<svg height="16" width="16" viewBox="0 0 16 16">
				<path
					fill="currentColor"
					d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"
				></path>
			</svg>
		</MainButtonHeader>
	);
};

export const MainHeader = () => {
	const { currentColor } = playlistStore();

	const [color, setColor] = useState(null);

	useEffect(() => {
		const scrolling = () => {
			const header = window.document.querySelector("#playlist-container");

			header.addEventListener("scroll", () => {
				if (header.scrollTop > 64) {
					setColor(currentColor?.dark);
				} else {
					setColor(null);
				}
			});
		};
		scrolling();
	}, [currentColor]);

	return (
		<header
			className="sticky p-7 top-0 flex justify-between h-16  items-center z-20  transition-all duration-300"
			style={{
				backgroundColor: color || "transparent",
			}}
		>
			<div className="flex gap-2">
				<ButtonBack />
				<ButtonForward />
			</div>
			<div className="flex gap-2">
				<ButtonNotification />
				<button className="flex justify-center items-center h-8 w-8 ">
					<figure className="border-4 border-black-500 w-full h-full rounded-full overflow-hidden">
						<img
							src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="avatar"
							className="object-cover object-center h-full w-full"
						/>
					</figure>
				</button>
			</div>
		</header>
	);
};
