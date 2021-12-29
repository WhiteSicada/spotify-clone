import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { selectUser } from "../../features/user/userSlice";
import { useSelector } from "react-redux";
import "../css/Header.css";

function Header() {
	const user = useSelector(selectUser);
	return (
		<div className="header">
			<div className="header__left">
				<SearchIcon />
				<input
					placeholder="Search for Artists, Songs, or Podcasts "
					type="text"
					className="search__input"
				/>
			</div>
			<div className="header__right">
				<Avatar alt={user?.display_name} src={user?.images[0].url} />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
}

export default Header;
