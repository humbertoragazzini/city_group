export default function AngledContainer({ children }: any) {
	return (
		<div
			className="flex flex-col items-start justify-start px-4 py-4 bg-zinc-400"
			key="indexA"
		>
			<h1 className="text-xl">{type}</h1>{" "}
			{paragraphThemes.map(({ bg, text }, index) => (
				<div className="flex items-center justify-center w-full p-10">
					<div className="relative w-full h-full">
						<div className={`absolute z-0 w-full h-full ${bg} skew-x-12`}></div>
						<div className="relative z-10 w-full h-full px-20 py-10">
							<Paragraph
								type={type}
								key={index}
								className={`${text} z-0 transition-all duration-500 ${bg}`}
								text={[
									{
										language: "EN",
										content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
									},
									{
										language: "ES",
										content:
											"Titulo secundario de la pagina standfirst, al por Menor (Espaniol)",
									},
									{
										language: "CH",
										content: "进口、建筑和零售的综合解决方案 (Chino)",
									},
									{
										language: "IT",
										content:
											"Titulo secundario de la pagina standfirst, al Dettaglio (Italiano)",
									},
								]}
							></Paragraph>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
