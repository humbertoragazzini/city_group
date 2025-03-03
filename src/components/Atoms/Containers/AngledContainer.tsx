//@ts-nocheck
import { useState, useEffect } from "react";
import Themes from "../../../themes/Themes.tsx";

export default function AngledContainer({ children, themeName }: any) {
	const [theme, setTheme] = useState(Themes.deepBlack); // Default theme

	useEffect(() => {
		setTheme(Themes[themeName] || Themes.deepBlack);
	}, [themeName]);

	return (
		<div className="flex flex-col items-start justify-start w-full px-10 py-12">
			<div className="flex items-center justify-center w-full p-10">
				<div className="relative w-full h-full">
					<div
						className={`absolute z-0 w-full h-full ${theme.bg} skew-y-6`}
					></div>
					<div
						className={`absolute bottom-0 left-0 z-0 w-[70px] h-[70px] ${theme.hover} -translate-x-1/2 translate-y-1/2`}
					></div>
					<div
						className={`absolute top-0 right-0 z-0 w-[70px] h-[70px] ${theme.bg} translate-x-1/2 -translate-y-1/2`}
					></div>
					<div
						className={`relative ${theme.text} z-10 w-full h-full px-10 py-20`}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
