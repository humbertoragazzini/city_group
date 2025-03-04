//@ts-nocheck
import { useRef, useState, useEffect } from "react";
import Themes from "../../../themes/Themes.tsx";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
export default function ContainerWithImage({
	themeName,
	className,
	tilt,
}: any) {
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
		<div
			className={`flex max-w-[1280px] flex-col items-start justify-start w-full px-10 py-12 ${className}`}
		>
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
						className={`absolute z-0 w-full h-full ${theme.bg} ${
							tilt == undefined ? "skew-y-6" : "-skew-y-6"
						}`}
					></div>
					<div
						style={{
							transform: "translateZ(5px)",
							transformStyle: "preserve-3d",
						}}
						className={`absolute opacity-10 bottom-0 left-[-25px] z-0 w-[70px] h-[70px] bg-black`}
					></div>
					<div
						style={{
							transform: "translateZ(5px)",
							transformStyle: "preserve-3d",
						}}
						className={`absolute opacity-10 top-0 right-[-25px] z-0 w-[70px] h-[70px] bg-black translate-x-1/2 -translate-y-1/2`}
					></div>
					<div
						style={{
							transform: "translateZ(115px)",
							transformStyle: "preserve-3d",
						}}
						className={`absolute bottom-0 left-[-25px] z-0 w-[70px] h-[70px] ${theme.contrast}`}
					></div>
					<div
						style={{
							transform: "translateZ(115px)",
							transformStyle: "preserve-3d",
						}}
						className={`absolute top-0 right-[-25px] z-0 w-[70px] h-[70px] ${theme.contrast} translate-x-1/2 -translate-y-1/2`}
					></div>
					<div
						style={{
							transform: "translateZ(0px)",
							transformStyle: "preserve-3d",
						}}
						className={`realtive top-0 ${theme.text} z-10 w-full h-full px-10 py-20`}
					>
						<div
							style={{
								transform: "translateZ(0px)",
								transformStyle: "preserve-3d",
							}}
							className="grid grid-cols-2"
						>
							<div
								style={{
									transform: "translateZ(150px)",
									transformStyle: "preserve-3d",
								}}
								classNmae="col-span-1"
							>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</div>
							<div
								style={{
									transform: "translateZ(0px)",
									transformStyle: "preserve-3d",
								}}
								className="flex items-center justify-center aspect-square col-span-1"
							>
								<img
									style={{
										transform: "translateZ(50px)",
										transformStyle: "preserve-3d",
									}}
									className="w-2/3"
									src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gallet_clamshell_600x600_movement.jpg?20120102182331"
								></img>
								<img
									style={{
										transform: "translateZ(150px)",
										transformStyle: "preserve-3d",
									}}
									className="absolute top-0 right-0 w-1/2"
									src="https://www.makiramen.com/wp-content/uploads/2024/04/NICOLSON-ST--600x600.jpg"
								></img>
								<img
									style={{
										transform: "translateZ(200px)",
										transformStyle: "preserve-3d",
									}}
									className="absolute bottom-0 w-1/2 right-1/2"
									src="https://archive.starbucks.com/uploads/2018/12/50a-nodl-our-name-sbx20080316-7785-1528x1080.jpg"
								></img>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
