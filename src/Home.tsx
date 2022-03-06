import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Button, IconButton, Typography } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { ethers } from "ethers";

const Home = (): JSX.Element => {
	const [USD, setUSD] = useState(0);
	const [account, setAccount] = useState(
		"0x01dccEaa6f1bec7634755343c28f0bF7fA9f1cCB"
	);

	const handleClick = () => {
		alert("Deposit");
	};

	const logOut = () => {
		alert("Logged out");
	};

	useEffect(() => {
		// if(window.ethereum){
		// 	const provider = new ethers.providers.Web3Provider(window.ethereum)
		// }
	});
	return (
		<main className="home-container">
			<div className="home-menu">
				<div className="home-menu-item">
					<Typography variant="h4" component="h1">
						Flappy Crypto
					</Typography>
				</div>
				<div className="home-menu-item">
					<Button variant="contained" color="success">
						{`USD: $${USD}`}
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
		</main>
	);
};

export default Home;
