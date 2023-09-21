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
      backgroundURL='url(./steel-framing-background.webp)'
      ></Sections>
      <Sections 
      isFirst={false}
      titleFirst='Electricidad'
      titleSecond=''
      backgroundURL='url(./electricity-background.webp)'
      ></Sections>
      <Sections 
      isFirst={false}
      titleFirst='Refrigeracion'
      titleSecond=''
      backgroundURL='url(./refrigeration-background.webp)'
      ></Sections>
      <Sections 
      isFirst={false}
      titleFirst='Sistemas'
      titleSecond='de Agua'
      backgroundURL='url(./water-pipes-background.webp)'
      ></Sections>
    </>
  )
}