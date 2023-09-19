"use client";
import styles from './styles.module.scss'
import Sections from '@/app/components/organism/sections/sections';

const sectionIS = true
export default function OurServices() {

  return (
    <>
      <Sections 
      isFirst={true}
      titleFirst='Steel'
      titleSecond='Framing'
      backgroundURL='url(./warehouse-5635000.jpg)'
      ></Sections>
      <Sections 
      isFirst={false}
      titleFirst='Electricidad'
      titleSecond=''
      backgroundURL='url(./bright-1851267.jpg)'
      ></Sections>
      <Sections 
      isFirst={false}
      titleFirst='Refrigeracion'
      titleSecond=''
      backgroundURL='url(./pipes-4161383.jpg)'
      ></Sections>
      <Sections 
      isFirst={false}
      titleFirst='Sistemas'
      titleSecond='de Agua'
      backgroundURL='url(./drop-of-water-578897.jpg)'
      ></Sections>
    </>
  )
}