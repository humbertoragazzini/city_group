//@ts-nocheck
import Themes from "../../../themes/Themes.tsx";
import ALink from "../Links/ALink";
import { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
export default function IconButton({
	href,
	function: onClick,
	themeName,
	children,
}) {
	const [theme, setTheme] = useState(Themes.deepBlack); // Default theme

	useEffect(() => {
		setTheme(Themes[themeName] || Themes.deepBlack);
	}, [themeName]);

	return (
		<>
			{href !== null && (
				<ALink href={href}>
					<button
						className={` text-xl h-[70px] w-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full shadow-xl ${theme.text} ${theme.hover} ${theme.bg} m-2`}
					>
						<FiArrowUpRight className="inline w-6 h-6" />
					</button>
				</ALink>
			)}
			{href == null && (
				<button
					onClick={(e) => onClick()}
					className={` text-xl h-[70px] w-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full shadow-xl ${theme.text} ${theme.hover} ${theme.bg} m-2`}
				>
					<FiArrowUpRight className="inline w-6 h-6" />
				</button>
			)}
		</>
	);
}
