import { create } from "zustand";

export const playlistStore = create((set) => ({
	currentColor: { dark: "#471d7f", accent: "#5d27da" },
	setCurrentColor: (currentColor) => set({ currentColor }),
	playlist: [],
	setPlaylist: (playlist) => set({ playlist }),
}));
