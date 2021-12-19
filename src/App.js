import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/js/Login";
import { getTokenFromResponse } from "./components/js/Spotify";
import Player from "./components/js/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch, useSelector } from "react-redux";
import {
	setUser,
	setToken,
	selectToken,
	setPlaylists,
	setDiscoverWeekly,
	setTopArtists,
	setSpotify,
} from "./features/user/userSlice";

const s = new SpotifyWebApi();

function App() {
	const dispatch = useDispatch();

	const token = useSelector(selectToken);
	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			s.setAccessToken(_token);
			dispatch(setToken(_token));
			s.getPlaylist("4LGkDdb85mj9cjx01aIDw9").then((response) => {
				dispatch(setDiscoverWeekly(response));
				dispatch(setPlaylists(response));
			});
			s.getArtists(["2hazSY4Ef3aB9ATXW7F5w3", "6J6yx1t3nwIDyPXk5xa7O8"]).then(
				(response) => dispatch(setTopArtists(response))
			);

			s.getMe().then((user) => {
				dispatch(setUser(user));
			});
		}
		// console.log("i have token : " + JSON.stringify(_token));
	}, [token, dispatch]);

	return (
		<div className="App">
			{!token && <Login />}
			{token && <Player spotify={s} />}
		</div>
	);
}

export default App;
