"use client";
import styles from './styles.module.scss'
import Sections from '@/app/components/organism/sections/sections';
import EndSections from '@/app/components/organism/endSections/EndSections'
const sectionIS = true
export default function OurServices() {

  return (
    <>
      <Sections 
      isFirst={true}
      titleFirst='Steel'
      titleSecond='Framing'
      backgroundURL='url(./steel-framing-background.webp)'
      left={true}
      ></Sections>

      <EndSections></EndSections>
      
      <Sections 
      isFirst={false}
      titleFirst='Electricidad'
      titleSecond=''
      backgroundURL='url(./electricity-background.webp)'
      left={false}
      ></Sections>
      <Sections 
      isFirst={false}
      titleFirst='Refrigeracion'
      titleSecond=''
      backgroundURL='url(./refrigeration-background.webp)'
      left={true}
      ></Sections>
      <Sections 
      isFirst={false}
      titleFirst='Sistemas'
      titleSecond='de Agua'
      backgroundURL='url(./water-pipes-background.webp)'
      left={false}
      ></Sections>
    </>
  )
}


            // <div className='w-full relative'>
            //   <div className="grid grid-cols-2 gap-4 w-full">
            //     <div className='col-span-2'>
            //       <h3 className={'text-white steelQuestions bottom-0 first ' + styles.header3}>
            //         <span className='block mb-5'>Que es Steel Framing?</span>
            //       </h3>        
            //     </div>  
            //   </div>
            //   <div className="grid grid-cols-4 gap-4 w-full">
            //     <div className={'col-span-4 md:col-span-2 '}>
            //       <div className={'w-full mb-4 relative'}>
            //         <p className={'text-white text-xl steelQuestions bottom-0 pb-4 second '+styles.header5}>
            //           Construccion con perfiles de acero galvanizado
            //         </p>
            //         <p className='text-white text-xl steelQuestions bottom-0 pb-4 second'>
            //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum eum in nulla aperiam officiis illo veritatis aut consectetur placeat, repellendus autem suscipit temporibus perspiciatis voluptas debitis nesciunt? Tempora, excepturi.
            //         </p> 
            //         <Image
            //           className='w-full rounded-2xl steelQuestions second mb-4'
            //           src="/barGraph.svg"
            //           width={250}
            //           height={250}
            //           alt="Picture of the author"
            //         ></Image>
            //       </div>  
            //       <div className={'w-full mb-4 relative'}>
            //         <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header5}>
            //           Por que usar Steel Framing contra la construccion clasica
            //         </p>  
            //         <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
            //           Usar el sistema de construcción conocido como "steel framing" en lugar de la construcción tradicional con muros de carga de ladrillo o concreto ofrece una serie de ventajas
            //         </p>  
            //       </div>
            //       <div className={'w-full mb-4 relative'}>
            //         <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header5}>
            //           Ventajas del Steel Framing
            //         </p>  
            //         <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
            //           Menos Mantenimiento
            //         </p>  
            //         <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
            //           Los edificios construidos con steel framing requieren menos mantenimiento a lo largo del tiempo debido a la durabilidad y resistencia del material.
            //         </p> 
            //         <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
            //           Eficiencia Energética
            //         </p>  
            //         <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
            //           El steel framing facilita la instalación de aislamiento de alta calidad. Esto puede resultar en un mayor rendimiento energético y en menores costos de calefacción y refrigeración a lo largo del tiempo.
            //         </p> 
            //         <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
            //           Menor Peso Estructural
            //         </p>  
            //         <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
            //           El acero es considerablemente más liviano que el concreto o el ladrillo, lo que puede reducir la carga total en los cimientos y la estructura en general. Esto puede ser particularmente beneficioso en suelos con capacidades de carga limitadas.
            //         </p> 
            //         <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
            //           Mayor Eficiencia 
            //         </p>  
            //         <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
            //           Los componentes prefabricados se ensamblan rápidamente, lo que acelera el proceso de construcción y reduce los costos asociados con la mano de obra.
            //         </p> 
            //         <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
            //           Amplia flexibilidad
            //         </p>  
            //         <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
            //           El steel framing es un método de construcción que se adapta a una amplia variedad de proyectos, desde viviendas unifamiliares hasta construcciones de gran escala. Este sistema tiene la capacidad de amoldarse a cualquier estilo arquitectónico y posibilita formatos realmente innovadores1. Además, el steel framing facilita las reformas o refacciones posteriores en las viviendas
            //         </p> 
            //         <p className={'text-white text-xl steelQuestions bottom-0 pt-9 pb-4 second '+styles.header6}>
            //           Duracion del steel framing
            //         </p>  
            //         <p className='text-white text-md steelQuestions bottom-0 pb-4 second'>
            //           Los perfiles de acero galvanizado representan una inversión segura para cualquier proyecto de construcción que requiera durabilidad, resistencia y confiabilidad a largo plazo. Su capacidad para resistir la corrosión, el clima adverso y las cargas sustanciales asegura que mantengan su integridad estructural y estética durante décadas, convirtiéndolos en una elección inteligente y sostenible para profesionales de la construcción y diseñadores de proyectos a nivel mundial.
            //         </p>  
            //       </div>
                  
            //     </div>  
            //     <div className='hidden md:block md:col-span-2 pb-10 imagesContainers'>
            //       <div className={'rounded-2xl mb-4 absolute top-12 left-12 overflow-hidden firstImage '+styles.image_component}>
            //         <Image
            //           src="/pexels-binyamin-mellish-186077.jpg"
            //           width={250}
            //           height={250}
            //           alt="Picture of the author"
            //         ></Image>
            //       </div>
            //       <div className={'rounded-2xl mb-4 absolute top-6 left-6 overflow-hidden secondImage '+styles.image_component}>
            //         <Image
            //           src="/house-1477041_1920.jpg"
            //           width={250}
            //           height={250}
            //           alt="Picture of the author"
            //         ></Image>
            //       </div>
            //       <div className={'rounded-2xl mb-4 absolute top-0 left-0 overflow-hidden thirdImage '+styles.image_component}>
            //         <Image
            //           src="/hp-tiranteria-perfil-c-galvanizado.jpg"
            //           width={250}
            //           height={250}
            //           alt="Picture of the author"
            //         ></Image>
            //       </div>

            //     </div> 
            //   </div>
            // </div>