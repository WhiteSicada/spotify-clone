import React from "react";
import "../css/Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";
import {
	selectDiscoverWeekly,
	setItem,
	setPlayling,
} from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Body({ spotify }) {
	const dispatch = useDispatch();
	const discover_weekly = useSelector(selectDiscoverWeekly);
	const playPlaylist = (id) => {
		spotify
			.play({
				context_uri: `spotify:playlist:4LGkDdb85mj9cjx01aIDw9`,
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch(setItem(r.item));
					dispatch(setPlayling(true));
				});
			});
	};

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch(setItem(r.item));
					dispatch(setPlayling(true));
				});
			});
	};
	return (
		<div className="body">
			<Header spotify={spotify} />

			<div className="body__info">
				<img src={discover_weekly?.images[0].url} alt="" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h3>Discover Weekly</h3>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon
						className="body__shuffle"
						onClick={playPlaylist}
					/>
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>

				{discover_weekly?.tracks.items.map((item,index) => (
					<SongRow key={index} playSong={playSong} track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
