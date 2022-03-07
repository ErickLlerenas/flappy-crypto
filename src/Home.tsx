import { useEffect, useState } from "react";
import "./Home.scss";
import { ethers } from "ethers";
import HomeMenu from "./components/HomeMenu/HomeMenu";
import { BUSDContractAddress } from "./constants";
import busd_abi from "./constants/busd_abi.json";

const Home = (): JSX.Element => {
	const [BUSD, setBUSD] = useState(0);
	const [account, setAccount] = useState("");

	useEffect(() => {
		connectMetamask();
	}, []);

	useEffect(() => {
		if (account.length > 0) getBalance();
	}, [account]);

	const connectMetamask = async () => {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const accounts = await provider.send("eth_requestAccounts", []);
			setAccount(accounts[0]);
		}
	};

	const getBalance = async () => {
		const provider = new ethers.providers.JsonRpcProvider(
			"https://bsc-dataseed.binance.org/",
			{ name: "binance", chainId: 56 }
		);
		const contract = new ethers.Contract(
			BUSDContractAddress,
			busd_abi,
			provider
		);
		const balance = await contract.balanceOf(account);

		const bnb = ethers.utils.formatEther(balance);
		setBUSD(parseFloat(parseFloat(bnb).toFixed(2)));
	};

	return (
		<main className="home-container">
			<HomeMenu BUSD={BUSD} account={account} />
		</main>
	);
};

export default Home;
