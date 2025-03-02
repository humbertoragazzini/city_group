import Themes from "../../../themes/Themes.tsx";
import ALink from "../Links/ALink";

export default function TextButton({
	href,
	function: onClick,
	theme,
	children,
}) {
	return (
		<>
			{href !== null && (
				<ALink href={href}>
					<button
						className={`${text} text-xl h-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full min-w-[150px] shadow-xl px-6 ${hover} ${bg} m-2`}
					>
						{children}
					</button>
				</ALink>
			)}
			{href == null && (
				<button
					onClick={(e) => onClick()}
					className={`${text} text-xl h-[70px] z-0 transition-all duration-500 flex justify-center items-center rounded-full min-w-[150px] shadow-xl px-6 ${hover} ${bg} m-2`}
				>
					{children}
				</button>
			)}
		</>
	);
}
