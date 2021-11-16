import React, { useEffect, useState } from "react";
import classes from "./MainHeader.Module.css";
const MainFooter = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		let timer = setInterval(() => setDate(new Date()), 1000);
		return function cleanUp() {
			clearInterval(timer);
		};
	});
	return (
		<footer className={classes.footer}>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<p>{date.toLocaleTimeString()}</p>,
				,<p>{date.toLocaleDateString()}</p>
			</div>
			<p style={{ marginLeft: "78%", display: "inline" }}>@Copyrights  Sudharshan KR</p>
		</footer>
	);
};
export default MainFooter;
