import style from './Wellcome.module.css'


const Wellcome = ({homeimg2, homeimg, girLanding, girl1, girl2}) => {
  return (
    <>
      <div className={style.section1}>
        <div className={style.world}>
          <h1>Mundo</h1>  
          <h1>de los</h1>  
          <h1>Video Juegos</h1>  
        </div>
        
        <div className={style.bg}>
          <img className={style.imagen2} src={homeimg} />
          <img className={style.imagen} src={girLanding} />
        </div>

          <img className={style.imagen3} src={homeimg2} />
      </div>


      <div className={style.section3}>
        <div className={style.bg_gamers}>
          <img className={style.gamer1} src={girl1} />
          <img className={style.gamer3} src={girl2} />
        </div>

        <div className={style.section_text}>
          <h1>Como optener el maximo poder de esta pagina?</h1>
          <h2>En "Find" entraras en un almacen de 800.000 VideoJuegos</h2>
          <h3>Veras una demostracion de 15 Video Juegos hasta un total de 100</h3>
          <h2>Filtra por rating</h2>
          <h3>Ordena de mayor a menor su rating</h3>
          <h2>Busca todos</h2>
          <h3>En la casilla ingresa una palabra del nombre del Video Juego</h3>
        </div>
      </div>
    </>
  )
}

export default Wellcome