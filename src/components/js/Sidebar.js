import React from "react";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { selectPlaylists } from "../../features/user/userSlice";
import { useSelector } from "react-redux";
function Sidebar() {
	const playlists = useSelector(selectPlaylists);
	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
			/>
			<SidebarOption Icon={HomeIcon} option="Acceuil" />
			<SidebarOption Icon={SearchIcon} option="Rechercher" />
			<SidebarOption Icon={LibraryMusicIcon} option="Bibliothèque Library" />
			<br />
			<SidebarOption Icon={AddIcon} option="Créer une playlist" />
			<SidebarOption Icon={FavoriteIcon} option="Titres likés" />
			<hr />

			{playlists?.tracks?.items?.map((item,index) => (
				<SidebarOption key={index} option={item.track.name} />
			))}
		</div>
	);
}

export default Sidebar;
