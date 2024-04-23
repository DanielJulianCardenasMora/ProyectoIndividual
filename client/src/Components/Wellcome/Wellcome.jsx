import style from './Wellcome.module.css'


const Wellcome = ({homeimg2, homeimg, girLanding, girl1, girl2}) => {
  return (
    <>
      <div className={style.section1}>
        <div className={style.world}>
          <h1>VIDEO</h1>  
          <h1>GAMES</h1>  
          <h1>WORLD</h1>  
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
          <h1>How to get the maximum power in this page?</h1>
          <h2>In "Find" you will see a store of 800.000 VideoGames</h2>
          <h3>There will be on screen 15 Video Games until a total of 100</h3>
          <h2>Filter by rating</h2>
          <h3>Order higher to lower rating</h3>
          <h2>Find within 800.000</h2>
          <h3>In the box enter a word of the Video Game name</h3>
        </div>
      </div>
    </>
  )
}

export default Wellcome