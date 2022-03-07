import React from "react";
import { HomeMenuProps } from "./HomeMenu.props";
import { Button, IconButton, Typography } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";

const HomeMenu = ({ account, BNB }: HomeMenuProps): JSX.Element => {
	return (
		<div className="home-menu">
			<div className="home-menu-item">
				<Typography variant="h6" component="h1" color="primary">
					Flappy Crypto
				</Typography>
			</div>
			<div className="home-menu-item">
				<Button variant="contained" color="success">
					{`BNB: $${BNB}`}
				</Button>
			</div>
			<div className="home-menu-item">
				<div className="row">
					<p className="account">{`${account.substring(
						0,
						5
					)}...${account.substring(38, 42)}`}</p>
					<IconButton
						color="primary"
						aria-label="add to shopping cart"
					>
						<LogoutOutlined />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default HomeMenu;
