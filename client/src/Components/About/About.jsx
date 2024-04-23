import style from './About.module.css'








const About = () => {
  return (
    <div className={style.bg}>
      <img className={style.bgimage} src={'../../../src/z_imagesFonts/Images/2.png'} alt={'Imagen principal'} />

      <div className={style.container}>
        <h2>Thank you so much for visiting</h2>
        <p>I am glad to share with you. In this project you will be able to create registers to the data base, and filter as needed. Para esta aplicacion se utilizaron las siguientes tecnologias.</p>
        <br/>
        <h3>* Node.JS: Cross-platform execution environment for JavaScript</h3>
        <h3>* JavaScript: Principal language</h3>
        <h3>* Express: The server</h3>
        <h3>* PostgreSQL: The data base</h3>
        <h3>* Sequelize: ORM for the data base </h3>
        <h3>* React: For the front-end</h3>
        <h3>* Redux: Front-end optimization library</h3>
      </div>
    </div>
  )
}

export default About