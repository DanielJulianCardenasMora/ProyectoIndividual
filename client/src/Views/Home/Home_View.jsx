import Cards_Display from "../../Components/Home/Cards_Display/Cards_Display"
import Filter_Db from "../../Components/Home/Filter_Db/Filter_Db"
import Filter_Genre from "../../Components/Home/Filter_Genre/Filter_Genre"
import Filter_Rating from "../../Components/Home/Filter_Rating/Filter_Rating"
import Search_Name from "../../Components/Home/Search_Name/Search_Name"
import Home from "../../Components/Home/Home"









const Home_View = ({back}) => {
  return (
    <>
      <div>
        <Home back={back} />
        <Cards_Display/>
        <Filter_Db/>
        <Filter_Genre/>
        <Filter_Rating/>
        <Search_Name/>
      </div>
    </>
  )
}

export default Home_View
  




  