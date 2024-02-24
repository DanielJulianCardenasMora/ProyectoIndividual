const router = require("express").Router();









const getGameById = require("../controllers/getGameById");
const getGameQuery = require("../controllers/getGameQuery");
const getGame = require("../controllers/getGame");
const postGame = require("../controllers/postGame");
const getGenre = require("../controllers/getGenre");
const getAllGenres = require("../controllers/getAllGenres")
const getDBGames = require("../controllers/getDBGames")






router.get("/videogames/name", getGameQuery);
router.get("/videogames/:id", getGameById);
router.get("/videogames", getGame);
router.post("/videogames", postGame);
router.get("/genres", getGenre);
router.get("/allGenres", getAllGenres);
router.get("/allDBgames", getDBGames);






module.exports = router;




