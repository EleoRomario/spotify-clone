import { playlistStore } from "@/lib/store/store";

const BackgroundColor = () => {
	const { currentColor } = playlistStore();

	return (
		<div
			className="absolute inset-0 w-full h-full top-0 bottom-0 left-0 right-0 bg-gradient-to-t to-black-400/60 to-95% from-black from-50%"
			style={{
				backgroundColor: currentColor?.dark,
				transitionProperty: "background-color",
				transitionDuration: "1000ms",
			}}
		/>
	);
};
export default BackgroundColor;
