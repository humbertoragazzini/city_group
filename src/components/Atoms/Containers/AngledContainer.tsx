//@ts-nocheck
import { useState, useEffect } from "react";
import Themes from "../../../themes/Themes.tsx";

export default function AngledContainer({ children, themeName }: any) {
	const [theme, setTheme] = useState(Themes.deepBlack); // Default theme

	useEffect(() => {
		setTheme(Themes[themeName] || Themes.deepBlack);
	}, [themeName]);

	return (
		<div className="flex flex-col items-start justify-start px-10 py-12">
			<div className="flex items-center justify-center w-full p-10">
				<div className="relative w-full h-full">
					<div
						className={`absolute z-0 w-full h-full ${theme.bg} bg-opacity-55 skew-x-12`}
					></div>
					<div
						className={`relative ${theme.text} z-10 w-full h-full px-20 py-10`}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
