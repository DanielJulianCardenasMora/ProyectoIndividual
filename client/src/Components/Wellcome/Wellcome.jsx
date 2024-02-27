import style from './Wellcome.module.css'









const Wellcome = () => {
  return (
    <>
      <div className={style.section1}>
        <div className={style.world}>
          <h1>Mundo</h1>  
          <h1>de los</h1>  
          <h1>Video Juegos</h1>  
        </div>
        
        <div className={style.bg}>
          <img className={style.imagen2} src={'../../../src/z_imagesFonts/Images/HD-wallpaper1.png'} />
          <img className={style.imagen} src={'../../../src/z_imagesFonts/Images/Landing Girl.png'} />
        </div>

          <img className={style.imagen3} src={'../../../src/z_imagesFonts/Images/HD-wallpaper2.png'} />
      </div>


      <div className={style.section3}>
        <div className={style.bg_gamers}>
          <img className={style.gamer1} src={'../../../src/z_imagesFonts/Images/desktop-wallpaper-anime-art-girl-by-valkryie-ymir-on-cool-art-retro-wave-anime-girl 1.png'} />
          <img className={style.gamer3} src={'../../../src/z_imagesFonts/Images/uwp4265035 1.png'} />
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