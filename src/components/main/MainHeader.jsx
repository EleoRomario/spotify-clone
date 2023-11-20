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
				<a
					href="https://github.com/EleoRomario/spotify-clone"
					className="flex justify-center items-center h-8 w-8 bg-black rounded-full"
				>
					<svg
						width="512"
						height="512"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="currentColor"
							d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
						/>
					</svg>
				</a>
			</div>
		</header>
	);
};
