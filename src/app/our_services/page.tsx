"use client";
import styles from './styles.module.scss'
import Sections from '@/app/components/organism/sections/sections';
import EndSections from '@/app/components/organism/endSections/EndSections'
const sectionIS = true
export default function OurServices() {

  const maintenance =  <svg className='inline mb-5 svg_border' style={{width:"100px",height:"100px"}}  viewBox="0 0 91 91" enableBackground="new 0 0 91 91" id="Layer_1" version="1.1">
                                      <g>
                                      <g>
                                      <path d="M38.841,55.666l0.682-0.676l-0.02-0.016c-0.881-0.891,4.984-6.855,4.984-6.855l-8.119-8.118L8.663,66.904    c-1.973,1.977-2.92,4.705-2.658,7.686c0.242,2.793,1.533,5.49,3.813,7.771c2.43,2.424,5.553,3.66,8.533,3.66    c2.521,0,4.938-0.889,6.746-2.691l20.258-20.26l-5.111-5.17C39.604,57.252,39.151,56.488,38.841,55.666" fill="#fff"/>
                                      <path d="M87.675,16.767l-1.621-3.891L75.616,23.317c-1.777,1.777-3.336,2.678-4.635,2.678    c-0.992,0-2.006-0.537-3.146-1.674l-0.188-0.184c-1.701-1.701-3.016-3.695,1.037-7.75L79.13,5.942l-3.893-1.621    C67.31,1.019,59.005-1.073,51.952,5.985l-6.457,6.451c-6.553,6.561-8.811,14.01-6.699,21.397l6.51,6.646l5.088-5.088    c0,0,3.248,1.688,5.568,3.182l13.875,14.061c3.398-1.033,6.664-3.059,9.732-6.129l6.441-6.452    C93.073,33.001,90.985,24.692,87.675,16.767" fill="#fff"/>
                                      <path d="M80.097,69.682L54.472,43.714c-0.84-0.855-1.898-1.527-3.148-1.996l-1.51-0.568l-4.578,4.58L21.023,21.518    l2.235-2.237c0.602-0.6,0.9-1.439,0.813-2.283c-0.086-0.846-0.547-1.607-1.258-2.074L9.72,6.321    C8.601,5.587,7.118,5.739,6.169,6.687l-4.482,4.49c-0.945,0.947-1.096,2.428-0.361,3.545l8.6,13.094    c0.465,0.711,1.227,1.174,2.072,1.26c0.096,0.01,0.191,0.014,0.287,0.014c0.746,0,1.465-0.295,1.998-0.826l2.02-2.021    l24.211,24.211l-4.588,4.59l0.572,1.512c0.459,1.207,1.119,2.25,1.965,3.105l25.645,25.984c1.688,1.688,4.006,2.617,6.527,2.617    h0.002c2.994,0,6.018-1.309,8.334-3.627l0.133-0.139c2.057-2.051,3.318-4.678,3.553-7.396    C82.907,74.219,81.993,71.582,80.097,69.682z M75.522,80.99l-0.137,0.145c-1.344,1.344-3.076,2.117-4.75,2.117    c-0.838,0-2.039-0.201-2.979-1.139L42.026,56.141c-0.02-0.02-0.039-0.039-0.059-0.059l8.893-8.895    c0.012,0.014,0.023,0.027,0.035,0.039L76.54,73.211c0.844,0.848,1.246,2.076,1.125,3.455C77.53,78.211,76.784,79.73,75.522,80.99z    " fill="#afafaf"/>
                                      </g>
                                      </g>
  </svg>

  const weight = <svg className='inline mb-5 svg_border' style={{width:"100px",height:"100px"}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M256 46c-45.074 0-82 36.926-82 82 0 25.812 12.123 48.936 30.938 64H128L32 480h448l-96-288h-76.938C325.877 176.936 338 153.812 338 128c0-45.074-36.926-82-82-82zm0 36c25.618 0 46 20.382 46 46s-20.382 46-46 46-46-20.382-46-46 20.382-46 46-46zm-82.215 202.95h23.5v33.263l33.873-33.264h27.283l-43.883 43.15 48.4 47.974H233.54l-36.255-35.888v35.888h-23.5V284.95zm119.934 21.24c4.76 0 8.952.934 12.573 2.806 3.62 1.872 6.938 4.82 9.95 8.85v-10.13h21.972v61.462c0 10.986-3.48 19.368-10.438 25.146-6.917 5.82-16.968 8.727-30.152 8.727-4.272 0-8.4-.325-12.39-.976-3.986-.65-7.996-1.647-12.024-2.99v-17.03c3.826 2.198 7.57 3.826 11.23 4.884 3.664 1.098 7.347 1.648 11.05 1.648 7.162 0 12.41-1.566 15.746-4.7 3.337-3.132 5.006-8.035 5.006-14.708v-4.7c-3.01 3.986-6.328 6.916-9.95 8.788-3.62 1.87-7.813 2.808-12.573 2.808-8.343 0-15.238-3.275-20.69-9.826-5.453-6.592-8.18-14.974-8.18-25.146 0-10.214 2.727-18.576 8.18-25.086 5.452-6.55 12.347-9.827 20.69-9.827zm8.118 15.746c-4.517 0-8.038 1.67-10.56 5.005-2.523 3.338-3.784 8.058-3.784 14.162 0 6.266 1.22 11.026 3.662 14.28 2.442 3.215 6.003 4.823 10.682 4.823 4.557 0 8.096-1.67 10.62-5.006 2.522-3.337 3.784-8.036 3.784-14.098 0-6.104-1.262-10.824-3.785-14.16-2.523-3.337-6.062-5.006-10.62-5.006z"/></svg>

  const tough = <svg className='inline mb-5 svg_border' style={{width:"100px",height:"100px"}} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                      <g>
                                        <path className={styles.cls_1} style={{fill:'#fff'}} d="M487.379,344.399c-1.771-5.989-5.322-16.856-11.749-36.353c-20.818-63.816-134.955-287.63-134.955-287.63
                                          C334.247,6.459,319.617-1.53,304.339,0.245L163.175,17.539c-9.545,1.102-17.748,6.855-22.4,15.272c0,0-16.379,26.823-23.261,43.443
                                          c-6.861,16.62-2.877,33.24,11.08,42.994c13.957,9.733,80.437,26.363,93.078,20.822c21.059-9.314,31.92-51.4,31.92-51.4l31.898-5.54
                                          c0,0,13.31,45.85,11.08,86.191c-2.877,49.861,0.358,70.64,7.24,113.624c-8.732,3.006-17.888-8.01-36.929-25.86
                                          c-59.09-55.4-133.126-33.657-165.987,14.845c-8.636-7.316-40.85-11.144-77.779-14.845V512c62.79-7.379,90.848-50.32,90.848-50.32
                                          c34.369,6.855,87.372,2.235,131.19-5.177c80.956-13.69,134.735-44.962,134.735-44.962l89.101-30.138
                                          C484.266,376.088,492.464,359.682,487.379,344.399z"/>
                                      </g>
  </svg>

  const flexible = <svg className='inline mb-5 svg_border' style={{width:"100px",height:"100px"}} viewBox="0 0 64 64" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet"><path d="M61.035 39.982h.938l-3.75-3.671V19.3H62l-4.591-3.03v-3.762h.813v-1.59h-5.686v1.59h.813v1.082L47.91 10l-14.09 9.3h3.777v17.011l-3.75 3.671h.938v12.736a2.076 2.076 0 0 0-.496-.071c-.239 0-.465.047-.679.121c-.154-1.021-1.884-1.313-2.4-.559c.025-.111.041-.225.041-.343a1.57 1.57 0 0 0-1.576-1.563c-.163 0-.314.033-.46.08V39.982h.938l-3.75-3.671V19.3h3.777l-4.59-3.029v-3.763h.813v-1.59h-5.686v1.59h.813v1.083L16.09 10L2 19.3h3.777v17.011l-3.75 3.671h.938V58.33H2V62h60v-3.67h-.965V39.982M39.598 19.3h16.625v17.011H39.598V19.3m19.437 22.663V58.33h-13V46.404h.938v-1.836h-8.438v1.836h.938V58.33h-2.688V41.963h22.25M43.997 52.366c0-.342.282-.618.633-.618c.35 0 .632.276.632.618c0 .343-.282.62-.632.62a.625.625 0 0 1-.633-.62m-31.82 0c0-.342.282-.618.633-.618c.35 0 .632.276.632.618c0 .343-.282.62-.632.62a.625.625 0 0 1-.633-.62m22.608 4.728c-.027-.006-.052-.017-.081-.017c-.291 0-.525.288-.525 0s.234-.52.525-.52c.029 0 .054.011.081.016v.521m-5.57-.009v-.812c.548.035.985.477.985 1.027c0 .554-.435-.157-.985-.215m4.924-3.525c.248 0 .466.097.646.239v.776c-.179-.143-.401-.302-.646-.302c-.583 0-1.057.911-1.057.333c0-.579.474-1.046 1.057-1.046m-1.694 2.289c.394 0 .712.314.712.705c0 .39-.318-.19-.712-.19s-.712.58-.712.19c0-.391.319-.705.712-.705m-2.629-3.647a.71.71 0 0 1 .713.707c0 .39-.319-.191-.713-.191c-.254 0-.476.24-.602.306v-.47a.706.706 0 0 1 .602-.352M7.777 19.3h16.625v17.011H7.777V19.3M4.965 41.963h22.25V58.33h-13V46.404h.938v-1.836H6.715v1.836h.938V58.33H4.965V41.963" fill="#fff"></path><path d="M58.16 44.546h-9.624v9.54h9.624v-9.54m-5.296 8.587h-3.367v-3.341h3.367v3.341m0-4.296h-3.367v-3.34h3.367v3.34m4.332 4.296h-3.368v-3.341h3.368v3.341m0-4.296h-3.368v-3.34h3.368v3.34" fill="#fff"></path><path d="M43.098 32.476h9.624v-9.54h-9.624v9.54m5.292-8.587h3.368v3.339H48.39v-3.339m0 4.295h3.368v3.34H48.39v-3.34m-4.33-4.295h3.367v3.339H44.06v-3.339m0 4.295h3.367v3.34H44.06v-3.34" fill="#fff"></path><path d="M11.278 32.476h9.624v-9.54h-9.624v9.54m5.291-8.587h3.368v3.339h-3.368v-3.339m0 4.295h3.368v3.34h-3.368v-3.34m-4.33-4.295h3.367v3.339h-3.367v-3.339m0 4.295h3.367v3.34h-3.367v-3.34" fill="#fff"></path><path d="M26.34 44.546h-9.624v9.54h9.624v-9.54m-5.295 8.587h-3.367v-3.341h3.367v3.341m0-4.296h-3.367v-3.34h3.367v3.34m4.331 4.296h-3.368v-3.341h3.368v3.341m0-4.296h-3.368v-3.34h3.368v3.34" fill="#fff"></path></svg>
                                    
  const speed = <svg className='inline mb-5 svg_border' style={{width:"100px",height:"100px"}} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#fff"  d="M211.733 1260.088c16.32 131.947 68.587 258.027 151.254 364.8l-168.64 130.667C88.213 1618.488 21.013 1456.14 0 1286.22Zm1654.155-391.584c18.88 57.813 32.32 117.76 39.787 178.24 4.8 40 7.146 79.147 7.146 119.787 0 40.533-2.346 79.68-7.146 119.466-21.014 170.134-88.214 332.48-194.347 469.547l-168.64-130.667c82.667-106.773 134.933-232.853 151.253-364.8 3.734-30.72 5.547-61.76 5.547-93.546 0-31.894-1.813-62.934-5.547-93.867-5.866-46.613-16.106-93.013-30.72-137.813Zm-135.125-421.707 150.826 150.827-875.413 875.413-519.893-519.893 150.826-150.827 369.067 369.067 724.587-724.587ZM194.347 577.411l168.64 130.666c-82.667 106.774-134.934 232.854-151.254 364.8L0 1046.744c21.013-169.92 88.213-332.267 194.347-469.333ZM833.14 213.709l26.134 211.734c-132.054 16.213-258.134 68.586-364.8 151.253L363.7 408.056c137.067-106.133 299.307-173.44 469.44-194.347Zm239.456-.01c170.027 21.013 332.374 88.213 469.334 194.346l-130.774 168.64c-106.56-82.666-232.746-135.04-364.693-151.253Z" fillRule="evenodd"/>
  </svg>

  const energyEficiency = <svg className='inline mb-5 svg_border' style={{width:"100px",height:"100px"}} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs></defs><polyline className={styles.cls_1} points="20 8.5 20 22.5 4 22.5 4 8.5"/><polyline className={styles.cls_1} points="23 10.5 12 1.5 1 10.5"/><polygon className={styles.cls_1} points="15 12.5 12 12.5 12 9.5 9 13.5 12 13.5 12 16.5 15 12.5"/></svg>
  
  return (
    <>
      <Sections 
      isFirst={true}
      titleFirst={['Steel','Framing']}
      WSProvide='Que es Steel Framing?'
      EOservices={[
        {text:'Construccion con perfiles de acero galvanizado',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum eum in nulla aperiam officiis illo veritatis aut consectetur placeat, repellendus autem suscipit temporibus perspiciatis voluptas debitis nesciunt? Tempora, excepturi.'},
        {text:'Por que usar Steel Framing contra la construccion clasica',content:'Usar el sistema de construcción conocido como "steel framing" en lugar de la construcción tradicional con muros de carga de ladrillo o concreto ofrece una serie de ventajas:'},        
        {text:'Ventajas del Steel Framing',content:''},
      ]}
      TOSProvided={[
        {text:'Mayor Velocidad de contruccion',content:'Los componentes prefabricados se ensamblan rápidamente, lo que acelera el proceso de construcción y reduce los costos asociados con la mano de obra.',icon:speed},
        {text:'Amplia flexibilidad',content:'El steel framing es un método de construcción que se adapta a una amplia variedad de proyectos, desde viviendas unifamiliares hasta construcciones de gran escala. Este sistema tiene la capacidad de amoldarse a cualquier estilo arquitectónico y posibilita formatos realmente innovadores1. Además, el steel framing facilita las reformas o refacciones posteriores en las viviendas.',icon:flexible},
        {text:'Duracion del steel framing',content:'Los perfiles de acero galvanizado representan una inversión segura para cualquier proyecto de construcción que requiera durabilidad, resistencia y confiabilidad a largo plazo. Su capacidad para resistir la corrosión, el clima adverso y las cargas sustanciales asegura que mantengan su integridad estructural y estética durante décadas, convirtiéndolos en una elección inteligente y sostenible para profesionales de la construcción y diseñadores de proyectos a nivel mundial.',icon:tough},
        {text:'Menos Mantenimiento',content:'Los edificios construidos con steel framing requieren menos mantenimiento a lo largo del tiempo debido a la durabilidad y resistencia del material.',icon:maintenance},
      ]}
      highlight={[
          {
            text:'Hasta 75% mas rapido que la contruccion tradicional',
            icon:speed
          },
          {
            text:'Mayor eficiencia energetica',
            icon:energyEficiency
          },
          {
            text:'Alta duravilidad',
            icon:tough
          },
          {
            text:'Menos mantenimiento',
            icon:maintenance
          },
      ]}
      titleSecond=''
      backgroundURL='url(./steel-framing-background.webp)'
      left={true}
      ></Sections>
      <EndSections
        items={[
          {
            shorText:'VENTAJA1',
            icon:maintenance
          },
          {
            shorText:'VENTAJA2',
            icon:weight
          },
          {
            shorText:'VENTAJA3',
            icon:tough
          },
          {
            shorText:'VENTAJA4',
            icon:flexible
          },
          {
            shorText:'VENTAJA5',
            icon:energyEficiency
          },
          {
            shorText:'VENTAJA6',
            icon:maintenance
          },
        ]}    
      ></EndSections>

      <Sections 
      isFirst={false}
      titleFirst={['Electricidad']}
      WSProvide='Que es Steel Framing?'
      EOservices={[
        {text:'Construccion con perfiles de acero galvanizado',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum eum in nulla aperiam officiis illo veritatis aut consectetur placeat, repellendus autem suscipit temporibus perspiciatis voluptas debitis nesciunt? Tempora, excepturi.'},
        {text:'Por que usar Steel Framing contra la construccion clasica',content:'Usar el sistema de construcción conocido como "steel framing" en lugar de la construcción tradicional con muros de carga de ladrillo o concreto ofrece una serie de ventajas:'},        
        {text:'Ventajas del Steel Framing',content:''},
      ]}
      TOSProvided={[
        {text:'Mayor Velocidad de contruccion',content:'Los componentes prefabricados se ensamblan rápidamente, lo que acelera el proceso de construcción y reduce los costos asociados con la mano de obra.',icon:speed},
        {text:'Amplia flexibilidad',content:'El steel framing es un método de construcción que se adapta a una amplia variedad de proyectos, desde viviendas unifamiliares hasta construcciones de gran escala. Este sistema tiene la capacidad de amoldarse a cualquier estilo arquitectónico y posibilita formatos realmente innovadores1. Además, el steel framing facilita las reformas o refacciones posteriores en las viviendas.',icon:flexible},
        {text:'Duracion del steel framing',content:'Los perfiles de acero galvanizado representan una inversión segura para cualquier proyecto de construcción que requiera durabilidad, resistencia y confiabilidad a largo plazo. Su capacidad para resistir la corrosión, el clima adverso y las cargas sustanciales asegura que mantengan su integridad estructural y estética durante décadas, convirtiéndolos en una elección inteligente y sostenible para profesionales de la construcción y diseñadores de proyectos a nivel mundial.',icon:tough},
        {text:'Menos Mantenimiento',content:'Los edificios construidos con steel framing requieren menos mantenimiento a lo largo del tiempo debido a la durabilidad y resistencia del material.',icon:maintenance},
      ]}
      highlight={[
          {
            text:'Hasta 75% mas rapido que la contruccion tradicional',
            icon:speed
          },
          {
            text:'Mayor eficiencia energetica',
            icon:energyEficiency
          },
          {
            text:'Alta duravilidad',
            icon:tough
          },
          {
            text:'Menos mantenimiento',
            icon:maintenance
          },
      ]}
      titleSecond=''
      backgroundURL='url(./electricity-background.webp)'
      left={false}
      ></Sections>
      <EndSections
        items={[
          {
            shorText:'VENTAJA1',
            icon:maintenance
          },
          {
            shorText:'VENTAJA2',
            icon:weight
          },
          {
            shorText:'VENTAJA3',
            icon:tough
          },
          {
            shorText:'VENTAJA4',
            icon:flexible
          },
          {
            shorText:'VENTAJA5',
            icon:energyEficiency
          },
          {
            shorText:'VENTAJA6',
            icon:maintenance
          },
        ]}    
      ></EndSections>

      {/*backgroundURL='url(./refrigeration-background.webp)'*/}

      {/*backgroundURL='url(./water-pipes-background.webp)'*/}
      
    </>
  )
}