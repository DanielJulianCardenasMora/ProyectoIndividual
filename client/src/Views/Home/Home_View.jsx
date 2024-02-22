import Cards_Display from "../../Components/Home/Cards_Display/Cards_Display"
import Filter_Db from "../../Components/Home/Filter_Db/Filter_Db"
import Filter_Genre from "../../Components/Home/Filter_Genre/Filter_Genre"
import Filter_Order from "../../Components/Home/Filter_Order/Filter_Order"
import Filter_Rating from "../../Components/Home/Filter_Rating/Filter_Rating"
import Search_Name from "../../Components/Home/Search_Name/Search_Name"
import To_Next_Page from "../../Components/Home/To_Next_Page/To_Next_Page"
import Home from "../../Components/Home/Home"









const Home_View = ({games, gamesApiToShow}) => {
  return (
    <>
      <div>
        <Home />
        <Cards_Display games={games} gamesApiToShow={gamesApiToShow} />
        <Filter_Db/>
        <Filter_Genre/>
        <Filter_Order/>
        <Filter_Rating/>
        <Search_Name/>
        <To_Next_Page />
      </div>
    </>
  )
}

export default Home_View
  




  