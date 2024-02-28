import style from './About.module.css'








const About = () => {
  return (
    <div className={style.bg}>
      <img className={style.bgimage} src={'../../../src/z_imagesFonts/Images/2.png'} alt={'Imagen principal'} />

      <div className={style.container}>
        <h2>Muchas gracias por visitar</h2>
        <p>Mi nombre es Daniel Julian y es mi total agrado compartirte mis habilidades de programacion. Este es mi proyecto individual en el bootcamp fullstack SoyHenry. Para esta aplicacion se utilizaron las siguientes tecnologias.</p>
        <br/>
        <h3>* Node.JS: Entorno de ejecución multiplataforma para JavaScript</h3>
        <h3>* JavaScript: Lenguaje principal</h3>
        <h3>* Express: El servidor</h3>
        <h3>* PostgreSQL: La base de datos</h3>
        <h3>* Sequelize: ORM para la base de datos </h3>
        <h3>* React: Componentes visuales front-end</h3>
        <h3>* Redux: Optimizar las funciones del front-end</h3>
      </div>
    </div>
  )
}

export default About