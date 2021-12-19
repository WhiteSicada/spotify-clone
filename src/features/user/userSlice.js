import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: null,
	playlists: [],
	spotify: null,
	discover_weekly: null,
	top_artists: null,
	playing: false,
	item: null,
	token: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.currentUser = action.payload;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setPlaylists: (state, action) => {
			state.playlists = action.payload;
		},
		setPlayling: (state, action) => {
			state.playing = action.payload;
		},
		setItem: (state, action) => {
			state.item = action.payload;
		},
		setDiscoverWeekly: (state, action) => {
			state.discover_weekly = action.payload;
		},
		setTopArtists: (state, action) => {
			state.top_artists = action.payload;
		},
		setSpotify: (state, action) => {
			state.spotify = action.payload;
		},
	},
});

export const {
	setUser,
	setToken,
	setPlaylists,
	setPlayling,
	setItem,
	setDiscoverWeekly,
	setTopArtists,
	setSpotify,
} = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;
export const selectToken = (state) => state.user.token;
export const selectPlaylists = (state) => state.user.playlists;
export const selectPlaying = (state) => state.user.playing;
export const selectItem = (state) => state.user.item;
export const selectDiscoverWeekly = (state) => state.user.discover_weekly;

export default userSlice.reducer;
