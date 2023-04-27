import Image from "next/image";
import React, { Fragment, Component,  useState } from 'react';
import Layout from "../components/layout";

const Github = () => (
    <Layout>
            <Fragment>

            </Fragment>
  
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          Como desarrollador, siempre me ha apasionado crear soluciones elegantes y efectivas para problemas complejos. Tengo una base sólida en el desarrollo de software, con un enfoque en tecnologías web como HTML, CSS y JavaScript. Disfruto trabajando tanto en el front-end como en el back-end de las aplicaciones, y siempre estoy buscando formas de optimizar el rendimiento, mejorar la experiencia del usuario y garantizar el más alto nivel de calidad del código.

          </p>
          <p>A lo largo de mi carrera, he trabajado en una amplia gama de proyectos, desde simples sitios web estáticos hasta aplicaciones complejas de nivel empresarial. Tengo experiencia trabajando con una variedad de herramientas y marcos de desarrollo, incluidos React, Angular, Vue.js, Node.js y Laravel. Siempre estoy ansioso por aprender y explorar nuevas tecnologías, y estoy constantemente buscando oportunidades para mejorar mis habilidades y conocimientos.</p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  
  </Layout>
)

export default Github;