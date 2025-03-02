import { useState, useEffect } from "react";

const themes = {
	deepBlack: { bg: "bg-deepBlack", text: "text-yellowBright" },
	plum: { bg: "bg-plum", text: "text-white" },
	burgundy: { bg: "bg-burgundy", text: "text-white" },
	white: { bg: "bg-white", text: "text-black" },
	lime: { bg: "bg-lime", text: "text-black" },
	yellowBright: { bg: "bg-yellowBright", text: "text-black" },
	graphite: { bg: "bg-graphite", text: "text-white" },
	black: { bg: "bg-black", text: "text-white" },
	rose: { bg: "bg-rose", text: "text-white" },
};

export default function AngledContainer({ children, themeName }: any) {
	const [theme, setTheme] = useState(themes.deepBlack); // Default theme

	useEffect(() => {
		setTheme(themes[themeName] || themes.deepBlack);
	}, [themeName]);

	return (
		<div className="flex flex-col items-start justify-start px-4 py-4 bg-zinc-400">
			<div className="flex items-center justify-center w-full p-10">
				<div className="relative w-full h-full">
					<div
						className={`absolute z-0 w-full h-full ${theme.bg} ${theme.text} skew-x-12`}
					></div>
					<div className="relative z-10 w-full h-full px-20 py-10">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
