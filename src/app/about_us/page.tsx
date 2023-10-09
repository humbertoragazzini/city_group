"use client";
import styles from './styles.module.scss'
import Image from 'next/image';
import Sections from '@/app/components/organism/sections/sections';
import EndSections from '@/app/components/organism/endSections/EndSections'
import StartSection from '@/app/components/organism/startSection/StartSection'
const sectionIS = true
export default function About_us() {


  return (
    <>
      <div className={'min-h-screen bg-white '+styles.main}>
        <div className={'flex flex-col justify-center items-center min-w-screen overflow-visible '+styles.about_us_header}>
          <h1 className='text-white text-5xl  font-bold'>Acerca de nosotros</h1>
          {/* <Image
            className='relative rounded-full top-0'
            src="/steelframing.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          ></Image> */}
        </div>
        <div className='w-1/2 mx-auto p-9'>
          <p className="text-white">
            Bienvenidos a [Nombre de tu Empresa], tu socio confiable en soluciones integrales de Steel Framing, Electricidad y Refrigeración. Desde nuestros modestos comienzos hace ocho años, hemos estado comprometidos con la excelencia y la satisfacción del cliente.
          </p>
          
          <h2 className="text-white text-2xl font-bold">
            Nuestra Trayectoria
          </h2>
          <p className="text-white">
            Fundada en [Año de Fundación], [Nombre de tu Empresa] ha sido un pionero en la industria de construcción y servicios de instalaciones. Desde entonces, hemos venido construyendo un legado de confianza y profesionalismo que nos ha permitido crecer y expandirnos.
          </p>

          <h2 className="text-white text-2xl font-bold">
            Nuestros Pilares
          </h2>
          <p className="text-white">
            En [Nombre de tu Empresa], entendemos la importancia de ofrecer servicios de alta calidad. Nos enorgullecemos de nuestra dedicación a los más altos estándares en cada proyecto que emprendemos. La calidad del servicio es la piedra angular de nuestra filosofía empresarial.
          </p>

          <h2 className="text-white text-2xl font-bold">
            Confianza y Transparencia
          </h2>
          <p className="text-white">
            La confianza es un valor incalculable en cualquier relación comercial. En [Nombre de tu Empresa], trabajamos incansablemente para ganar y mantener la confianza de nuestros clientes. Nuestro compromiso con la transparencia en cada paso del proceso nos distingue y nos ayuda a construir relaciones duraderas.
          </p>

          <h2 className="text-white text-2xl font-bold">
            Eficiencia y Velocidad
          </h2>
          <p className="text-white">
            Entendemos la importancia de la eficiencia en el mundo actual. Nuestro equipo altamente capacitado y experimentado se esfuerza por completar cada proyecto de manera oportuna, sin comprometer la calidad del trabajo. La rapidez no es solo un objetivo, es nuestra promesa.
          </p>

          <h2 className="text-white text-2xl font-bold">
            Profesionalismo en Todo Momento
          </h2>
          <p className="text-white">
            En [Nombre de tu Empresa], nos enorgullecemos de contar con un equipo de profesionales altamente capacitados y apasionados por lo que hacen. Cada miembro de nuestro equipo aporta un nivel inigualable de experiencia y dedicación a cada proyecto. Esto garantiza que cada trabajo se realice con el más alto nivel de profesionalismo.
          </p>

          <h2 className="text-white text-2xl font-bold">
            Nuestra Misión
          </h2>
          <p className="text-white">
            Nuestra misión es ser líderes en la industria de Steel Framing, Electricidad y Refrigeración, brindando soluciones de alta calidad que superen las expectativas de nuestros clientes. Nos esforzamos por innovar y adaptarnos a las últimas tendencias y tecnologías, garantizando así un servicio excepcional.
          </p>

          <h2 className="text-white text-2xl font-bold">
            Contáctanos
          </h2>
          <p className="text-white">
            Estamos ansiosos por trabajar contigo y ayudarte a hacer realidad tus proyectos de construcción y servicios de instalaciones. ¡No dudes en contactarnos para discutir cómo podemos hacer que tus ideas cobren vida!
          </p>
        </div>
      </div>      
    </>
  )
}