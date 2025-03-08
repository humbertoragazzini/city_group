//@ts-nocheck
import { useRef, useState, useEffect } from "react";
import Themes from "../../../themes/Themes.tsx";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
import Heading from "../../Atoms/Heading/Heading";

export default function ContainerWithImage({
	themeName,
	children,
	className,
	imageOne,
	imageTwo,
	imageThree,
	tilt,
}: any) {
	const [theme, setTheme] = useState(Themes.deepBlack); // Default theme

	const ROTATION_RANGE = 10.5;
	const HALF_ROTATION_RANGE = 10.5 / 2;

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
		<div
			className={`flex max-w-[1280px] flex-col items-start justify-start w-full ${className}`}
		>
			<motion.div
				ref={ref}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transformStyle: "preserve-3d",
					transform,
				}}
				className="flex items-center justify-center w-full"
			>
				<div
					style={{
						transform: "translateZ(75px)",
						transformStyle: "preserve-3d",
					}}
					className="relative w-full h-full"
				>
					<div
						className={`absolute z-0 w-full h-full ${theme.bg} ${
							tilt == undefined ? "skew-y-6" : "-skew-y-6"
						}`}
					></div>
					<div
						style={{
							transform: "translateZ(115px)",
							transformStyle: "preserve-3d",
						}}
						className={`absolute bottom-0 ${
							tilt
								? "right-[15px] xl:right-[-25px]"
								: "left-[-15px] xl:left-[-25px]"
						} ${theme.contrast} w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]`}
					></div>
					<div
						style={{
							transform: "translateZ(115px)",
							transformStyle: "preserve-3d",
						}}
						className={`absolute hidden md:block ${
							tilt
								? "left-[-15px] xl:left-[-25px]"
								: "right-[-15px] xl:right-[-25px]"
						} ${theme.contrast} w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]`}
					></div>
					<div
						style={{
							transform: "translateZ(0px)",
							transformStyle: "preserve-3d",
						}}
						className={`realtive top-0 ${theme.text} z-10 w-full h-full p-5 md:px-10 md:py-20`}
					>
						<div
							style={{
								transform: "translateZ(0px)",
								transformStyle: "preserve-3d",
							}}
							className="grid grid-cols-1 lg:grid-cols-2"
						>
							<div
								style={{
									transform: "translateZ(150px)",
									transformStyle: "preserve-3d",
								}}
								className={`mb-5 col-span-1 lg:mb-auto ${
									tilt ? "order-2 !text-right" : "order-1"
								}`}
							>
								{children}
							</div>
							<div
								style={{
									transform: "translateZ(0px)",
									transformStyle: "preserve-3d",
								}}
								className={`flex items-center justify-center aspect-square col-span-1 ${
									tilt ? "order-1" : "order-2"
								}`}
							>
								<img
									style={{
										transform: "translateZ(50px)",
										transformStyle: "preserve-3d",
									}}
									className="w-2/3"
									src={imageOne}
								></img>
								<img
									style={{
										transform: "translateZ(150px)",
										transformStyle: "preserve-3d",
									}}
									className="absolute top-0 right-0 w-1/2"
									src={imageTwo}
								></img>
								<img
									style={{
										transform: "translateZ(200px)",
										transformStyle: "preserve-3d",
									}}
									className="absolute bottom-0 w-1/2 right-1/2"
									src={imageThree}
								></img>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
