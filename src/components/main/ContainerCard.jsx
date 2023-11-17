import { useEffect } from "react";
import { playlistStore } from "@/lib/store/store";
import BackgroundColor from "./BackgroundColor";

export const ContainerCard = ({ playlist, children }) => {
	const { setCurrentColor } = playlistStore();
	useEffect(() => {
		setCurrentColor(playlist?.color);
	}, []);

	return (
		<article>
			<BackgroundColor />
			{children}
		</article>
	);
};
