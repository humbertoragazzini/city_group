import Themes from "../../../themes/Themes.tsx";
import ALink from "../Links/ALink";
import { useState, useEffect } from "react";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { FiArrowUpRight } from "react-icons/fi";
export default function IconButton({
	href,
	function: onClick,
	themeName,
	text,
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
						className={`${text} text-xl h-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full min-w-[150px] shadow-xl px-6 ${theme.text} ${theme.hover} ${theme.bg} m-2`}
					>
						<Paragraph type="body" className="font-semibold" text={text} />
						<FiArrowUpRight className="inline w-6 h-6 ml-3" />
					</button>
				</ALink>
			)}
			{href == null && (
				<button
					onClick={(e) => onClick()}
					className={`${text} text-xl h-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full min-w-[150px] shadow-xl px-6 ${theme.text} ${hover} ${bg} m-2`}
				>
					<Paragraph type="body" className="font-semibold" text={text} />
					<FiArrowUpRight className="inline w-6 h-6 ml-3" />
				</button>
			)}
		</>
	);
}
