import React from "react";
import "../css/Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { useSelector } from "react-redux";
import { selectPlaying, selectItem } from "../../features/user/userSlice";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";

function Footer({ spotify }) {
	const playing = useSelector(selectPlaying);
	const item = useSelector(selectItem);
	const skipPrevious = () => {};
	const skipNext = () => {};
	const handlePlayPause = () => {};
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="footer__albumLogo"
					src={item?.album.images[0].url}
					alt={item?.name}
				/>
				<div className="footer__songInfo">
					<h4>{!item ? "No song is playing" : item.name}</h4>
					<p>
						{!item
							? "..."
							: item.artists.map((artist) => artist.name).join(", ")}
					</p>
				</div>
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon onClick={skipNext} className="footer__icon" />
				{playing ? (
					<PauseCircleOutlineIcon
						onClick={handlePlayPause}
						fontSize="large"
						className="footer__icon"
					/>
				) : (
					<PlayCircleOutlineIcon
						onClick={handlePlayPause}
						fontSize="large"
						className="footer__icon"
					/>
				)}
				<SkipNextIcon onClick={skipPrevious} className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
