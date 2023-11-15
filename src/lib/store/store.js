import { create } from "zustand";

export const playlistStore = create((set) => ({
	currentColor: null,
	setCurrentColor: (currentColor) => set({ currentColor }),
	playlist: [],
	setPlaylist: (playlist) => set({ playlist }),
}));
