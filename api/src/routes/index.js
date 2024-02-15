const router = require("express").Router();









const getGameById = require("../controllers/getGameById");
const getGameQuery = require("../controllers/getGameQuery");
const getGame = require("../controllers/getGame");
const postGame = require("../controllers/postGame");
const getGenre = require("../controllers/getGenre");
// const login = require("../controllers/login");



router.get("/videogames/name", getGameQuery);

router.get("/", (req, res) => {
  res.status(200).send('Entraste al Login')
});
router.get("/videogames/:id", getGameById);
router.get("/videogames", getGame);
router.post("/videogames", postGame);
router.get("/genres", getGenre);





module.exports = router;




