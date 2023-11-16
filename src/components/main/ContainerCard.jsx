import { useEffect } from "react";
import { playlistStore } from "@/lib/store/store";

export const ContainerCard = ({ playlist, children }) => {
	const { setCurrentColor } = playlistStore();
	useEffect(() => {
		setCurrentColor(playlist?.color);
	}, []);

	return <article>{children}</article>;
};
