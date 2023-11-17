import { playlistStore } from "@/lib/store/store";

const BackgroundColor = ({ height = "h-full" }) => {
	const { currentColor } = playlistStore();

	return (
		<div
			className={`absolute z-0 inset-0 w-full ${height} top-0 bottom-0 left-0 right-0`}
			style={{
				background: "linear-gradient(to top, #121212, transparent)",
				backgroundColor: currentColor?.dark,
				transitionProperty: "background-color",
				transitionDuration: "1000ms",
			}}
		/>
	);
};
export default BackgroundColor;
