const express = require("express");
const router = express.Router();
const {newpostController , fetchallposts ,fetchonepost , deletepost , updatepost} = require("../controllers/postController")

router.post("/addpost" , newpostController)
router.get("/allposts" , fetchallposts)
router.get("/onepost/:id" , fetchonepost)
router.delete("/deletepost/:id" , deletepost )
router.post("/updatepost/:id" , updatepost)
module.exports = router