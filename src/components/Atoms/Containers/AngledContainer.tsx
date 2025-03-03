//@ts-nocheck
import { useRef, useState, useEffect } from "react";
import Themes from "../../../themes/Themes.tsx";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
export default function AngledContainer({ children, themeName }: any) {
	const [theme, setTheme] = useState(Themes.deepBlack); // Default theme

	const ROTATION_RANGE = 32.5;
	const HALF_ROTATION_RANGE = 32.5 / 2;

	const ref = useRef(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const xSpring = useSpring(x);
	const ySpring = useSpring(y);

	const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

	const handleMouseMove = (e) => {
		if (!ref.current) return [0, 0];

		const rect = ref.current.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
		const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

		const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
		const rY = mouseX / width - HALF_ROTATION_RANGE;

		x.set(rX);
		y.set(rY);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	useEffect(() => {
		setTheme(Themes[themeName] || Themes.deepBlack);
	}, [themeName]);

	return (
		<div className="flex flex-col items-start justify-start w-full px-10 py-12">
			<motion.div
				ref={ref}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transformStyle: "preserve-3d",
					transform,
				}}
				className="flex items-center justify-center w-full p-10"
			>
				<div
					style={{
						transform: "translateZ(75px)",
						transformStyle: "preserve-3d",
					}}
					className="relative w-full h-full"
				>
					<div
						className={`absolute z-0 w-full h-full ${theme.bg} skew-y-6`}
					></div>
					<div
						style={{
							transform: "translateZ(75px)",
							transformStyle: "preserve-3d",
						}}
						className={`absolute bottom-0 left-[-25px] z-0 w-[70px] h-[70px] ${theme.contrast}`}
					></div>
					<div
						style={{
							transform: "translateZ(75px)",
							transformStyle: "preserve-3d",
						}}
						className={`absolute top-0 right-[-25px] z-0 w-[70px] h-[70px] ${theme.contrast} translate-x-1/2 -translate-y-1/2`}
					></div>
					<div
						style={{
							transform: "translateZ(75px)",
							transformStyle: "preserve-3d",
						}}
						className={`relative ${theme.text} z-10 w-full h-full px-10 py-20`}
					>
						{children}
					</div>
				</div>
			</motion.div>
		</div>
	);
}
