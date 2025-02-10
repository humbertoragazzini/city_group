// @ts-nocheck
import Heading from "@/components/Atoms/Heading/Heading";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MainHeader() {
	const pathname = usePathname();
	const homeRef = useRef();
	const aboutUsRef = useRef();
	const ourServicesRef = useRef();
	const contactUsRef = useRef();
	useEffect(() => {
		switch (pathname) {
			case "/":
				gsap.to(homeRef.current, { opacity: 1, duration: 1 });
				gsap.to(aboutUsRef.current, {
					opacity: 0,
					duration: 1,
					onComplete: () => {
						gsap.set(aboutUsRef.current, { display: "none" });
					},
				});
				gsap.to(ourServicesRef.current, {
					opacity: 0,
					duration: 1,
					onComplete: () => {
						gsap.set(ourServicesRef.current, { display: "none" });
					},
				});
				gsap.to(contacUsRef.current, {
					opacity: 0,
					duration: 1,
					onComplete: () => {
						gsap.set(contactUsRef.current, { display: "none" });
					},
				});
				break;
			case "/AboutUs":
				break;
			case "/OurServices":
				break;
			case "/ContactUs":
				break;
			default:
				break;
		}
	}, [pathname]);

	return (
		<div className="relative w-full h-full">
			<div className="absolute" ref={homeRef}>
				<p className="text-3xl">Home</p>
				<Heading
					className="mb-4"
					text={[
						{
							language: "EN",
							content: "Elevating Excellence Across Industries",
						},
						{
							language: "ES",
							content: "Elevando la Excelencia en Todas las Industrias",
						},
						{
							language: "CH",
							content: "提升各行业的卓越水平",
						},
						{
							language: "IT",
							content: "Elevare l'Eccellenza in Tutti i Settori",
						},
					]}
					level={1}
				></Heading>

				<Paragraph
					type={"standfirst3"}
					className="mb-4"
					text={[
						{
							language: "EN",
							content:
								"Comprehensive Solutions in Imports, Construction, and Retail",
						},
						{
							language: "ES",
							content:
								"Soluciones Integrales en Importaciones, Construcción y Venta al por Menor",
						},
						{
							language: "CH",
							content: "进口、建筑和零售的综合解决方案",
						},
						{
							language: "IT",
							content:
								"Soluzioni Complete per Importazioni, Costruzioni e Vendita al Dettaglio",
						},
					]}
				></Paragraph>

				<Paragraph
					type={"standfirst"}
					text={[
						{
							language: "EN",
							content:
								"At PrimalPort, we harmonize the art of innovation with the science of expertise to offer transcendent services in Imports, Construction, and Retail. Explore how our holistic approach and unwavering dedication to quality foster success and transformation across a myriad of sectors.",
						},
						{
							language: "ES",
							content:
								"En PrimalPort, armonizamos el arte de la innovación con la ciencia de la experiencia para ofrecer servicios trascendentes en Importaciones, Construcción y Venta al por Menor. Descubre cómo nuestro enfoque holístico y nuestra dedicación inquebrantable a la calidad fomentan el éxito y la transformación en una multitud de sectores.",
						},
						{
							language: "CH",
							content:
								"在PrimalPort，我们将创新的艺术与专业的科学相结合，提供卓越的进口、建筑和零售服务。探索我们全方位的方法和对质量的坚定承诺如何促进各个领域的成功与转型。",
						},
						{
							language: "IT",
							content:
								"In PrimalPort, armonizziamo l'arte dell'innovazione con la scienza dell'esperienza per offrire servizi trascendenti in Importazioni, Costruzioni e Vendita al Dettaglio. Scopri come il nostro approccio olistico e la nostra dedizione incrollabile alla qualità favoriscono il successo e la trasformazione in una moltitudine di settori.",
						},
					]}
				></Paragraph>
			</div>
			<div className="absolute" ref={aboutUsRef}>
				<p className="text-3xl">AboutUs</p>
				<Heading
					className="mb-4"
					text={[
						{
							language: "EN",
							content: "Elevating Excellence Across Industries",
						},
						{
							language: "ES",
							content: "Elevando la Excelencia en Todas las Industrias",
						},
						{
							language: "CH",
							content: "提升各行业的卓越水平",
						},
						{
							language: "IT",
							content: "Elevare l'Eccellenza in Tutti i Settori",
						},
					]}
					level={1}
				></Heading>
				<Paragraph
					type={"standfirst3"}
					className="mb-4"
					text={[
						{
							language: "EN",
							content:
								"Comprehensive Solutions in Imports, Construction, and Retail",
						},
						{
							language: "ES",
							content:
								"Soluciones Integrales en Importaciones, Construcción y Venta al por Menor",
						},
						{
							language: "CH",
							content: "进口、建筑和零售的综合解决方案",
						},
						{
							language: "IT",
							content:
								"Soluzioni Complete per Importazioni, Costruzioni e Vendita al Dettaglio",
						},
					]}
				></Paragraph>
				<Paragraph
					type={"standfirst"}
					text={[
						{
							language: "EN",
							content:
								"At PrimalPort, we harmonize the art of innovation with the science of expertise to offer transcendent services in Imports, Construction, and Retail. Explore how our holistic approach and unwavering dedication to quality foster success and transformation across a myriad of sectors.",
						},
						{
							language: "ES",
							content:
								"En PrimalPort, armonizamos el arte de la innovación con la ciencia de la experiencia para ofrecer servicios trascendentes en Importaciones, Construcción y Venta al por Menor. Descubre cómo nuestro enfoque holístico y nuestra dedicación inquebrantable a la calidad fomentan el éxito y la transformación en una multitud de sectores.",
						},
						{
							language: "CH",
							content:
								"在PrimalPort，我们将创新的艺术与专业的科学相结合，提供卓越的进口、建筑和零售服务。探索我们全方位的方法和对质量的坚定承诺如何促进各个领域的成功与转型。",
						},
						{
							language: "IT",
							content:
								"In PrimalPort, armonizziamo l'arte dell'innovazione con la scienza dell'esperienza per offrire servizi trascendenti in Importazioni, Costruzioni e Vendita al Dettaglio. Scopri come il nostro approccio olistico e la nostra dedizione incrollabile alla qualità favoriscono il successo e la trasformazione in una moltitudine di settori.",
						},
					]}
				></Paragraph>
			</div>
			<div className="absolute" ref={ourServicesRef}>
				<p className="text-2xl">OurServices</p>
				<Heading
					className="mb-4"
					text={[
						{
							language: "EN",
							content: "Elevating Excellence Across Industries",
						},
						{
							language: "ES",
							content: "Elevando la Excelencia en Todas las Industrias",
						},
						{
							language: "CH",
							content: "提升各行业的卓越水平",
						},
						{
							language: "IT",
							content: "Elevare l'Eccellenza in Tutti i Settori",
						},
					]}
					level={1}
				></Heading>
				<Paragraph
					type={"standfirst3"}
					className="mb-4"
					text={[
						{
							language: "EN",
							content:
								"Comprehensive Solutions in Imports, Construction, and Retail",
						},
						{
							language: "ES",
							content:
								"Soluciones Integrales en Importaciones, Construcción y Venta al por Menor",
						},
						{
							language: "CH",
							content: "进口、建筑和零售的综合解决方案",
						},
						{
							language: "IT",
							content:
								"Soluzioni Complete per Importazioni, Costruzioni e Vendita al Dettaglio",
						},
					]}
				></Paragraph>
				<Paragraph
					type={"standfirst"}
					text={[
						{
							language: "EN",
							content:
								"At PrimalPort, we harmonize the art of innovation with the science of expertise to offer transcendent services in Imports, Construction, and Retail. Explore how our holistic approach and unwavering dedication to quality foster success and transformation across a myriad of sectors.",
						},
						{
							language: "ES",
							content:
								"En PrimalPort, armonizamos el arte de la innovación con la ciencia de la experiencia para ofrecer servicios trascendentes en Importaciones, Construcción y Venta al por Menor. Descubre cómo nuestro enfoque holístico y nuestra dedicación inquebrantable a la calidad fomentan el éxito y la transformación en una multitud de sectores.",
						},
						{
							language: "CH",
							content:
								"在PrimalPort，我们将创新的艺术与专业的科学相结合，提供卓越的进口、建筑和零售服务。探索我们全方位的方法和对质量的坚定承诺如何促进各个领域的成功与转型。",
						},
						{
							language: "IT",
							content:
								"In PrimalPort, armonizziamo l'arte dell'innovazione con la scienza dell'esperienza per offrire servizi trascendenti in Importazioni, Costruzioni e Vendita al Dettaglio. Scopri come il nostro approccio olistico e la nostra dedizione incrollabile alla qualità favoriscono il successo e la trasformazione in una moltitudine di settori.",
						},
					]}
				></Paragraph>
			</div>
			<div className="absolute" ref={contactUsRef}>
				<p className="text-2xl">ContactUs</p>
				<Heading
					className="mb-4"
					text={[
						{
							language: "EN",
							content: "Elevating Excellence Across Industries",
						},
						{
							language: "ES",
							content: "Elevando la Excelencia en Todas las Industrias",
						},
						{
							language: "CH",
							content: "提升各行业的卓越水平",
						},
						{
							language: "IT",
							content: "Elevare l'Eccellenza in Tutti i Settori",
						},
					]}
					level={1}
				></Heading>
				<Paragraph
					type={"standfirst3"}
					className="mb-4"
					text={[
						{
							language: "EN",
							content:
								"Comprehensive Solutions in Imports, Construction, and Retail",
						},
						{
							language: "ES",
							content:
								"Soluciones Integrales en Importaciones, Construcción y Venta al por Menor",
						},
						{
							language: "CH",
							content: "进口、建筑和零售的综合解决方案",
						},
						{
							language: "IT",
							content:
								"Soluzioni Complete per Importazioni, Costruzioni e Vendita al Dettaglio",
						},
					]}
				></Paragraph>
				<Paragraph
					type={"standfirst"}
					text={[
						{
							language: "EN",
							content:
								"At PrimalPort, we harmonize the art of innovation with the science of expertise to offer transcendent services in Imports, Construction, and Retail. Explore how our holistic approach and unwavering dedication to quality foster success and transformation across a myriad of sectors.",
						},
						{
							language: "ES",
							content:
								"En PrimalPort, armonizamos el arte de la innovación con la ciencia de la experiencia para ofrecer servicios trascendentes en Importaciones, Construcción y Venta al por Menor. Descubre cómo nuestro enfoque holístico y nuestra dedicación inquebrantable a la calidad fomentan el éxito y la transformación en una multitud de sectores.",
						},
						{
							language: "CH",
							content:
								"在PrimalPort，我们将创新的艺术与专业的科学相结合，提供卓越的进口、建筑和零售服务。探索我们全方位的方法和对质量的坚定承诺如何促进各个领域的成功与转型。",
						},
						{
							language: "IT",
							content:
								"In PrimalPort, armonizziamo l'arte dell'innovazione con la scienza dell'esperienza per offrire servizi trascendenti in Importazioni, Costruzioni e Vendita al Dettaglio. Scopri come il nostro approccio olistico e la nostra dedizione incrollabile alla qualità favoriscono il successo e la trasformazione in una moltitudine di settori.",
						},
					]}
				></Paragraph>
			</div>
		</div>
	);
}
